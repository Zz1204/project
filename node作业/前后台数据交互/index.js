var express=require('express');
var fs=require('fs');
var router=require('./router');
var app=express();
app.listen(8989,function(){
    console.log('服务器已启动');
});

app.use(express.static('public'));
app.use(router);