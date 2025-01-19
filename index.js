const express = require('express')
const app = express()
const port = 3000

app.get('/', function (req, res) {
  res.send('Hello World')
})

// app.get('/user/:id', function (req, res) {
//     // const q = req.params
//     // console.log(q.id);

//     // const q = req.query
//     // console.log(q.q);
//     // console.log(q.name);
//     // res.json({'userid' : q.name})

//     const p = req.params;
//     console.log(p);
//     const q = req.query;
//     console.log(q);

//     res.send({'message' : 'Hello World!'});
// })

// app.get('/sound/:name', function (req, res) {
//     const q = req.params

//     if(q.name == "cat") res.send('야옹')
//     if(q.name == "dog") res.send('멍멍')
//     if(q.name == "rabbit") res.send('깡총')
// })

app.get('/sound/:name', function (req, res) {
    const { name } = req.params
    console.log(name);

    if(name == "cat") res.json({'sound' : '야옹'})
    else if(name == "dog") res.json({'sound' : '멍멍'})
    else if(name == "rabbit") res.json({'sound' : '깡총'})
    else res.json({'sound' : '알 수 없음 '})
})

app.listen(port, () => { 
    console.log(`Example app listening on port ${port}`)
})