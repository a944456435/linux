
var arr1 =[1,2,3];
var arr2=[4,5,6];
var arr3=[7,8,9];

console.log(arr1.concat(arr2,arr3));    //[1,2,....,9]
console.log(arr1.slice(0,1));    //1
console.log("arr1",arr1);   //[1,2,3]
console.log("splice:",arr1.splice(0,1,"x","x","x"));  //1
console.log("splice后的arr1：",arr1);   //["x","x","x",2,3]
