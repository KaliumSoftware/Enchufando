import { Sequelize } from 'sequelize';
import { defineOrderModel } from './models/Order';
import { defineProductModel } from './models/Product.js';
import { defineUserModel } from './models/User.js';

// Crear instancia de Sequelize
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;
const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
  {
    logging: false,
    native: false
  }
);

// Definir modelos
const User = defineUserModel(sequelize);
const Order = defineOrderModel(sequelize);
const Product = defineProductModel(sequelize);

// Exportar modelos y conexión
export { User, Order, Product, sequelize as conn };
