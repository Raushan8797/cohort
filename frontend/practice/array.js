console.log('----------------QUESTION 1-----------');
let prices = [100,250,500,150,700]
let prim = prices.filter((price)=>price>300)
console.log(prim);

// question 2
console.log('----------------QUESTION 2-----------');

let marks = [80,90,70,85,95]
let sum = 0
for(let i = 0; i < marks.length ; i++){
    sum = sum + marks[i]
}
console.log('total value = ',sum);

let average = sum/marks.length
console.log(average);
console.log(marks.length)

// question 2 using reduce 

let total = marks.reduce((acc, currentValue) => {
    return acc + currentValue;
}, 0);

const avg = total / marks.length;

console.log(avg);

// question 3

console.log('----------------QUESTION 3-----------');

let number = [1,2,3,2,4,2,5,1,1,1]
let count ={}
for(let i =0; i<number.length;i++){

}