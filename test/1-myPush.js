Array.prototype.myPush=function(){
    var len=this.length;
    for(var key in arguments){
        this[len+(+key)]=arguments[key];
    }
    //return len+arguments.length;
    return this;
}


var a=[1,2,3];
//var arr =new Array();
console.log("原来的数组"+a);
//arr[0]=1;
//arr[1]=2;
//arr[2]=3;
//console.log(arr);
var result=a.myPush(4,5);
console.log("myPush（）后的结果：",result);
