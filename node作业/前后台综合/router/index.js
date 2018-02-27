/**
 * Created by zz on 2018/2/27.
 */
//引入express框架
var express=require('express');
//引入fs模块
var fs=require('fs');
//创建一个路由句柄
var router=express.Router();

// 处理 /reg逻辑
router.get('/reg',function(req,res){
    var json=JSON.stringify(req.query);
    fs.writeFile('person.json',json,function (err) {
        if(err){
            console.log('写入失败');
        }else{
            res.send('注册成功');
        }
    })
});

// 处理 /login逻辑
router.get('/login',function(req,res){
    fs.readFile('person.json','utf-8',function(err,data){
        if(err){
            //throw 抛出错误
            throw err;
        }else{
            var json=JSON.parse(data);
            if(req.query.username==json.username&&req.query.pass==json.pass){
                res.send('登陆成功');
            }else{
                res.send('登陆失败');
            }
        }
    })
});

//处理 /ajax逻辑
router.get('/ajax',function(req,res){
    fs.readFile('person.json','utf-8',function (err,data) {
        if(err){
            throw err;
        }else{
            var json=JSON.parse(data);
            res.send(json);
        }
    })
})

//暴露此模块
module.exports=router;