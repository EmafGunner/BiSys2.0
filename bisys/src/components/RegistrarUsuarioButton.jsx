import React, { useMemo, useState } from "react";
// Botón simple sin dependencias (reemplaza shadcn/ui)
const Button = ({ variant, className = "", ...props }) => (
  <button
    {...props}
    className={`px-3 py-2 rounded-lg ${variant === "secondary" ? "border" : "bg-black text-white"} ${className}`}
  />
);

// Simple helper for required-field validation
const required = (v) => (typeof v === "string" ? v.trim().length > 0 : !!v);

export default function RegistrarUsuario() {
  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    tipoDocumento: "",
    numeroDocumento: "",
    correoElectronico: "",
    puesto: "",
  });
  const [loading, setLoading] = useState(false);
  const [mensaje, setMensaje] = useState("");
  const [error, setError] = useState("");

  const valido = useMemo(() => {
    return (
      required(form.nombre) &&
      required(form.apellido) &&
      required(form.tipoDocumento) &&
      /^(?:\d{7,9}|[A-Za-z0-9.-]{5,})$/.test(form.numeroDocumento.trim()) &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.correoElectronico.trim()) &&
      required(form.puesto)
    );
  }, [form]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!valido) return;
    setLoading(true);
    setMensaje("");
    setError("");
    try {
      // Enviar al backend Python (FastAPI/Flask) que llama al SP `pro_gu_RegistrarUsuario`
      const res = await fetch("/registrar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre: form.nombre.trim(),
          apellido: form.apellido.trim(),
          tipoDocumento: form.tipoDocumento,
          numeroDocumento: form.numeroDocumento.trim(),
          correoElectronico: form.correoElectronico.trim(),
          puesto: form.puesto.trim(),
        }),
      });
      if (!res.ok) throw new Error(await res.text());
      const data = await res.json().catch(() => ({}));
      setMensaje(data?.mensaje || "Registraste el usuario exitosamente.");
      setForm({
        nombre: "",
        apellido: "",
        tipoDocumento: "",
        numeroDocumento: "",
        correoElectronico: "",
        puesto: "",
      });
    } catch (err) {
      setError(
        err?.message?.length ? err.message : "No se pudo registrar el usuario."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-2xl p-6">
      <div className="rounded-2xl shadow p-6 bg-white">
        <h2 className="text-xl font-semibold mb-1">Registrar usuario</h2>
        <p className="text-sm text-gray-600 mb-6">
          Completá los campos y presioná <b>Crear usuario</b>.
        </p>

        <form onSubmit={handleSubmit} className="grid gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="grid gap-1">
              <label htmlFor="nombre" className="text-sm font-medium">
                Nombre
              </label>
              <input
                id="nombre"
                name="nombre"
                value={form.nombre}
                onChange={handleChange}
                placeholder="Nombre del usuario a registrar"
                aria-label="Nombre del usuario a registrar"
                pattern="[A-Za-zÁÉÍÓÚÑáéíóúñ\s]+"
                title="Solo letras y espacios"
                className="border rounded-lg px-3 py-2 outline-none focus:ring w-full"
                required
              />
            </div>

            <div className="grid gap-1">
              <label htmlFor="apellido" className="text-sm font-medium">
                Apellido
              </label>
              <input
                id="apellido"
                name="apellido"
                value={form.apellido}
                onChange={handleChange}
                placeholder="Apellido del usuario a registrar"
                aria-label="Apellido del usuario a registrar"
                pattern="[A-Za-zÁÉÍÓÚÑáéíóúñ\s]+"
                title="Solo letras y espacios"
                className="border rounded-lg px-3 py-2 outline-none focus:ring w-full"
                required
              />
            </div>

            <div className="grid gap-1">
              <label htmlFor="tipoDocumento" className="text-sm font-medium">
                Tipo de documento
              </label>
              <select
                id="tipoDocumento"
                name="tipoDocumento"
                value={form.tipoDocumento}
                onChange={handleChange}
                aria-label="Seleccionar tipo de documento"
                className="border rounded-lg px-3 py-2 outline-none focus:ring w-full"
                required
              >
                <option value="" disabled>
                  Seleccionar
                </option>
                <option value="DU">DU</option>
                <option value="LE">LE</option>
                <option value="LC">LC</option>
                <option value="DNI">DNI</option>
              </select>
            </div>

            <div className="grid gap-1">
              <label htmlFor="numeroDocumento" className="text-sm font-medium">
                Número de documento
              </label>
              <input
                id="numeroDocumento"
                name="numeroDocumento"
                value={form.numeroDocumento}
                onChange={handleChange}
                placeholder="Ej.: 12345678"
                aria-label="Número de documento del usuario a registrar"
                inputMode="numeric"
                className="border rounded-lg px-3 py-2 outline-none focus:ring w-full"
                required
              />
            </div>

            <div className="grid gap-1">
              <label htmlFor="correoElectronico" className="text-sm font-medium">
                Correo electrónico
              </label>
              <input
                id="correoElectronico"
                name="correoElectronico"
                value={form.correoElectronico}
                onChange={handleChange}
                placeholder="correo@ejemplo.com"
                aria-label="Correo electrónico del usuario a registrar"
                type="email"
                className="border rounded-lg px-3 py-2 outline-none focus:ring w-full"
                required
              />
            </div>

            <div className="grid gap-1">
              <label htmlFor="puesto" className="text-sm font-medium">
                Puesto
              </label>
              <input
                id="puesto"
                name="puesto"
                value={form.puesto}
                onChange={handleChange}
                placeholder="Ej.: Encargado de la Producción"
                aria-label="Puesto del usuario a registrar"
                className="border rounded-lg px-3 py-2 outline-none focus:ring w-full"
                required
              />
            </div>
          </div>

          <div className="flex items-center justify-end gap-2 pt-2">
            <Button
              type="button"
              variant="secondary"
              onClick={() => {
                setForm({
                  nombre: "",
                  apellido: "",
                  tipoDocumento: "",
                  numeroDocumento: "",
                  correoElectronico: "",
                  puesto: "",
                });
                setMensaje("");
                setError("");
              }}
            >
              Cancelar
            </Button>
            <Button type="submit" disabled={!valido || loading}>
              {loading ? "Creando..." : "Crear usuario"}
            </Button>
          </div>
        </form>

        {mensaje && (
          <div className="mt-4 rounded-lg bg-green-50 px-3 py-2 text-green-700 text-sm">
            {mensaje}
          </div>
        )}
        {error && (
          <div className="mt-4 rounded-lg bg-red-50 px-3 py-2 text-red-700 text-sm">
            {error}
          </div>
        )}
      </div>

      <div className="mt-6 text-xs text-gray-500">
        <p>
          * Este formulario envía <code>nombre, apellido, tipoDocumento, numeroDocumento, correoElectronico, puesto</code> al endpoint
          <code> /api/usuarios/registrar</code> del backend.
        </p>
      </div>
    </div>
  );
}
