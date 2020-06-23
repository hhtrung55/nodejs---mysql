const mysql = require("mysql");
const dotenv = require("dotenv");
dotenv.config();
let instance = null;
const connection = mysql.connection({
  host: process.env.HOST,
  user: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  port: process.env.PORT,
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  }
  console.log("db" + connection.state);
});

class DbService {
  static getDbServiceInstance() {
    return instance ? instance : new DbService();
  }

  async getAllData() {
    try {
      const res = await new Promise((resolve, reject) => {
        const query = "select * from demo.user";
        connection.query(query, (err, results) => {
          if (err) reject(new Error(err.message));
          resolve(results);
        });
      });
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = DbService;
