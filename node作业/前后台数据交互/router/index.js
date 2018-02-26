var express=require('express');
var fs=require('fs');
var router=express.Router();
router.get('/index',function(req,res){
    var json=JSON.stringify(req.query);
    fs.writeFile('reg.json',json,function(err){
        if(err){
            res.send('注册失败');
        }else{
            res.send('注册成功');
        }
    })
});
router.get('/ajax',function (req,res) {
    fs.readFile('reg.json','utf-8',function(err,data){
        if(err){
            console.log(err);
        }else{
            var json=JSON.parse(data);
            res.send(json);
        }
    })
});
module.exports=router;