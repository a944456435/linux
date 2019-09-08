
var arr =[
    {
        id:1,
        name:"terry",
        gender:"male"
    },
    {
        id:2,
        name:"larry",
        gender:"famale"
    },
    {
        id:3,
        name:"tom",
        gender:"male"
    }

];

arr.forEach(function(item,index,arr){
    console.log(item,index);
});

var result=arr.every(function(item,index,arr){
    return item.id>2;
});
console.log("every，全部满足条件才h返回true",result);
var result=arr.some(function(item,index,arr){
    return item.id>2;
});
console.log("some，只要有满足条件的就返回true",result);

var result=arr.filter(function(item,index,arr){
    return item.id>2;
});
console.log("filter,满足条件的新组成一个数组",result);
var result=arr.map(function(item,index,arr){
    return item.id*2;
});
console.log("map,满足条件的任何数据类型",result);
