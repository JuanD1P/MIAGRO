// src/components/PreciosAgricolas.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './DOCSS/PreciosAgricolas.css';
import ProductoDetalle from './ProductoDetalle';
import { analisisAgricola } from './data/analisisAgricola';

const PreciosAgricolas = () => {
  const [datos, setDatos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [detalle, setDetalle] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3000/api/precios')
      .then(res => {
        setDatos(res.data);
        setCargando(false);
      })
      .catch(err => {
        console.error("Error cargando precios:", err);
        setCargando(false);
      });
  }, []);

  const getIcono = (presentacion) => {
    const iconos = {
      bulto: "📦",
      bolsa: "🛍",
      docena: "📘",
      kilogramo: "⚖️",
      canastilla: "🧺",
      unidad: "🔹"
    };
    return iconos[presentacion.toLowerCase()] || "📌";
  };

  if (cargando) return <p className="agrimarket-dark-cargando">🌾 Cargando productos agrícolas de Facatativá...</p>;

  return (
    <div className="agrimarket-dark-container">
      <div className="agrimarket-dark-header">
        <div>
          <h1>Facatativá, Cundinamarca</h1>
          <p className="agrimarket-dark-sub">Hoy en Mi Agro: precios mayoristas directamente desde Corabastos</p>
          <p className="agrimarket-dark-sub-bajada">👩‍🌾💚</p>
        </div>
        <button className="agrimarket-dark-btn-volver" onClick={() => window.history.back()}>
          Volver
        </button>
      </div>

      <div className="agrimarket-dark-grid">
        {datos.map((item, i) => (
          <div
            key={i}
            className={`agrimarket-dark-card ${item.precio.includes('no') ? 'agrimarket-dark-error' : 'agrimarket-dark-ok'}`}
            onClick={() => {
              const encontrado = analisisAgricola.find(p =>
                p.producto.toLowerCase() === item.producto.toLowerCase()
              );
              setDetalle(encontrado || null);
            }}
          >
            <h3>{item.producto}</h3>
            <p><strong>🌱 Presentación:</strong> {item.presentacion} {getIcono(item.presentacion)}</p>
            <p>
              <strong>💰 Precio:</strong>{' '}
              {item.precio.includes('no') ? (
                <span className="agrimarket-dark-warning">⚠ {item.precio}</span>
              ) : (
                <span>{item.precio}</span>
              )}
            </p>
          </div>
        ))}
      </div>

      {detalle && <div className="agrimarket-dark-overlay"></div>}
      {detalle && (
        <ProductoDetalle detalle={detalle} onCerrar={() => setDetalle(null)} />
      )}

      <footer className="agrimarket-dark-footer">
        MI agro 💚
      </footer>
    </div>
  );
};

export default PreciosAgricolas;
