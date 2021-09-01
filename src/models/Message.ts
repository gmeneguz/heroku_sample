import { DataTypes, Model } from "sequelize";
import { sequelize } from "../db/db";

export class Message extends Model {}

Message.init(
  {
    text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize, // We need to pass the connection instance
    modelName: "Message", // We need to choose the model name
  }
);
