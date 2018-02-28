/**
 * Created by zz on 2018/2/28.
 */
//引入express
var express=require('express');
//引入fs
var fs=require('fs');
//创建路由句柄
var router=express.Router();
//引入操作数据库的文件
var db=require('./db1');

//注册
router.post('/reg',function(req,res){
    var usernameH=req.body.username;
    var passwordH=req.body.password;
    var nameH=req.body.name;
    var sqlstr=`insert into user (username,password,name) values ("${usernameH}","${passwordH}","${nameH}")`;
    console.log(sqlstr);
    db(sqlstr,function (result) {
        res.send('注册成功');
    })
});

router.post('/user',function (req,res) {
    var usernameH=req.body.username;
    var sqlstr=`select * from user where username="${usernameH}"`;
    console.log(sqlstr)
    db(sqlstr,function (result) {
        if(result.length==0){
            res.send('此账号可用');
        }else{
            res.send('此账号已注册，请使用密码登录');
        }
    })
})


//登录
router.post('/login',function(req,res){
    var usernameH=req.body.username;
    var passwordH=req.body.password;
    var sqlstr=`select * from user where username="${usernameH}" and password="${passwordH}"`;
    db(sqlstr,function(result){
        if(result.length==0){
            res.send('账号或密码错误');
        }else{
            res.send(result[0].name+'登陆成功');
        }


    });
});





//暴露模块
module.exports=router;