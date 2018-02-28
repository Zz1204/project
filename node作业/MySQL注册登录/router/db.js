/**
 * Created by zz on 2018/2/28.
 */
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
//查询
module.exports.select=function(data,callback){
    pool.getConnection(function(err,connection){
        if(err){
            console.log('连接失败');
            console.log(err);
        }else{
            var sql='select * from user where username=? and password=?';
            connection.query(sql,data,function(err,result){
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
//添加
module.exports.insert=function(data,callback){
    pool.getConnection(function(err,connection){
        if(err){
            console.log('连接失败');
            console.log(err);
        }else{
            var sql='insert into user (username,password,name) values (?,?,?)';
            connection.query(sql,data,function(err,result){
                if(err){
                    console.log('添加失败');
                    console.log(err);
                }else{
                    console.log('添加成功');
                    callback(result);
                }
            });
        }
        //释放连接
        connection.release();
    })
}
// 修改
module.exports.update=function(data,callback){
    pool.getConnection(function(err,connection){
        if(err){
            console.log('连接失败');
            console.log(err);
        }else{
            var sql='update user set username=? where password=?';
            connection.query(sql,data,function(err,result){
                if(err){
                    console.log('修改失败');
                    console.log(err);
                }else{
                    console.log('修改成功');
                    callback(result);
                }
            });
        }
        //释放连接
        connection.release();
    })
}
//删除
module.exports.delete=function(data,callback){
    pool.getConnection(function(err,connection){
        if(err){
            console.log('连接失败');
            console.log(err);
        }else{
            var sql='delete from user where username=?';
            connection.query(sql,data,function(err,result){
                if(err){
                    console.log('删除失败');
                    console.log(err);
                }else{
                    console.log('删除成功');
                    callback(result);
                }
            });
        }
        //释放连接
        connection.release();
    })
}