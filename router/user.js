const express = require("express");
const router = express.Router();
// 导入handler
const user_handler = require('../router_handler/user');
//注册
router.post('/reguser', user_handler.reguser);
// 登录
router.post('/login', user_handler.login);
module.exports = router;