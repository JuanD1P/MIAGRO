import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./DOCSS/Create.css";
import logo from '../ImagenesP/ImagenesLogin/logoMiAgro.png';

function Create() {
  const [usuarios, setUsuarios] = useState([]);
  const [mensaje, setMensaje] = useState('');

  const fetchUsuarios = () => {
    axios.get('http://localhost:3000/api/usuarios')
      .then(response => {
        setUsuarios(response.data);
      })
      .catch(error => {
        console.error("Error al obtener usuarios:", error);
        setUsuarios([]);
      });
  };

  useEffect(() => {
    fetchUsuarios();
  }, []);

  const cambiarRol = async (id, nuevoRol) => {
    try {
      await axios.put(`http://localhost:3000/api/usuarios/${id}/rol`, { rol: nuevoRol });
      setMensaje(`Rol actualizado para el usuario con ID ${id}`);
      fetchUsuarios();
    } catch (error) {
      console.error('Error al cambiar rol:', error);
      setMensaje('Error al cambiar el rol');
    }
  };

  return (
    <div>
      <img src={logo} alt="Logo" className="logo-en-header" />
      <h2 class="chat-title">Lista de Usuarios</h2>     
      {mensaje && <p>{mensaje}</p>}
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Email</th>
              <th>Rol</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((usuario) => (
              <tr key={usuario.id}>
                <td>{usuario.id}</td>
                <td>{usuario.nombre_completo}</td>
                <td>{usuario.email}</td>
                <td>{usuario.rol}</td>
                <td>
                  <select
                    value={usuario.rol}
                    onChange={(e) => cambiarRol(usuario.id, e.target.value)}
                  >
                    <option value="USER">USER</option>
                    <option value="ADMIN">ADMIN</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Create;
