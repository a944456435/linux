var person={
    name:"terry",
    age:12,
    gender:"male",
        sayhello:function(){
            console.log("my name is ",this.name);
        }
};
console.log(person.name);
console.log(person["name"]);
var name = "age";
console.log(person[name]);   //person[age]
