const express = require("express");
const app = express();
//配置cors解决跨域问题
const cors = requier('cors');
app.use(cors())
    // 配置pset请求数据解析器
app.use(express.urlencoded({ extended: false }))

// 导入user_router
const user_router = require('./router/user')
app.use("/api", user_router);
app.listen(80, () => {
    console.log('http://localhost:80');
});