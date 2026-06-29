var obj1 ={
    firstname:'fuck',
    lastname:'you',
    age: 22,
    getintro:function () {
        console.log(this);
    }
}
var obj2 ={
    firstname:'rahul',
    lastname:'sharma',
    age: 2,
    getintro:function () {
        console.log(this);
    }
}
obj1.getintro()
obj2.getintro()

// FUNCTION  sharing using (1) call , (2) apply (3) bind


var student1 ={
    firstname:'rohit',
    lastname:'sharma',
    age: 2,
    getintro:function () {
        console.log(this.firstname+" "+this.lastname);
    }
}

var student2 ={
    firstname:'ritik',
    lastname:'rajput',
    age: 2,
    getintro:function () {
        console.log(this.firstname);
    }
}

student2.getintro()
student1.getintro.call(student2)

