Array.prototype.mypush=function(){
    //var arr=this;//地址传递，会改变原值
    var arr=[];
    for(var i=0;i<this.length;i++){
        arr[i]=this[i];
    }
    for(var key in arguments){
        arr[this.length+(+key)]=arguments[key];
    }
    return arr;
}
Array.prototype.myunshift=function(){
    var arr=[];
   // for(var i=0;i<this.length;i++){
      //  arr[i]=this[i];
    //}
    //for(var key in arguments){
      //  arr[-(arguments.length)+(+key)]=arguments[key];
    //}
    for(var i=0;i<(this.length+arguments.length);i++){

    if(i<arguments.length){
        for(var j=0;j<arguments.length;j++){
            arr[j]=arguments[j];
        }
    }
    else{
        arr[i]=this[i-arguments.length];
        }
    }
    return arr;
}
var arr=[1,2,3,4,5];
result=arr.mypush("terry","larry");
console.log("调用mypush方法：",result);
console.log("调用方法之后的数组：",arr);
console.log("调用myunshift（）：",arr.myunshift("hello","hi"));
console.log("调用方法之后的数组：",arr);

