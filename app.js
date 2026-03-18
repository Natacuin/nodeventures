const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const errorController = require("./controllers/error");
const utilDir = require("./util/path");

const expressApp = express();
const expressHbs = require("express-handlebars");

// Register the engine
expressApp.engine(
  "hbs",
  expressHbs({
    layoutsDir: "views/layouts/",
    defaultLayout: "main-layout",
    extname: "hbs",
  }),
);

expressApp.set("view engine", "ejs");

expressApp.use(express.static(path.join(utilDir, "public")));
expressApp.use(bodyParser.urlencoded({ extended: true }));

expressApp.use("/admin", adminRoutes);
expressApp.use(shopRoutes);
expressApp.use(errorController.get404);

expressApp.listen(3000);
