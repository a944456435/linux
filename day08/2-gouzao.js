/*Animal.prototype.sayHello=function(){
    console.log("hello,my name is",this.name);
}*/
/*function Animal(name,age){
    var obj=new Object();
    obj.name=name;
    obj.age=age;
    obj.sayHello=function(){console.log(this.name);};
    return obj;
}*/
function foo(){
    console.log("my name is ",this.name);
}
function Animal(name,age){
   // var obj=new Object();
    this.name=name;  //使用this
    this.age=age;
    this.sayHelo=foo;
}
var d1=new Animal("dog",2);
var p1=new Animal("people",12);
console.log(d1);
console.log(p1);
d1.sayHelo();
p1.sayHelo();
//d1.sayHello();
//p1.sayHello();

