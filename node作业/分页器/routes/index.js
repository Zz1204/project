var express = require('express');
var router = express.Router();
var db=require('./mdb');

//查询
router.post('/',function(req,res){
    db('find','shop',{},function(result){
        res.send(result)
    })
})
router.post('/shopping',function(req,res){
    db('find','shop',{id:{$lte:4}},function(result){
        res.send(result)
    })
})
router.post('/b1',function (req,res) {
    var i=parseInt(req.body.bt)
        db('find','shop',{id:{$gte:i*4-3,$lte:i*4}},function(result){
        res.send(result)
    })
})
module.exports = router;
