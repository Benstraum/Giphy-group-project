const express = require("express");
const router = express.Router();
const axios = require("axios");
const pool = require('../modules/pool');
require("dotenv").config();


// return all favorite images
router.get('/', (req, res) => {
  const queryText = `SELECT * FROM favorites`
  pool.query(queryText)
  .then(result => {
    console.log(result)
    res.send(result.rows)
  })
  .catch(error => {
    console.log("ERROR SELECT favorites DB QUERY", error);
    res.sendStatus(500);
  })
});

// add a new favorite 
router.post('/', (req, res) => {
  res.sendStatus(200);
});

// update given favorite with a category id
router.put('/:favId', (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  res.sendStatus(200);
});

// delete a favorite
router.delete('/', (req, res) => {
  res.sendStatus(200);
});

module.exports = router;
