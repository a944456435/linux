var add= function(a,b){
    console.log(this);
    return a+b;
}
var result = add.call({a:1},1,3);
console.log(result);

function sayHello(){
    console.log("hello,"+"当前对象this",this);

}
var result=sayHello.call({string:"terry"});
//console.log(result);
