var str="这是一个网址：http://101.132.112.10,然后其他的网址：https://www.baidu.com";
var pattern =/(\w{3,5}):\/\/(\w{1,3}.\w*.\w*.\w*)/ig;
//var result=pattern.exec(str);
var result;
while((result=pattern.exec(str))!=null){
    console.log("网址:",result[0],"协议",result[1],"域名或ip",result[2]);
}
//console.log(result);
console.log("global:",pattern.global);
console.log("ignoreCase",pattern.ignoreCase);
console.log("mulitiline",pattern.multiline);

var str2 ="abc123456789";
var pattern2 = /\d{2,}/ig;
console.log("贪婪匹配：",pattern2.exec(str2));

var pattern3 =/\d{2,}?/ig;
console.log("非贪婪（佛系）匹配：",pattern3.exec(str2));
console.log("非贪婪（佛系）匹配2：",pattern3.exec(str2));
