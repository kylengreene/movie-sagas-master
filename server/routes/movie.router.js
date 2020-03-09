const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/', (req, res) => {
    let queryText = `SELECT * FROM movies `
    pool.query(queryText).then(results => {
        res.send(results.rows);
       

    }).catch(error => {
        console.log('error getting gifs', error);
        res.sendStatus(500);
    })
});

router.put('/', (req, res) => {
    console.log('req.body.description fro put', req.body.description);

    let queryString = `UPDATE movies SET description='${req.body.description}' WHERE id=${req.body.id};`
    pool.query(queryString).then((results) => {
        res.sendStatus(200);
    }).catch((err) => {
        res.sendStatus(500);
        console.log(err);
    })
});

module.exports = router;