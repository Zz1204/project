/**
 * Created by zz on 2018/2/28.
 */
//引入express框架
var experss=require('express');
//引入fs模块
var fs=require('fs');
//引入处理逻辑的文件
var router=require('./router');
//初始入口函数
var app=experss();
//监听端口
app.listen(3000,function () {
    console.log('服务器启动成功');
});
//使用逻辑文件
app.use(router);
//静态资源托管
app.use(experss.static('public'));
