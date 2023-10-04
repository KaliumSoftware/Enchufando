const express = require('express');
const next = require('next');
const { sequelize } = require('./src/db');
const router = require('./src/router/index');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const bodyParser = require('body-parser');

app.prepare().then(() => {
  const server = express();

  server.use(
    bodyParser.urlencoded({ extended: true, limit: '50mb' })
  );
  server.use(bodyParser.json({ limit: '50mb' }));
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
