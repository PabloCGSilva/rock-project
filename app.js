const http = require('http')
const port = 3000
const express = require('express')
const app = express()

// app.set('view engine', 'ejs')
// app.set('views', path.join(__dirname, 'views/pages'));
const index = require(__dirname +'/routes/index.js')


app.use(index);

app.use(express.static('utils'))

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })