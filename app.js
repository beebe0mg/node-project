const express = require('express')
const ejs = require('ejs')
const mysql = require('mysql2/promise');
const app = express()
const port = 3000
var bodyParser = require('body-parser')

app.set('view engine', 'ejs')
app.set('views', './views')

app.use(bodyParser.urlencoded({ extended: false }))

const connection = async () => {
    try {
      // MySQL 연결 설정 및 비동기 연결 생성
      connection = await mysql.createConnection({
        host: 'localhost3306',   // MySQL 서버의 주소
        user: 'root',        // MySQL 사용자명
        password: '0000', // MySQL 비밀번호
        database: 'unidago'    // 사용할 데이터베이스 이름
      });
  
      console.log('MySQL에 성공적으로 연결되었습니다.');
    } catch (err) {
      console.error('MySQL 연결 실패:', err.stack);
    }
  };

  // 연결 종료 함수
const closeConnection = async () => {
    if (connection) {
      try {
        await connection.end();
        console.log('MySQL 연결이 성공적으로 종료되었습니다.');
      } catch (err) {
        console.error('연결 종료 중 오류가 발생했습니다:', err.stack);
      }
    }
  };

(async () => {
	// 연결 시도
  await connectToDatabase();
  // 연결 종료
  await closeConnection();
})();

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