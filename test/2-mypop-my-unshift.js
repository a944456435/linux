Array.prototype.mypop = function(){
    var len = this.length;

    //var i;
    //for(i=0;i<len;i++){
    //if(i==(len-1))
    //{
      //  var result=this[i];
        //console.log(result);
    //}
    //}
    //b改变原值
    //var result=this[this.length-1];
    //this.length--;
    //return result;

    if(true){                     //当我使用while时无限输出
        var result = this[len-1];
        console.log(result);
    }
}

Array.prototype.myshift =function(){
    if(true){
        var result = this[0];
        console.log(result);
    }
}
Array.prototype.myunshift=function(){
  //  var len = this.length;
    var arr=[];
    //var leng = arguments.length;
    //for(var key in arguments){
      //  this[+(key)-leng]=arguments[key];     //在这里加var时，意外标记this
   //}
   //console.log("myunshift():",this);
    //console.log("返回插队后数组的新长度：",len+leng);
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
var arr=["a","b",4,5,8];
var result=arr.mypop();
var result=arr.myshift();
var result=arr.myunshift(9,10);
console.log(result);
