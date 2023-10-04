import server from './src/app';
import { conn } from './../src/utils/database';
const PORT = 3000;

// Syncing all the models at once.
conn.sync({ force: false }).then(() => {
  server.listen(PORT, () => {
    console.log(`server raised on port: ${PORT}`);
  });
});
