import Sequelize from "sequelize";
import databaseConfig from "../config/database.js";

const connection = new Sequelize(databaseConfig[process.env.NODE_ENV]);

try {
  await connection.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database: ", error);
}

const models = [];

models.forEach((model) => model.init(connection));
models.forEach(
  (model) => model.associate && model.associate(connection.models),
);
