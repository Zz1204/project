/**
 * Created by zz on 2018/2/27.
 */
//引入express框架
var express=require('express');
//引入fs模块
var fs=require('fs');
//引入router文件(处理具体逻辑)
var router=require('./router');
//初始一个入口函数
var app=express();
//监听一个端口号
app.listen(3000,function(){
   console.log('服务器已启动');
});
//使用路由文件
app.use(router);
//静态资源托管
app.use(express.static('public'));