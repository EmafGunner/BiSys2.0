import React, { useState } from "react";
import "./RegistrarUsuarioButton.css";

const RegistrarUsuarioButton = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

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

  // manejar submit (después conectamos al back)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos a enviar:", formData);
    // acá después llamamos al backend
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
