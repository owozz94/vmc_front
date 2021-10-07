const { createProxyMiddleware } = require("http-proxy-middleware");
//api로  시작되는 호출은 target에 적힌 위치로 호출되도록 설정
module.exports = function(app) {
    app.use(
        "/api",
        createProxyMiddleware({
            target: "http://3.37.123.157:8000", //서버 포트
            changeOrigin: true,
        })
    );
};