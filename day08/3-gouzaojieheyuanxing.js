function Dog(name,age){
    this.name=name;
    this.age=age;
}

Dog.prototype.sayName=function(){
    console.log("my name is ",this.name);
}
var d1= new Dog("一休",2);
var d2= new Dog("八哥",2);

console.log(d1,d2);
d2.sayName();

smallDog.prototype=new Dog();   //实现继承
smallDog.prototype.constructor=smallDog;   //zh原型指向回来构造函数，使其分类不变
function smallDog(name,age,color){
    /*this.name=name;
    this.age=age;*/
    Dog.call(this,name,age);//该代码等价于上面两句，借用构造函数
    this.color=color;
}
var sd1=new smallDog("爱因斯坦",3,"withe");
console.log(sd1);
sd1.sayName(); //想调用父类的方法，所以要在构造函数前继承 。14行后
