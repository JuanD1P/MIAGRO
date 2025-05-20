import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

const ProductoDetalle = ({ detalle, onCerrar }) => {
  if (!detalle) return null;

  const dataGrafico = Object.entries(detalle.precios2024).map(([mes, precio]) => ({
    mes,
    precio,
  }));

  return (
    <div className="agrimarket-dark-detalle">
      <button onClick={onCerrar} className="agrimarket-dark-btn-cerrar">✖ Cerrar</button>
      <h2>📊 Análisis de: {detalle.producto}</h2>
      <p><strong>🌾 Presentación:</strong> {detalle.presentacion}</p>
      <p><strong>🗓 Días a cosecha:</strong> {detalle.diasACosecha}</p>
      <p><strong>🌡 Temperatura ideal:</strong> {detalle.temperaturaIdeal}</p>
      <p><strong>💧 Humedad ideal:</strong> {detalle.humedadIdeal}</p>
      <p><strong>✅ Recomendación:</strong> {detalle.recomendacion}</p>

      <h3 style={{ marginTop: '1.5rem' }}>💰 Precio mensual 2024</h3>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={dataGrafico}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="mes" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="precio" fill="#00c853" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ProductoDetalle;
