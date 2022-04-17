
const express = require('express');
const router = express.Router();


router.get('/', function (req, res) {
    res.sendFile('/home/pablo/Documents/new-project/src/views/index.html', function(err) { if (err) console.log(err);})
})

/*router.get('/', function (req, res) {
    res.sendFile('/home/pablo/Documents/new-project/utils/main.js', function(err) { if (err) console.log(err);})
})*/


module.exports = router;