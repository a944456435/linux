add(1,2);

function add(a,b){
    console.log(a+b);

}

var a=function(a,b){
    console.log( a+b);

}
 a(1,2,3,4);
var b=add;
console.log("b",b);


function add_all(){
    console.log(arguments);
    var result=0;
    for(var key in arguments){
        var values=arguments[key];
       result+=values;
       //  console.log(key);
     //   console.log(result);
    }
    console.log(result);
}
add_all(1,2,3,4,5,6,7,8,9);
