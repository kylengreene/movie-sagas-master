const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/', (req, res) => {
    let queryText = `SELECT * FROM movies `
    pool.query(queryText).then(results => {
        res.send(results.rows);
        console.log('logging favrite row in router', results.rows);

    }).catch(error => {
        console.log('error getting gifs', error);
        res.sendStatus(500);
    })
});


module.exports = router;