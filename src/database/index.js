import Sequelize from "sequelize";
import databaseConfig from "../config/database.js";

const connection = new Sequelize(databaseConfig);

const models = [];

models.forEach((model) => model.init(connection));
models.forEach(
  (model) => model.associate && model.associate(connection.models),
);
