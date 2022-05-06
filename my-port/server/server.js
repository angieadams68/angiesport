/// importing ///

const express = require("express");
const cors = require("cors");
const db = require("./db");
const logger = require("morgan");


/// variables ///
const PORT = process.env.PORT || 3001
const app = express()

/// middleware ///
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(logger("dev"));

/// routes ///

app.get("/", (req, res) => {
    res.send("This is root!");
  });




  /// express server listening to port ///

  app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`)
  })