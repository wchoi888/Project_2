// server.js

// Export modules
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const passport = require('./config/passport');
const db = require('./models');
const apiRoutes = require('./routes/api-routes');

require('dotenv').config();


const app = express();
const PORT = process.env.PORT || 3000;

// Set up Express to use handlebars as the template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Middleware for parsing JSON and handling forms
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({ secret: 'your-secret-key', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Routes 
app.use('/api', apiRoutes);

// Syncing our sequelize models and then starting our Express app
db.sequilize.sync().then(() => {
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  });
});