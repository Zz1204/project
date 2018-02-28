/**
 * Created by zz on 2018/2/28.
 */
//引入express
var express=require('express');
//引入fs
var fs=require('fs');
//引入处理逻辑的模块
var router=require('./router');
//初始入口函数
var app=express();
//引入body-parser
var bodyParser=require('body-parser');
//设置数据的处理格式
app.use(bodyParser.json());
//设置编码格式
app.use(bodyParser.urlencoded({extended:true}));
//监听端口
app.listen(3000,function(){
    console.log('服务器启动成功');
});
//使用逻辑文件
app.use(router);
//静态资源托管
app.use(express.static('public'));