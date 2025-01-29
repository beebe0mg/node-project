const express = require('express')
const ejs = require('ejs')
var mysql = require('mysql');
const app = express()
const port = 3000
var bodyParser = require('body-parser')

app.set('view engine', 'ejs')
app.set('views', './views')

var connection = mysql.createConnection({
    host    : 'localhost3306',
    user    : 'root',
    password: '0000',
    database: 'unidago'
})

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function(error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
})

connection.end();

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