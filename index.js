const express = require('express')
const app = express()
const port = 3000

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/dog', function (req, res) {
  res.json({'sound' : '멍멍'})
})

app.get('/cat', function (req, res) {
  res.send({'sound' : '야옹'})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})