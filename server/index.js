const server = require('./src/app');
const { sequelize } = require('./src/db');
const PORT = 3000;

// Syncing all the models at once.
sequelize.sync({ force: false }).then(() => {
  server.listen(PORT, () => {
    console.log(`server raised on port: ${PORT}`);
  });
});
