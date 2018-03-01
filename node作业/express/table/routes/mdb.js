// 1.加载mongodb
var mongo=require("mongodb");
// 2.加载客户端
var MongoClient=mongo.MongoClient;
// 3.链接到的地址
// 格式  类似于百度
//     服务：//ip地址 ：端口号 默认（271017）/数据库（自动创建）
// 4.链接db
// 5.链接集合
var urls="mongodb://localhost:27017/web";
// 第一个参数：method执行所有的方法（增删改查） insert
// 第二个参数：链接的集合名称 collection
// 第三个参数：操作的数据selector
// 第四个参数：操作之后的回调callback (result)
module.exports=function(method,collection,selector,callback){
    MongoClient.connect(urls,function(err,db){
        if(err){
            console.log(err);
            console.log("链接失败");
        }else{
            console.log(db);
            console.log("链接成功");
            var collections = db.collection(collection);
            // 6.操作方法 find insert update deletes
            methodTyle[method](db,collections,selector,callback)

        }
    })
}
// 查询
// 第一个参数：db 当前的数据库==》释放链接
// 第二个参数：collection对集合的链接==》操作的数据
// 第三个参数：selector 操作的数据==》查询条件
// 第四个参数：callbcak 回调==》（result)==》查询后的回调

var find=function(db,collections,selector,callback){
    collections.find(selector).toArray(function(err,result){
        if (err){
            console.log("查询失败");
            consoel.log(err)
        }else{
            console.log("查询成功");
            callback(result);
        }
        db.close();
    })
};
// 添加/插入
// 第一个参数：db 当前的数据库==》释放链接
// 第二个参数：collection对集合的链接==》操作的数据
// 第三个参数：selector 操作的数据==》查询条件
// 第四个参数：callbcak 回调==》（result)==》查询后的回调
var insert=function(db,collections,selector,callback){
    collections.insert(selector,function(err,result){
        if(err){
            console.log("添加失败");
            console.log(err)
        }else{
            //console.log("添加成功");
            callback(result);
        }
        db.close();
    })
};
// 修改
// 第一个参数：db 当前的数据库==》释放链接
// 第二个参数：collection对集合的链接==》操作的数据
// 第三个参数：selector 操作的数据==》修改的条件 修改的数据
// 数组 来保存[{条件}，{内容}]
// 第四个参数：callbcak 回调==》（result)==》查询后的回调
var update=function(db,collection,selector,callback){
    collection.updateOne(selector[0],selector[1],function(err,result){
        if (err){
            console.log("修改失败");
            console.log(err);
        }else{
            callback(result);
        }
        db.close();
    })
};
// 删除
// 第一个参数：db 当前的数据库==》释放链接
// 第二个参数：collection对集合的链接==》操作的数据
// 第三个参数：selector 操作的数据==》删除的数据
// 第四个参数：callbcak 回调==》（result)==》删除后的回调
var deletes=function(db,collections,selector,callback){
    collections.deleteOne(selector,function(err,result){
        if(err){
            console.log("删除失败");
            console.log(err)
        }else{
            console.log("删除成功");
            callback(result);
        }
        db.close();
    })
};
var methodTyle={
    insert:insert,
    find:find,
    update:update,
    delete:deletes
}

