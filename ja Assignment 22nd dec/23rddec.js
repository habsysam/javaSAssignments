//1.
var student = {
    name: 'habsy',
    batch:'JECM69',
    Branch: 'Rajajinagar',
    age: 26,
    Gender:'male'
}

// using for in loop
for ( let key in student ) {

    // display the properties
    console.log(`${key} => ${student[key]}`);
}


//for in loop using object-2
console.log('-------------------------');
var medicine={

    name :'Dolo 650',
    manufacturer:'micro labs',
    price: 30,
    expiryDate: 2022
}
for(let key in medicine){

    console.log(`${key}- ${medicine[key]}`);
}
console.log('======================');
//for in loop using array-1
console.log('array items');
var number=[10,20,60,40]
for(var index in number){

console.log(`${index}-${number[index]}`);
}
console.log('=======================');
//for in loop using array-2
var list =['movies','documentaries','webseries','reality shows']
for (var index in list){
    console.log(`${list[index]}`);
}

// 1. prime number

// normal function
function inPre(a) {
    for (let i = 0; i < a.length; i++) {
        let count = 0;
        let num = a[i];
        for (let j = 1; j <= num; j++) {
            if (num % j === 0) {
                count++;
            }
        }
        if (count === 2) {
            console.log(num);
        }
    }
}
let d = [1, 4, 6, 12, 15, 14, 17, 18, 20]
inPre(d)

// anynomous function
let arrPri = function (a) {
    for (let i = 0; i < a.length; i++) {
        let count = 0;
        let num = a[i];
        for (let j = 1; j <= num; j++) {
            if (num % j === 0) {
                count++;
            }
        }
        if (count === 2) {
            console.log(num);
        }
    }
}
let e = [1, 4, 6, 12, 15, 14, 17, 18, 20]
arrPri(e)
console.log("-----arrow---------");

// arrow function

let arraPr = (a) => {
    for (let i = 0; i < a.length; i++) {
        let count = 0;
        let num = a[i];
        for (let j = 1; j <= num; j++) {
            if (num % j === 0) {
                count++;
            }
        }
        if (count === 2) {
            console.log(num);
        }
    }
}
let g = [2, 3, 5, 7, 9, 11, 53, 19, 23, 22, 86, 17, 19, 29, 31, 37, 41, 67, 43, 97, 47]
arraPr(g)

console.log("-----self invoked-----");
 // self invoked function
    (function (a) {
        for (let i = 0; i < a.length; i++) {
            let count = 0;
            let num = a[i];
            for (let j = 1; j <= num; j++) {
                if (num % j === 0) {
                    count++;
                }
            }
            if (count === 2) {
                console.log(num);
            }
        }
    })([2, 3, 5, 7, 9, 11, 53, 19, 23, 22, 86, 17, 19, 29, 31, 37, 41, 67, 43, 97, 47])

    console.log("-----end-----");

console.log("---------------------");


// bublle sort

console.log("--------normal sort--------");
function sort(b){
    for (let i = 0; i < b.length; i++) {
        for (let j = 0; j < b.length; j++) {
            if (b[i] < b[j]) {
                var c = b[i];
                b[i] = b[j];
                b[j] = c;
            }
        }
    }
    console.log(b);
}
let x = [2, 3, 8, 0, 5, 10, 11, 6, 87]
sort(x)

console.log("----------anynomous- sec lar------------");

let sorting=function (b){
for (let i = 0; i < b.length; i++) {
    for (let j = 0; j < b.length; j++) {
        if (b[i] < b[j]) {
            var c = b[i];
            b[i] = b[j];
            b[j] = c;
        }
    }
}
console.log(b);
}
let y = [2, 3, 8, 0, 5, 10, 11, 6, 87]
sorting(y)

console.log("----------arrow------------");

let bubble= (b)=>{
for (let i = 0; i < b.length; i++) {
    for (let j = 0; j < b.length; j++) {
        if (b[i] < b[j]) {
            var c = b[i];
            b[i] = b[j];
            b[j] = c;
        }
    }
}
console.log(b);
}
let z=[2, 3, 8, 0, 5, 10, 11, 6, 87]
bubble(z)

console.log("-----invoked-sec-----");

