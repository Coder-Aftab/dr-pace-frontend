import { Sequelize } from "sequelize";

const initDB = async ({ host, database, username, password }) => {
  const sequelize = new Sequelize(database, username, password, {
    host,
    dialect: "postgres",
    logging: false,
  });

  try {
    await sequelize.authenticate();
    console.log("Database connected successfuly");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    process.exit(1);
  }

  return sequelize;
};

export default initDB;
