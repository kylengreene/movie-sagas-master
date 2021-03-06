const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/:id', (req, res) => {
    console.log('logging req.params in detail router', req.params.id);
    
    let queryText = `SELECT genres.name  FROM genres JOIN genre_reference_table on genres.id=genre_reference_table.genre_id where genre_reference_table.movie_id =${req.params.id} `
    pool.query(queryText).then(results => {
        console.log('logging favrite row in router', results.rows);
        res.send(results.rows);
    }).catch(error => {
        console.log('error getting details', error);
        res.sendStatus(500);
    })
});

router.put('/', (req, res) => {
    console.log('logging body', req.body);

    let queryString = `INSERT INTO genre_reference_table (movie_id,genre_id) VALUES(${req.body.id},${req.body.genres})`
    pool.query(queryString).then((results) => {
        res.sendStatus(200);
    }).catch((err) => {
        res.sendStatus(500);
        console.log(err);
    })
});

module.exports = router;