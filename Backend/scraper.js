import fs from 'fs';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const pdfParse = require('pdf-parse');

// 🔧 Limpia tildes, espacios y convierte todo a minúsculas
function normalizar(texto) {
  return texto
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/[,]/g, '')
    .toLowerCase();
}

export async function obtenerPrecios() {
  const filePath = './pdfs/PreciosCorabastos.pdf';

  try {
    const dataBuffer = fs.readFileSync(filePath);
    const data = await pdfParse(dataBuffer);
    const lineas = data.text.split('\n').map(l => l.trim()).filter(Boolean);

    const cultivos = [
      "Lechuga batavia",
      "Lechuga crespa verde",
      "Espinaca",
      "Repollo morado",
      "Repollo verde",
      "Acelga",
      "Cebolla junca aquitania",
      "Apio",
      "Fresa",
      "Uchuva con cáscara",
      "Curuba",
      "Papa criolla limpia",
      "Papa criolla sucia",
      "Papa sabanera",
      "Papa parda pastusa",
      "Arveja verde en vaina"
    ];

    const presentacionesRegex = /(atado\/manojo|bolsa|bulto|docena|kilogramo|canastilla|caja de carton|caja de madera|caja de icopor|unidad)/i;
    const precioRegex = /\d{2,3}\.?\d{3}/g;

    const productos = [];

    for (const nombre of cultivos) {
      const nombreNorm = normalizar(nombre);
      const lineaOriginal = lineas.find(l => normalizar(l).includes(nombreNorm));

      if (lineaOriginal) {
        const linea = normalizar(lineaOriginal);

        const presentacionMatch = linea.match(presentacionesRegex);
        const precios = linea.match(precioRegex);

        const precioValido = precios?.map(p => parseInt(p.replace('.', '')))
          .find(n => n >= 500 && n <= 500000);

        productos.push({
          producto: nombre,
          presentacion: presentacionMatch ? presentacionMatch[0].charAt(0).toUpperCase() + presentacionMatch[0].slice(1) : "N/D",
          precio: precioValido ? `${precioValido} COP` : "Precio no legible"
        });
      } else {
        productos.push({
          producto: nombre,
          presentacion: "N/D",
          precio: "Producto no encontrado en el PDF."
        });
      }
    }

    return productos;
  } catch (err) {
    console.error("❌ Error leyendo PDF:", err.message);
    return [];
  }
}
