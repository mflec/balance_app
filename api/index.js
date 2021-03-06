require("dotenv").config();
const app = require("./src/app");
const { conn } = require("./src/db");

const PORT = process.env.PORT || 3001

conn.sync().then(() => {
  app.listen(PORT, () => {
      console.log(`Listening at ${PORT}...`)
  })
});
