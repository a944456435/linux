var student2={
    id:2,
    name:"terry",
    age:12,
    gender:"male",
    grade:80
};
var student1={
    id:1,
    name:"larry",
    age:20,
    gender:"male",
    grade:70
};
var student3={
    id:3,
    name:"jack",
    age:25,
    gender:"famale",
    grade:90
};
var students=[student2,student1,student3];
var result=students.sort(handler("age"));
console.log(result);
function handler(key){
    return function(a,b){
            if(a[key]>b[key]){
                return 1;

            }else {
                return -1;
            }
    }
}
