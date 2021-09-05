require("dotenv").config();
const app = require("./src/app");
const { conn } = require("./src/db");

const PORT = 3001

conn.sync().then(() => {
  app.listen(process.env.PORT, () => {
      console.log(`Listening at ${process.env.PORT}...`)
  })
});
