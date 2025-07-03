require("dotenv").config();
const { Sequelize } = require("sequelize");
const pg = require("pg");

// Feel free to rename the database to whatever you want!
const dbName = "ttp_crud";

const db = new Sequelize(
  process.env.DATABASE_URL || `postgres://postgres:BilalBomb1*@localhost:5432/${dbName}`,
  {
    logging: false, // comment this line to enable logging
  }
);

module.exports = db;
