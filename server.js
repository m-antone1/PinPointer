// load .env data into process.env
require('dotenv').config();

// Web server config
const PORT       = process.env.PORT || 8080;
const ENV        = process.env.ENV || "development";
const express    = require("express");
const bodyParser = require("body-parser");
const sass       = require("node-sass-middleware");
const app        = express();
const morgan     = require('morgan');
const cookieParser = require('cookie-parser');
// const cookieSession = require('cookie-session');
const { formHandling } = require("./formHandling");

// PG database client/connection setup
const { Pool } = require('pg');
const dbParams = require('./lib/db.js');
const db = new Pool(dbParams);
db.connect();

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));
app.use(cookieParser());

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/styles", sass({
  src: __dirname + "/styles",
  dest: __dirname + "/public/styles",
  debug: true,
  outputStyle: 'expanded'
}));
app.use(express.static("public"));


// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const usersRoutes = require("./routes/users");
const widgetsRoutes = require("./routes/widgets");
const mapsRoutes = require("./routes/maps");
const markersRoutes = require("./routes/markers.js");
const favouritesRoutes = require("./routes/favouriteMaps");

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
app.use("/api/users", usersRoutes(db));
app.use("/api/widgets", widgetsRoutes(db));
app.use("/api/maps", mapsRoutes(db));
app.use("/api/markers", markersRoutes(db));
app.use("/api/favourites", favouritesRoutes(db));


// Note: mount other resources here, using the same pattern above


// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).
app.get("/", (req, res) => {
  let query = `SELECT * FROM users;`;
  db.query(query)
    .then(data => {
      formHandling(req, res, data.rows);
      return;
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
});

//post for login, and e-mail and password check
app.get("/login:id", (req, res) => {
  console.log("Test", req.body);
  res.cookie('user_id', req.params.id);
  res.redirect('/');
  // const loginEmail = req.body.email;
  // const loginPass = req.body.loginPass;
  // if (loginEmail === "" && loginPass === undefined) {
  //   res.status(403).send("Please use a valid email");
  //   return;
  // }
  // if (loginEmail === undefined && loginPass === "") {
  //   res.status(403).send("Please use a valid password");
  //   return;
  // }

  //retrieving from db for users
  // let query = `SELECT * FROM users;`;
  // db.query(query)
  //   .then(data => {
  //     formHandling(req, res, data.rows);
  //     return;
  //   })
  //   .catch(err => {
  //     res.status(500).json({ error: err.message });
  //   });
});

//clearing cookies after logout
app.post("/logout", (req, res) => {
  console.log("logout");
  res.clearCookie("pass_validated");
  res.clearCookie("email_validated");
  res.clearCookie("user_id");
  res.send("cookies cleared");
});

//register post, email and password check.
app.post("/register", (req, res) => {
  const loginEmail = req.body.loginEmail;
  const loginPass = req.body.loginPass;
  if (loginPass === undefined && loginEmail === "") {
    res.status(403).send("Please use a valid email");
    return;
  }
  if ( loginPass === "" && loginEmail === undefined) {
    res.status(403).send("Please use a valid password");
    return;
  }
});


app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
