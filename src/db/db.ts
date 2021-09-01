import { Sequelize } from "sequelize";

const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
  throw new Error("DATABASE_URL env var not defined");
}
let sequelizeOptions: any = {};
if (process.env.NODE_ENV !== "development") {
  sequelizeOptions.dialectOptions = {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  };
}

export const sequelize = new Sequelize(connectionString, sequelizeOptions);

export async function startDb() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    throw error;
  }
}
