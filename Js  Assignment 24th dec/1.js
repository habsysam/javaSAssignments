//2
//findIndex method-1
const arr =[20,34,5,19,25]
const result=arr.findIndex(x=>x>34);
console.log(result);

//findIndex method-2
const list=['nimbu soda','jeera masala','pineapple juice','chikku']
const juiceDrinks=list.findIndex(x=>x>2);
console.log(juiceDrinks);

//find() method-1

// const numbers=[80,90,100,200,300]
// const largeNumber=numbers.find(a=>a>100)
// console.log(largeNumber);

// const nos=[-1,50,30,-25,60,85]
// const larNumber=nos.find(a=>a>-20)
// console.log(larNumber);

//flat() method-1
const series=[1,2,3,4,5,[[6,7,8,9]]];
console.log(series.flat(1));

//sort() method-1
const movies=['Agneepath','Kgf','Chowka','Bhajarangi','Jannat'];
const movie=movies.sort()
console.log(movie);

//reverse method
const sequence=["part1","part2","part3",'part4'];  
const sequences=sequence.reverse();
console.log(sequence);

 //toString()
 const stringandnumbers=[1,2,'live','love',5,'laugh']
 console.log(stringandnumbers.toString());
 
 //hasOwnProperty
 const object1 = {};
object1.property1 = 'suraj';

console.log(object1.hasOwnProperty('property1'));


console.log(object1.hasOwnProperty('toString'));

console.log(object1.hasOwnProperty('hasOwnProperty'));

console.log('================================================================================');

//splice and slice
//splice(start, index,element)
const numbers=[10,20,30,40,50]
const deletedElemen=numbers.splice(2,3,60,70,80);
console.log('deletedElement',deletedElemen) //30,40
console.log('numbers',numbers) //10,20,60,70,80,50
console.log('================================================');
//if we want to only add element without deleting
//pass delete count as 0(second parameter)
const deletedElement1=numbers.splice(1,0,100,110)
console.log('deletedElement',deletedElement1);
console.log('numbers',numbers);


console.log('===================================================');

// SLICE METHOD
const nums =[10,20,30,40,50]
const deletedNums=nums.slice(1,3)
console.log('deletedNums',deletedNums);   //20,30
console.log('nums',nums); //10,20,30,40,50
console.log('=======================================================================');
//shallowcopy
var employee = {
    eid: "E102",
    ename: "Jack",
    eaddress: "New York",
    salary: 50000
}

console.log("Employee=> ", employee);
var newEmployee = employee;    // Shallow copy
console.log("New Employee=> ", newEmployee);
  
console.log("---------After modification----------");
newEmployee.ename = "Beck";
console.log("Employee=> ", employee);
console.log("New Employee=> ", newEmployee);
// Name of the employee as well as 
// newEmployee is changed.
console.log('====================================================================================');
//DeepCopy
var employee = {
    eid: "E102",
    ename: "Jack",
    eaddress: "New York",
    salary: 50000
}
console.log("=========Deep Copy========");
var newEmployee = JSON.parse(JSON.stringify(employee));
console.log("Employee=> ", employee);
console.log("New Employee=> ", newEmployee);
console.log("---------After modification---------");
newEmployee.ename = "Beck";
newEmployee.salary = 70000;
console.log("Employee=> ", employee);
console.log("New Employee=> ", newEmployee);