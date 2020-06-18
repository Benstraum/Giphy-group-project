const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");
require("dotenv").config();

// return all favorite images
router.get("/", (req, res) => {
  const queryText = `SELECT * FROM favorites ORDER BY id ASC`;
  pool
    .query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log("ERROR SELECT favorites DB QUERY", error);
      res.sendStatus(500);
    });
});

// add a new favorite
router.post("/", (req, res) => {
  const values = [req.body.url, req.body.category];
  const queryText = `INSERT INTO favorites ("url", "category_id") VALUES ($1, $2)`;
  pool
    .query(queryText, values)
    .then((result) => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log("DB POST ERR", error);
      res.sendStatus(500);
    });
});

// update given favorite with a category id

  router.put("/:favId", (req, res) => {
    queryText = `UPDATE favorites SET "category_id" = $1 WHERE "id" = $2`
    console.log('this is req.body',req.body);
    pool.query(queryText, [req.body.category, req.body.id])
      .then(result => {
        res.sendStatus(200);
      })
      .catch(error => {
        res.sendStatus(500);
      })
  })

// delete a favorite
router.delete("/:id", (req, res) => {
  queryText = `DELETE FROM favorites WHERE id=$1`;
  const id = req.params.id;

  pool
    .query(queryText, [id])
    .then((result) => {
      console.log(result);
      res.sendStatus(200);
    })
    .catch((error) => {
      console.log("DELETE DB ERR", error);
      res.sendStatus(418);
    });
});

module.exports = router;
