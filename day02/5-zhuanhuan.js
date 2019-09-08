var a=1231;
var b="456789";
var c = true;
var d = false;


var e= null;
var f;
var g="";
var h = 0;
var j =NaN;

var k ="12.5asd";
var l = "asd12.5";

console.log(a);   //1231
console.log(!!a);   //true
console.log(Boolean(a));   //true
console.log(a+"");         //1231
console.log(a+""+b);       //1231456789
console.log(a.toString());   //1231


//console.log(e.toString());    //null和undefined不能使用toString（）方法
console.log(e+"");          //转换成字符串
console.log(String(e));      //转换成字符串
console.log(String(f));      //转换成字符串
console.log(String(g));      //转换成字符串
console.log(String(h));      //转换成字符串
console.log(String(j));      //转换成字符串


console.log(+e);             //转换成number
console.log(-(-null));
console.log(+f);
console.log(Number(g));
console.log(+h);
console.log(+j);

console.log(parseInt(k));
console.log(parseInt(l));


