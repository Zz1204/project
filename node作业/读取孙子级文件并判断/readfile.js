var fs=require('fs');
fs.readdir('fu',function (err,files) {
    if (err){
        console.log(err);
    }else {
        files.forEach(function (item,index) {
            var path='./fu/'+item;
            fs.stat(path,function(err,stats){
                if (err){
                    console.log(err);
                }else{
                    if(stats.isFile()){
                        console.log(path+"是个文件");
                    }else if(stats.isDirectory()){
                        console.log(path+"是个文件夹");
                        fs.readdir(path,function(err,files){
                            if (err){
                                console.log(err);
                            }else{
                                files.forEach(function (item1,index1) {
                                    var path1=path+'/'+item1;
                                    fs.stat(path1,function(err,stats){
                                        if (err){
                                            console.log(err);
                                        }else{
                                            if(stats.isFile()){
                                                console.log(path1+"是个文件");
                                            }else if(stats.isDirectory()) {
                                                console.log(path1+ "是个文件夹");
                                            }
                                        }
                                    })
                                })
                            }
                        })
                    }
                }
            })
        })
    }
})