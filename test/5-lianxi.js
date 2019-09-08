var arr1 = [1,2,3,4,5,6,7];
var arr2 =new Array();

//把arr1赋值给arr2
for(var i=0;i<arr1.length;i++){
    arr2[i]=arr1[i];
}
console.log("arr2:",arr2);   //[1,2,3,4]
console.log("this",this);
//console.log("arguments",arguments);      //包含5个属性的类数组对象
arr1[arguments.length-1]=9;    //arguments的为一个长度为5的对象
//console.log("arguments.length:",arguments.length);
//arr1[arguments.length]=5;
//arr1[arguments.length-1]=5;
console.log("arr1",arr1);   //[1,2,3,4,9,6,7]

var arr3=arr1;//引用传递
console.log("arr3:",arr3);  //[1,2,3,4,9,6,7]
arr3[0]=0;
console.log("arr2:",arr2);
console.log("arr2.toString:",arr2.toString());
console.log("arr2.sort(compare):",arr2.sort(function(a,b){
    if(a>b){
        return -1;
    }
    else{
        return 1;
    }
}));

