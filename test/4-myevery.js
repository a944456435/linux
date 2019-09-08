Array.prototype.myevery=function(handler){
    //var flag=true;
    for(var i=0;i<this.length;i++){
    var flag=true;
       //var result= handler();
        var item = this[i];
        var result = handler(item,i,this);
    if(result){
        continue;
    }
    else{
       flag=false;
        break;
    }
    }
    return flag;
}

var arr=[1,2,3,4,5];
var result = arr.myevery(function(item,index,arr){
    return item>2;
});
console.log(result);
