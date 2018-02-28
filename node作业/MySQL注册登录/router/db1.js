var mysql=require('mysql');  //  npm i -S mysql
//2.创建连接池  ==》  连接数据库
var pool=mysql.createPool({
    host:'localhost', //mysql在机器的ip地址
    port:3306,
    //查看端口号的  show global variables like 'port';
    user:'root',  //用户名
    password:'123456',  //密码
    database:'web'  //自己的数据库
});

module.exports=function(sqlstr,callback){
    pool.getConnection(function(err,connection){
        if(err){
            console.log('连接失败');
            console.log(err);
        }else{
            connection.query(sqlstr,function(err,result){
                if(err){
                    console.log('查询失败');
                    console.log(err);
                }else{
                    console.log('查询成功');
                    callback(result);
                }
            });
        }
        //释放连接
        connection.release();
    })
}

