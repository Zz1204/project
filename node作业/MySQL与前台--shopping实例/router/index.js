/**
 * Created by zz on 2018/2/28.
 */
//引入框架
var express=require('express');
//引入fs模块
var fs=require('fs');
//创建路由句柄
var router=express.Router();
//引入操作的数据库文件
var db=require('./db');


router.get('/shopping',function (req,res) {
    db.select([1],function(result){
        res.send(result);
    })
})




//暴露文件
module.exports=router;