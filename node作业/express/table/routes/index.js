var express = require('express');
var router = express.Router();
var db = require('./mdb');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.post('/login',function(req,res){

    db('find','tab',{},function (result) {
        res.send(result);
    })

})


module.exports = router;
