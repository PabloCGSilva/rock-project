
const { dir } = require('console');
const express = require('express');
const router = express.Router();


router.get('/', function (req, res) {
    res.sendFile(process.cwd() + '/views/pages/index.html', /*{ root: src },*/ function(err) { if (err) console.log(err);})
    var dir = __dirname
    
    console.log(dir)
})

module.exports = router;