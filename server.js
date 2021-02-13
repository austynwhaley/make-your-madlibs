const express = require("express");
const exphbs = require("express-handlebars");

const app = express();
const PORT = process.env.PORT || 8080;

// Require models for syncing
const db = require("./models");

app.use(express.static("public"));

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Handlebars routes
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

// Serve static content from the "public" directory
app.use(express.static("public"));

// // Invoke routes
const routes = require("./routes/api-routes");
app.use(routes);

// Start server listening
db.sequelize.sync({}).then(() => {
  app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
});
