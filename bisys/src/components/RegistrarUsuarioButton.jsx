import React, { useState } from "react";
import "./RegistrarUsuarioButton.css";

const RegistrarUsuarioButton = ({ isOpen, onClose, onRegistered }) => {

  // estado local para capturar los campos
  const [formData, setFormData] = useState({
    Nombre: "",
    Apellido: "",
    TipoDeDocumento: "",
    NumeroDeDocumento: "",
    CorreoElectronico: "",
    Puesto: ""
  });

  // manejar cambios en inputs
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Conectar el POST desde el modal

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch(
      "http://127.0.0.1:8000/api/users/registrar?usuario_logueado=27",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      }
    );

    const data = await res.json();

    if (!res.ok) {
      alert(data?.detail || "No se pudo registrar el usuario");
      return;
    }

    alert("✅ Usuario registrado");

  if (typeof onRegistered === "function") {
  await onRegistered();   // refresca la tabla
}
onClose();                // cierra el modal

  } catch (err) {
    console.error(err);
    alert("❌ Error de red al registrar");
  }
};


  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>Registrar usuario</h3>
        <button className="btn-close" onClick={onClose}>X</button>

        <form onSubmit={handleSubmit} className="form-usuario">
          <input
            type="text"
            name="Nombre"
            placeholder="Nombre"
            value={formData.Nombre}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="Apellido"
            placeholder="Apellido"
            value={formData.Apellido}
            onChange={handleChange}
            required
          />
          <select
            name="TipoDeDocumento"
            value={formData.TipoDeDocumento}
            onChange={handleChange}
            required
          >
            <option value="">Seleccionar documento</option>
            <option value="DNI">DNI</option>
            <option value="LC">LC</option>
            <option value="LE">LE</option>
          </select>
          <input
            type="text"
            name="NumeroDeDocumento"
            placeholder="Número de documento"
            value={formData.NumeroDeDocumento}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="CorreoElectronico"
            placeholder="Correo electrónico"
            value={formData.CorreoElectronico}
            onChange={handleChange}
            required
          />
          <select
            name="Puesto"
            value={formData.Puesto}
            onChange={handleChange}
            required
          >
          <option value="">Seleccionar puesto a asignar</option>
          <option value="Operario">Operario</option>
          <option value="Ingeniero de Producción">Ingeniero de Producción</option>
          <option value="Ingeniero de Producto">Ingeniero de Producto</option>
          <option value="Encargado de la Producción">Encargado de la Producción</option>
          </select>


          <div className="acciones">
            <button type="button" className="btn-cancelar" onClick={onClose}>
              Cancelar
            </button>
            <button type="submit" className="btn-crear">
              Crear usuario
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrarUsuarioButton;