(function(b){
for (let i = 0; i < b.length; i++) {
    for (let j = 0; j < b.length; j++) {
        if (b[i] < b[j]) {
            var c = b[i];
            b[i] = b[j];
            b[j] = c;
        }
    }
}
console.log(b);
})([2, 3, 8, 0, 5, 10, 11, 6, 87])

// second largest number

console.log("--------normal 2 lar--------");
function rev(b){
    for (let i = 0; i < b.length; i++) {
        for (let j = 0; j < b.length; j++) {
            if (b[i] < b[j]) {
                var c = b[i];
                b[i] = b[j];
                b[j] = c;
            }
        }
    }
    console.log(b);
}
let o = [2, 3, 8, 0, 5, 10, 11, 6, 87]
random(o)

console.log("----------anynomous- sec lar------------");

let second=function (b){
for (let i = 0; i < b.length; i++) {
    for (let j = 0; j < b.length; j++) {
        if (b[i] < b[j]) {
            var c = b[i];
            b[i] = b[j];
            b[j] = c;
        }
    }
}
console.log(b[b.length - 2]);
}
let l = [2, 3, 8, 0, 5, 10, 11, 6, 87]
second(l)

console.log("----------arrow------------");

let sec= (b)=>{
for (let i = 0; i < b.length; i++) {
    for (let j = 0; j < b.length; j++) {
        if (b[i] < b[j]) {
            var c = b[i];
            b[i] = b[j];
            b[j] = c;
        }
    }
}
console.log(b[b.length - 2]);
}
let k=[2, 3, 8, 0, 5, 10, 11, 6, 87]
sec(k)

console.log("-----invoked-sec-----");

(function(b){
for (let i = 0; i < b.length; i++) {
    for (let j = 0; j < b.length; j++) {
        if (b[i] < b[j]) {
            var c = b[i];
            b[i] = b[j];
            b[j] = c;
        }
    }
}
console.log(b[b.length - 2]);
})([2, 3, 8, 0, 5, 10, 11, 6, 87])





//reverse string

console.log("--------normal ram--------");
function rev(m){
    let rev = '';
    for (let i = m.length - 1; i >= 0; i--) {
        rev = rev + m[i];
    }
}
random("string")

console.log("----------anynomous- ran------------");

let rever=function (m){
    let rev = '';
    for (let i = m.length - 1; i >= 0; i--) {
        rev = rev + m[i];
    }
}
rever("string")

console.log("----------arrow------------");

let reverse= (m)=>{
    let rev = '';
    for (let i = m.length - 1; i >= 0; i--) {
        rev = rev + m[i];
    }
}
reverse("string")

console.log("-----invoked-ran-----");

(function(m){
    let rev = '';
    for (let i = m.length - 1; i >= 0; i--) {
        rev = rev + m[i];
    }
})("string")

// console.log(rev);
// let arr = [6, 1, 5, 50]
// let x = arr.sort((a, b) => a - b)
// console.log(x);
// console.log(arr.reverse());

// random number
console.log("--------normal ram--------");
function random(a,b){
    for (let i = 1; i < a * b; i++) {
        let c = (Math.floor(Math.random() * a * 10));
        if (c >= a && c <= b) {
            console.log(c, "inner");
            break;
        }
    }    
}
random(500,550)

console.log("----------anynomous- ran------------");

let ran=function (a,b){
    for (let i = 1; i < a * b; i++) {
        let c = (Math.floor(Math.random() * a * 10));
        if (c >= a && c <= b) {
            console.log(c, "inner");
            break;
        }
    }   
}
ran(900,1200)


console.log("----------arrow------------");

let ranOf= (a,b)=>{
    for (let i = 1; i < a * b; i++) {
        let c = (Math.floor(Math.random() * a * 10));
        if (c >= a && c <= b) {
            console.log(c, "inner");
            break;
        }
    }   
}
ranOf(200,250)

console.log("-----invoked-ran-----");

(function(a,b){
    for (let i = 1; i < a * b; i++) {
        let c = (Math.floor(Math.random() * a * 10));
        if (c >= a && c <= b) {
            console.log(c, "inner");
            break;
        }
    }  
})(1,6)


// factorial

console.log("-------normal----------");

function fact(a){
    let sum = 1;
    for (let i = a; i > 1; i--) {
        sum = sum * i;
    }
    console.log(sum);
}
fact(6)

console.log("----------anynomous- fact------------");

