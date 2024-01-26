// server.js

// Import modules

const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const passport = require("./config/passport");
// const db = require('./models');
// const apiRoutes = require('./routes/api-routes');
// const htmlRoutes = require('./routes/html-routes');
// const userRoutes = require('./controllers/authController');

// require("dotenv").config();

const routes = require("./controllers");
const helpers = require("./utils/helpers");
const path = require("path");

const sequelize = require("./config/connection");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;
const hbs = exphbs.create({ helpers });

const sess = {
  secret: process.env.SESSION_SECRET || "SuperSecretSessionSecret", // Use a secure secret
  cookie: {
    maxAge: 86400000, // 24 hours in milliseconds
    secure: process.env.NODE_ENV === "production", // Set to true in production if using HTTPS
    httpOnly: false,
    // sameSite: "none",
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Initialize passport session before routes
// app.use(passport.initialize());
// app.use(passport.session());

// API Routes
// app.use("/api", require("./routes/api-routes"));

// App Routes
app.use(routes);
// app.use(htmlRoutes);
// app.use(userRoutes);

// Serve static files from the 'public' directory
// app.use(express.static("public"));

// Syncing our sequelize models and then starting our Express app
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});
