const express = require("express");
const pool = require("../modules/pool");
require("dotenv").config();
const axios = require("axios");
const router = express.Router();

router.get("/:searchTerm", (req, res) => {
  let searchTerm = req.params.searchTerm;
  console.log("SERVER SEARCH:", searchTerm);

  axios
    .get(
      `http://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=${req.params.searchTerm}`
    )
    .then((response) => {
      console.log("Successesful API get", response.data);
      res.send(response.data);
    })
    .catch((error) => {
      console.log("Search router GET fail", error);
    });
});

module.exports = router;
