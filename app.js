const express = require('express')
const ejs = require('ejs')
const mysql = require('mysql2/promise');
const app = express()
const port = 3000
var bodyParser = require('body-parser')

app.set('view engine', 'ejs')
app.set('views', './views')

app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.render('example')
})

app.get('/profile', (req, res) => {
    res.render('profile')
})

app.get('/map', (req, res) => {
    res.render('map')
})

app.get('/contact', (req, res) => {
    res.render('contact')
})

app.post('/contactProc', (req, res) => {
    const name = req.body.name;
    const phone = req.body.phone;
    const email = req.body.email;
    const memo = req.body.memo;

    var a = ` ${name} ${phone} ${email} ${memo}`
    res.send(a);
})

app.listen(port, () => {
    console.log(`서버가 실행되었습니다. 접속 주소 : http://localhost:${port}`);
})