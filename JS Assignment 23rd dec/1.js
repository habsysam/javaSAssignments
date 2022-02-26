//Push Method
const hobbies=["Sleeping","coding","trekking","Bird watcing",]
const hobbiesLength=hobbies.push('Reading')
console.log('Hobbies after push',hobbies); //[""]

console.log('HobbiesLength', hobbies);

console.log('hobbies',hobbies.push('cooking'));

console.log(hobbies);
//2.
const cars=["verna","i20","santro","creta",]
const carsLength=cars.push('GI10')
console.log('cars after push',cars); //[""]

console.log('carsLength', cars);

console.log('cars',cars.push('gi10'));

console.log(cars);

//3.
const bikes=["passionpro","splendorplus","hfdeluxe","xpulse",]
// const bikesLength=bikes.push('splendor')
// console.log('bikes after push',bikes); //[""]

// console.log('bikesLength', cars);

console.log('bikes',bikes.push('karishma'));

console.log(bikes);
console.log('==================================');
//PopMethod

const hobbiess=["Sleeping","coding","trekking","Bird watcing",]
const deletedElement=hobbiess.pop()
console.log('hobbies after pop',hobbiess);
// console.log('deletedElement',deletedElement);

//example2
const car=["verna","i20","santro","creta",]
const carss=car.pop()
console.log(car);

//example3
const bikeBrand=['hero','honda',"tvs",'bajaj']
const brand=bikeBrand.pop()
console.log(bikeBrand);
console.log('=====================================================');

// Add elemnt at start of the array
const lenOfhobbies=hobbies.unshift('Gaming')
console.log('hobbies after the unshift',hobbies);

console.log('hobbies lenght after unshift',lenOfhobbies);

console.log('==================shift=================');

// Remove the element at start of the array
const deleteHobby=hobbies.shift()
console.log('hobbies after the shift',hobbies);  //Removed hobby the 'gaming"
console.log('hobbies length after the shift',deleteHobby);

console.log('========================================================');

