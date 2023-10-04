const express = require('express');
const next = require('next');
const { sequelize } = require('./src/db');
const router = require('./src/router/index');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Aquí puedes agregar tus rutas y lógica de Express
  server.use('/', router);

  // Configura Next.js para manejar todas las demás rutas
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  const PORT = process.env.PORT || 3000;

  sequelize.sync({ force: false }).then(() => {
    server.listen(PORT, (err) => {
      if (err) throw err;
      console.log(`Servidor Express escuchando en el puerto ${PORT}`);
    });
  });
});
