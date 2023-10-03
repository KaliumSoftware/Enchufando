import { DataTypes, Model } from 'sequelize';

export function defineUserModel(sequelize) {
  class User extends Model {
    static associate(models) {
      // Definir asociaciones aquí
      User.belongsToMany(models.Order, {
        through: 'OrderUser',
        timestamps: false
      });
    }
  }

  User.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    { sequelize, modelName: 'User' }
  );
  return User;
}
