function factory(name,age){
    var obj = new Object();//忘记使用这句，封装创建对象过程
    obj.name=name;      //使用this，严重混乱
    obj.age=age;
    obj.sayName =function(){
        console.log("hi,my name is",this.name);
    };
    return obj;          //忘记使用返回值  //对返回值产生误解，以为会直接打印输出
}
var p1=factory('terry',20);
console.log(p1);
var d1=factory('dog1',2);
console.log(d1);
p1.sayName();
d1.sayName();
