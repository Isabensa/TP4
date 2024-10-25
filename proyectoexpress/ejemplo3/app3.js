const express = require('express');
const app = express(); // Define la instancia de Express

// Ruta GET con parámetro de consulta
// Solicitud: http://localhost:3000/search?q=javascript
app.get('/search', (req, res) => {
  const query = req.query.q;
  res.send(`Resultados de búsqueda para: ${query}`);
});

// Ruta GET con múltiples parámetros de consulta
// Solicitud: http://localhost:3000/filter?type=book&minPrice=10&maxPrice=50
app.get('/filter', (req, res) => {
  const { type, minPrice, maxPrice } = req.query;
  res.send(`Filtrar por tipo: ${type}, rango de precios: ${minPrice} - ${maxPrice}`);
});

// Iniciar el servidor
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
