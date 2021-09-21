const express = require('express');  // express 프레임워크 import
const app = express(); // express를 통해 서버 환경 구축
const cors = require('cors');  // cors 라이브러리 import
const bodyParser = require('body-parser');  // body-parser 라이브러리 import
const port = 3001;
const hostName = '192.168.35.136';

//express 서버 환경 설정
app.use(cors());
app.use(express.json());

app.get('/',function(req,res){
        res.send("응답한다아아")
})

//express 서버 열기
app.listen(port, () => {
    console.log('express is running on ${port}')
})
