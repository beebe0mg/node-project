const express = require('express')
const ejs = require('ejs')
var mysql = require('mysql');
const app = express()
const port = 3000
var bodyParser = require('body-parser')

app.set('view engine', 'ejs')
app.set('views', './views')

var connection = mysql.createConnection({
    host    : '127.0.0.1',
    user    : 'testusers',
    password: '0000',
    database: 'test',
    port: 3306
});

connection.connect((error) => {
    if (error) {
      console.error('Database connection failed:', error);
      return;
    }
    console.log('Connected to MySQL database');
  });
  
  const query = 'SELECT * FROM user'; // ✅ 테이블 이름 수정
  
  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      return;
    }
    console.log('User:', results); // ✅ 정상적으로 데이터를 출력
  });

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