let facto=function (a){
    let sum = 1;
    for (let i = a; i > 1; i--) {
        sum = sum * i;
    }
    console.log(sum);
}
facto(8)

console.log("----------arrow------------");

let factorialOf= (a)=>{
    let sum = 1;
    for (let i = a; i > 1; i--) {
        sum = sum * i;
    }
    console.log(sum);
}
factorialOf(200)

console.log("-----invoked-fact-----");

(function(a){
    let sum = 1;
    for (let i = a; i > 1; i--) {
        sum = sum * i;
    }
    console.log(sum);
})(12)



// fabinocii series

console.log("------normal function--------");
function fabinocii(a){
    let num1 = 0;
    let num2 = 1;
    let sum = 0;
    console.log(num1);
    console.log(num2);
    for (let i = 1; i <= a; i++) {
        sum = 0;
        sum = num1 + num2;
        console.log(sum);
        num1 = num2;
        num2 = sum;
    }
}
fabinocii(5)

console.log("----------anynomous-------------");

let fabi=function (a){
    let num1 = 0;
    let num2 = 1;
    let sum = 0;
    console.log(num1);
    console.log(num2);
    for (let i = 1; i <= a; i++) {
        sum = 0;
        sum = num1 + num2;
        console.log(sum);
        num1 = num2;
        num2 = sum;
    }
}
fabi(6)

console.log("----------arrow------------");

let fab= (a)=>{
    let num1 = 0;
    let num2 = 1;
    let sum = 0;
    console.log(num1);
    console.log(num2);
    for (let i = 1; i <= a; i++) {
        sum = 0;
        sum = num1 + num2;
        console.log(sum);
        num1 = num2;
        num2 = sum;
    }
}
fab(6)

console.log("-----invoked------");

(function(a){
    let num1 = 0;
    let num2 = 1;
    let sum = 0;
    console.log(num1);
    console.log(num2);
    for (let i = 1; i <= a; i++) {
        sum = 0;
        sum = num1 + num2;
        console.log(sum);
        num1 = num2;
        num2 = sum;
    }
})(6)


console.log("-----------");


// 2.  prime nos between

// normal function
function inPrimeNo(a, b) {
    
}
inPrimeNo(10, 20)

// anynomous function
let primeIN = function (a, b) {
    
}
primeIN(20, 30)
console.log("-----arrow---------");

// arrow function

let ePrime = (a, b) => {
    let count = 0;
    for (let i = a; i <= b; i++) {
        count = 0;
        for (let j = 1; j <= i; j++) {
            if (i % j === 0) {
                count++;
            }
        }
        if (count === 2) {
            console.log(i);
        }
    }
}
ePrime(30, 40)

console.log("-----self invoked-----");

    // self invoked function
    (function (a, b) {
        let count = 0;
        for (let i = a; i <= b; i++) {
            count = 0;
            for (let j = 1; j <= i; j++) {
                if (i % j === 0) {
                    count++;
                }
            }
            if (count === 2) {
                console.log(i);
            }
        }
    })(20, 30)

    console.log("-----end-----");




console.log("---------------------");

//3. just to say the number is prime or not

console.log("-----normal function-----");
function primeE(a){
    let count = 0;
for (let i = 1; i <= a; i++) {
    if (a % i === 0) {
        count++;
    }
}
if (count === 2) {
    console.log("it is a prime number");
}
else console.log("it is not a prime number");
}
primeE(50)

console.log("-------anynomous function-------");

let primeN = function (a)
{
    let count = 0;
for (let i = 1; i <= a; i++) {
    if (a % i === 0) {
        count++;
    }
}
if (count === 2) {
    console.log("it is a prime number");
}
else console.log("it is not a prime number");
}
primeN(50)

console.log("--------arrow---------");

let primeNumer=(a)=>{
    let count = 0;
    for (let i = 1; i <= a; i++) {
        if (a % i === 0) {
            count++;
        }
    }
    if (count === 2) {
        console.log("it is a prime number");
    }
    else console.log("it is not a prime number");
}
primeNumer(90);

console.log("-----self invoked -----");

(function(a){
    let count = 0;
    for (let i = 1; i <= a; i++) {
        if (a % i === 0) {
            count++;
        }
    }
    if (count === 2) {
        console.log("it is a prime number");
    }
    else console.log("it is not a prime number");
})(23)