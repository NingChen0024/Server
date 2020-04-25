var express = require('express')
var router = express.Router()
var pool = require('./db')




router.get('/hello', function(req, res){
    res.json('hello world')
})



router.get('/api/get/allanimals', (req, res, next) => {
    pool.query("SELECT * FROM animals", (q_err, q_res) =>{
        res.json(q_res.rows)
    })
})

router.get('/api/get/allposts', (req, res, next) => {
    pool.query("SELECT * FROM animals", (q_err, q_res) =>{
        res.json(q_res.rows)
    })
})


module.exports = router
