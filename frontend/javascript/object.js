var user = {
    name: "rahul",
    age:20,
    marks:89,
    batch:'fuck'
}
console.log(user);
console.log(user.batch);
user.city = 'bhopal' //add value to user
console.log(user.city);
user.marks= 90 // ubdate value in user
console.log(user);

delete user.age // delete age from user
console.log(user);

console.log(Object.keys(user));
console.log(Object.entries(user));
var school = {
    sname:'kv',
    loc: 'danapur',
    cource:["science",'commerce','art'],
    teacher:{
        age: 30,
        name:'ravi',
        sub:'math'
    },
    sayhi:function(){
        console.log('welcome to the school');
        
    }
}
Object.seal(school) // it will allow to ubdate the value but you cant creat and delete keys
Object.freeze(school) // it will nat allow to ubdate the value and you cant creat and delete keys


school.sayhi()

var math={
    add:(a,b)=>{
        return a+b

    },
    sq:(a)=>{
        return a*a

    },
    mult:(a,b)=>{
        return a*b

    }
}
console.log(math.add(10,22));

//**destructuring**

var detail = {
    name:'aman',
    age:20,
    batch:'cohart'
}
var {name,...b} = detail
console.log(b);
console.log(name);

// copying using spread operator

var obj ={
    name:'rahul',
    age:20,
    marks:39,
}
 
var obj2 = {...obj}

obj2.name= "additya"
console.log(obj);
console.log(obj2);

// **deep copying using JSON**

var original = {
    name:'harsh',
    marks : 49,
    age:20,
    collage:{
        name:"LNCT",
        student:20000
    },
    skill:['java','html','css']

}
var str = JSON.stringify(original)  //convert object to string
 
var copy = JSON.parse(str) //convert  string to object 

console.log(copy);











    

