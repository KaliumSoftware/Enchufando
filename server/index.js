const express = require('express');
const next = require('next');
const morgan = require('morgan');
const { sequelize } = require('./src/db');
const router = require('./src/router/index');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use(morgan('dev'));
  server.use(express.json());
  server.use('/', router);

  // Next.Js configuration
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  const PORT = process.env.PORT || 3000;

  sequelize.sync({ force: false }).then(() => {
    server.listen(PORT, (err) => {
      if (err) throw err;
      console.log(`Server listening on port: ${PORT}`);
    });
  });
});
