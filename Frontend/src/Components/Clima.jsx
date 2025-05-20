import React, { useState, useEffect } from "react";
import axios from "axios";
import "./DOCSS/Clima.css";
import { useNavigate } from "react-router-dom"; 
import logo from '../ImagenesP/ImagenesLogin/logoMiAgro.png';
import Coney from '../ImagenesP/CLIMA.png'; 

const descripcionViento = (velocidad) => {
  if (velocidad === 0) return "sin viento";
  if (velocidad > 0 && velocidad <= 3) return "viento suave";
  if (velocidad > 3 && velocidad <= 7) return "viento moderado";
  return "viento fuerte";
};

const descripcionNubes = (porcentaje) => {
  if (porcentaje === 0) return "cielo despejado";
  if (porcentaje > 0 && porcentaje <= 25) return "pocas nubes";
  if (porcentaje > 25 && porcentaje <= 60) return "nubes parciales";
  return "nublado";
};

const descripcionLluvia = (mm) => {
  if (mm === 0) return "sin lluvia";
  if (mm > 0 && mm <= 2) return "posible lluvia ligera";
  if (mm > 2 && mm <= 10) return "lluvia moderada";
  return "tormenta";
};

const descripcionNieve = (mm) => {
  if (mm === 0) return "sin nieve";
  if (mm > 0 && mm <= 2) return "posible nevada ligera";
  if (mm > 2 && mm <= 10) return "nevada moderada";
  return "nevada intensa";
};

const obtenerNombreDia = (fechaStr) => {
  const fecha = new Date(`${fechaStr}T12:00:00`);
  const opciones = { weekday: "long" };
  const dia = fecha.toLocaleDateString("es-ES", opciones);
  return dia.charAt(0).toUpperCase() + dia.slice(1);
};



const Clima = () => {
  const navigate = useNavigate();
  const [clima, setClima] = useState(null);
  const [diaSeleccionado, setDiaSeleccionado] = useState(null);

  useEffect(() => {
    axios.get("https://miagro.onrender.com/auth/clima")
      .then(response => setClima(response.data))
      .catch(error => console.error("Error obteniendo el clima:", error));
  }, []);

  if (!clima) return <p className="loading">Cargando datos del clima...</p>;

  const resumen = clima.hoy && clima.hoy.length > 0 ? clima.hoy[0] : null;
  const diaDetalles = diaSeleccionado !== null ? clima.pronostico[diaSeleccionado] : null;

  
  return (
    
    <div className="inicioP">
        <div className="navbar">
        <img src={logo} alt="Logo" className="logoclima" />
        <button onClick={() => navigate("/ChatIA")}>Chat IA</button>
        <button onClick={() => navigate("/PreciosAgricolas")}>Precios de Mercado</button>
        <button className="cerrar" onClick={() => navigate("/")}>Cerrar sesión</button>
        </div>

    <div className="clima">
      
      <div className="clima-container">
        <section className="resumen-hoy">
          <h2>🌤️ Clima en {clima.ciudad}, {clima.pais}</h2>
          {resumen && (
            <>
              <h3>📅 Hoy</h3>
              <img
                src={`https://openweathermap.org/img/wn/${resumen.icono}@4x.png`}
                alt={resumen.descripcion}
                className="icono-hoy"
              />
              <p className="temp-hoy">{resumen.temp}°C</p>
              <div className="detalles-hoy">
                <p><strong>Viento:</strong> {descripcionViento(resumen.viento.velocidad)}, dirección: {resumen.viento.grados}° {resumen.viento.rafaga ? `(ráfaga: ${resumen.viento.rafaga} m/s)` : ''}</p>
                <p><strong>Cielo:</strong> {descripcionNubes(resumen.nubes)}</p>
                <p><strong>Lluvia:</strong> {descripcionLluvia(resumen.lluvia)}</p>
                <p><strong>Nieve:</strong> {descripcionNieve(resumen.nieve)}</p>
                <p><strong>Humedad:</strong> {resumen.humedad}%</p>
                <p><strong>Presión:</strong> {resumen.presion} hPa</p>
                <p><strong>Visibilidad:</strong> {resumen.visibilidad} m</p>
              </div>
            </>
          )}
        </section>

        <section>
          <h3>📆 Pronóstico próximos días (12:00)</h3>
          <div className="pronostico-container">
            {clima.pronostico.length > 0 ? (
              clima.pronostico.map((dia, index) => (
                <div
                  key={index}
                  className={`dia-pronostico ${diaSeleccionado === index ? "seleccionado" : ""}`}
                  onClick={() => setDiaSeleccionado(diaSeleccionado === index ? null : index)}
                  title="Haz click para ver detalles"
                >
                  <p><strong>{obtenerNombreDia(dia.fecha)}</strong></p>
                  <img
                    src={`https://openweathermap.org/img/wn/${dia.icono}@2x.png`}
                    alt={dia.descripcion}
                    className="icono-dia"
                  />
                  <p><strong>{dia.temp}°C</strong></p>
                  <p>{dia.descripcion}</p>
                </div>
              ))
            ) : (
              <p>No hay datos de pronóstico disponibles.</p>
            )}
          </div>
        </section>
      </div>

      {/* Modal */}
      {diaDetalles && (
        <div className="modal-fondo" onClick={() => setDiaSeleccionado(null)}>
          <div className="modal-ventana" onClick={e => e.stopPropagation()}>
            <button className="modal-cerrar" onClick={() => setDiaSeleccionado(null)} aria-label="Cerrar modal">&times;</button>
            <h4>Detalles para {obtenerNombreDia(diaDetalles.fecha)}</h4>
            <p><strong>Viento:</strong> {descripcionViento(diaDetalles.viento.velocidad)}, dirección: {diaDetalles.viento.grados}° {diaDetalles.viento.rafaga ? `(ráfaga: ${diaDetalles.viento.rafaga} m/s)` : ''}</p>
            <p><strong>Cielo:</strong> {descripcionNubes(diaDetalles.nubes)}</p>
            <p><strong>Lluvia:</strong> {descripcionLluvia(diaDetalles.lluvia)}</p>
            <p><strong>Nieve:</strong> {descripcionNieve(diaDetalles.nieve)}</p>
            <p><strong>Humedad:</strong> {diaDetalles.humedad}%</p>
            <p><strong>Presión:</strong> {diaDetalles.presion} hPa</p>
            <p><strong>Visibilidad:</strong> {diaDetalles.visibilidad} m</p>
          </div>
        </div>

      )}
    </div>
    <img src={Coney} alt="Coney" className='ConeyInicio2' />
    </div>
  );
};

export default Clima;
