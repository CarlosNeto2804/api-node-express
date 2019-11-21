if (process.env.NODE_ENV !== "Homolog" || process.env.NODE_ENV !== "Produc") {
  require("dotenv").config();
}

const DATA_BASE = {
  name: process.env.DB_NAME,
  url: process.env.DB_URL,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD
};
const HOST = {
  api: process.env.APIHOST,
  app: process.env.APPHOST
};
const PORT = process.env.PORT;
const SECRET = process.env.SECRET;
const PUBLIC_KEY = process.env.PUBLIC_KEY;

class Config {
  static createConfig() {
    global.config = {
      port: PORT,
      db: DATA_BASE,
      public_key: PUBLIC_KEY,
      secret: SECRET,
      hosts: HOST
    };
  }
}
module.exports = Config.createConfig();
