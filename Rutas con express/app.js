const express = require('express');
const path = require('path');
const pagesRoutes = require('./routes/pages'); // Importa las rutas

const app = express();
const PORT = 3009;

// Sirviendo archivos estáticos desde la carpeta 'static'
app.use(express.static('static'));

// Usar las rutas del archivo pages.js
app.use('/', pagesRoutes);

// Redirección automática desde la raíz a la Página 1
app.get('/', (req, res) => {
    res.redirect('/principal');
});

// Servidor en funcionamiento
app.listen(PORT, () => {
    console.log(`El servidor está en funcionamiento: http://localhost:${PORT}`);
});