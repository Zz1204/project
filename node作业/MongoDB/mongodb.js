//引入mdb文件
var db=require('./mdb');

//查询
// db('find','ten',{},function(result){
//     console.log(result);
// });


// 添加
// db('insert','ten',{name:"zzx",age:22,sex:"女",bobby:"听歌"},function(result){
//     // console.log(result);
//     if (result.result.n==1){
//         console.log('插入成功')
//     }
// })


//删除
// db('delete','ten',{bobby:'听歌'},function (result) {
//     // console.log(result)
//     if (result.result.n==1){
//         console.log('删除成功');
//     }else{
//         console.log('删除失败');
//     }
// });



//修改
db('update','ten',[{job:'和水泥'},{$set:{name:'王二麻子'}}],function(result){
    console.log(result);
})