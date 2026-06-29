//OPERATION IN ARRAY
var q = [1,2,3,45,6,]
q.push(2) // add element at end
q.pop()  //remove element from end
q.shift() // remove element from start
q.unshift(9) // add element in starting

var a = [1,4,3,2,5,7,5,8.6]
console.log(a[2]);
a.sort() // it only work for single digit
console.log(a);


var arr = [12,34,56,78,98,54,22,3,34,5]
// arr.reverse()()

// arr.sort((a,b)=>a-b) //**it can sort any array
arr.sort((a,b)=>b-a) //it can reverse sort any array

console.log(arr);
 
var arr2 = [55,88,22,99,11]
arr2.push(77)
// [55,88,22,99,11,77]
arr2.unshift(66)
arr2.unshift(33)
// [33,66,55,88,22,99,11,77]

arr2.push(88)
arr2.shift()
// [66,55,88,22,99,11,77,88]

arr2.reverse
arr2.sort((a,b)=>a-b)
//[11,22,55,66,77,88,88,99]

arr2.reverse()
//[99,88,88,77,66,55,22,11]

console.log(arr2[1]); // ans is 88


var arr3 = [10,20,30,40]
for (let a = 0; a < arr3.length; a++) {
    console.log(arr3[a]);  
}
console.log('===================================');

for(value of arr)  // for of loop
    console.log(value);
    
//Non-Mutating Methods (Return New Array)

// **slice** seprate some portion of array

var avg = [1,23,44,55,6,7,78,44]
var b=avg.slice(1,4)
console.log(b);

// **concat** merge 2 array
var agg = [10,20,30,40]
var agg2 = [1,2,3,4]
var c = agg.concat(agg2)
console.log(c);

// **split**
var str = 'fuck you bitch'
var arj = str.split(' ')
console.log(arj);

//**join**
var ark = ['aman', 'raj' , 'singh']
var j = ark.join('-')
console.log(j);


//spread operator (...)

var arrr = [11,22,33,44,55,667,777]
// var arrr2 = [arrr[0],arrr[1],arrr[2],arrr[3],arrr[4]] it can easily done by using spread operator
var arrr2 = [...arrr] // it will copy the data from arrr to arrr2

console.log(arrr2);

// for each loop ex if a array contain 3 element then this loop 3 times 
var D = [1,2,3,4,5]
D.forEach(function () {
    console.log('hello');  // it will print hello 5 time
})

 var s = [1,2,3,45,5]
 s.forEach(function(element){
    console.log(element);
 })


// **MAP**
var AR = [10,20,30,40,50]

var BR = AR.map(function(elem){

 return elem * elem
})
console.log(BR);

var users= ['ravi','shayam','rohit','vishal']

var newuser = users.map(function(elems){
    return elems+ "bsdk"

})
console.log(newuser);

//**FILTER** return the value in new array which satisfy the condition on already existing array



// **REDUCE**

var arr4 = [12,33,44,56,78,5]

arr4.reduce(function(acc,val){
    return acc+val

},0)

// **find** help to find a value in array it return only first value

var Name = ['raja','deepak','aman','virat']
var sol = Name.find(function(elem){
    return elem == "virat"
})

console.log(sol);

var number = [11,10,33,40,35,60]

var anss = number.find(function(a){
    return a%10 == 0
})
console.log(anss);

var anss2 = number.findIndex(function(a){   // findindex give the index
    return a%10 == 0
})
console.log(anss2);

// **some** it is similar to find but it dont give value it give true is value exist otherwise it give false
// **every**it simalar to some but it check all the value even if any one element dont satisfy the the condition then it give false
//and if every one satisfy the condition then it give true 


//**destructuring**

var arrayy = [10,20,23,45,556,66]
// var aa= [0]
// var bb= [1]  traditional way
// var cc= [2]
// var dd= [3]
var [aa,bb,cc,dd,ee] = arrayy  // fast way
// we can also write it using rest operator
var [aa,bb,...cc] = arrayy

console.log(aa);

//*** IF WE USE ... ON LEFT SIDE OF EQAL SIGN (=) IT WILL ACT AS REST OPERATOR****
//*** IF WE USE ... ON RIGHT SIDE OF EQAL SIGN (=) IT WILL ACT AS SPREAD OPERATOR****








