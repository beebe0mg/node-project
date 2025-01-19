const express = require('express')
const app = express()
const port = 3000

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/user/:id', function (req, res) {
    // const q = req.params
    // console.log(q.id);

    const q = req.query
    console.log(q.q);
    console.log(q.name);
    res.json({'userid' : q.name})

})

app.get('/cat', function (req, res) {
  res.send({'sound' : '야옹'})
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})