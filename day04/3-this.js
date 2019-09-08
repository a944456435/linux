var person1={
    name:"terry",
    age:22,
    gender:"male",
    hello:sayHello
}
var person2={
    name:"larry",
    age:22,
    gender:"famale",
    hello:sayHello
}

function sayHello(){
    console.log("hello,"+this.name);
}
sayHello();
person1.hello();
person2.hello();
person1.hello.call({name:"haha"});
person2.hello.apply({name:"heeee"});

var a=[1,2,[3,4],{name:"terry",age:12}];
console.log("a[3]",a[3]);
var b=a[2];
console.log(b);
b[1]++;
console.log("b++:",b);
console.log("a:",a[2]);

var c =a[3];
console.log("c=a[3]",c)

console.log("person1"+person1); //+拼接
console.log("person1",person1);
console.log(person1);
