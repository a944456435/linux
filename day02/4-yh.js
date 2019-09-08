var a = "hello";
var b =11;
var c = null;
var result =a && b;
console.log(result);  //11
var result2 = a || b;
console.log(result2);   //hello
var result =c||a;
console.log(result);   //hello

result=!!b;
console.log(result);    //true

var  g=null;
var f= "";
var h=0;
var i=NaN;

var r1 = g && b;    //null
var r2 = g || b;    //11
var r3 = f && a;    //
var r4 = f || a;     //hello
var r5 = h && b;     //0
var r6 = i && b;      //NaN

var r7 = b && f;     //
var  r8 = b || f;    //11

console.log(r1);
console.log(r2);
console.log(r3);
console.log(r4);
console.log(r5);
console.log(r6);
console.log(r7);
console.log(r8);
