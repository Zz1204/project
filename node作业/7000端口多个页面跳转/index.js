var http=require('http');
var fs=require('fs');

http.createServer(function(req,res){
    if(req.url=='/'){
        fs.readFile('mp3.html','utf-8',function (err,data) {
            if (err){
                console.log(err);
            }else{
                res.end(data);
            }
        })
    }else if(req.url=='/mp3.html'){
        fs.readFile('mp3.html','utf-8',function (err,data) {
            if (err){
                console.log(err);
            }else{
                res.end(data);
            }
        })
    }else if(req.url=='/mp4.html'){
        fs.readFile('mp4.html','utf-8',function (err,data) {
            if (err){
                console.log(err);
            }else{
                res.end(data);
            }
        })
    }else if(req.url=='/1.jpg'){
        fs.readFile('1.jpg',function (err,data) {
            if (err){
                console.log(err);
            }else{
                res.writeHead(200,{'content-type':'image/jpeg'});
                res.end(data);
            }
        })
    } else if(req.url=='/2.jpg'){
        fs.readFile('2.jpg',function (err,data) {
            if (err){
                console.log(err);
            }else{
                res.writeHead(200,{'content-type':'image/jpeg'});
                res.end(data);
            }
        })
    }

}).listen(7000)