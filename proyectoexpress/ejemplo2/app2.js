const express = require('express');
const app = express();

/*RUTEO BASICO*/
// Ruta GET para el home
app.get('/', (req, res) => {
  res.send('Página de inicio');
});

// Ruta GET para recibir datos simples
app.get('/data', (req, res) => {
  res.send('Datos recibidos');
});


/*RUTEO CON PARÁMETROS*/
// Ruta GET con parámetro de ruta
app.get('/user/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`Perfil del usuario con ID: ${userId}`);
});

// Ruta GET con múltiples parámetros
app.get('/product/:category/:id', (req, res) => {
  const category = req.params.category;
  const id = req.params.id;
  res.send(`Producto de categoría: ${category}, con ID: ${id}`);
});

// Iniciar el servidor: mostrar por consola
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});


