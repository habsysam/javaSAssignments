// 1. array methods
// 1.1 map method
const numbers=[50,100,150,200,250]
const numbersresult=numbers.map((value,index,Array)=>{
    // return value+50 // adding 50
    // return value-50  //-50
    if (index===1){
        return value+100
    }else {
        return value
    }

})
console.log(numbersresult);

// 1.2 filter method
// example 1
const bikes=['karizma','royalEnfiled','apache','pulsur','cd100','zest']  
//   using filter method with arrow function
const results=bikes.filter(bikes=>bikes.length>=6);
console.log(results);
// example 2
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 5);

console.log(result);

//1.3 Join Method()
// example.1
const Array=[100,200,300,400,500]
const newArray=Array.join('-')   // default will ,(coma) when only .join without ()
console.log(newArray);
// example.2
const suv=['creta','seltos','fortuner','MGHector']
const newSUV=suv.join('=')
console.log(newSUV);

//1.4 reduce Method
const array1 = [1, 2, 3, 4];
const reducer = (previousValue, currentValue) => previousValue + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15

// 2.stringMethods
const str='imran'
const resultupper=str.toUpperCase()
console.log(resultupper); //IMRAN

//toLowerCase
let friend='HI FRIENDS'
friends=friend.toLowerCase()
console.log(friends);

//CharAt 
        // 12345678910111213
let greet='good Morning'
console.log(greet.charAt(9)); //check the  writh element postion

console.log('================indexOf================');

console.log(greet.indexOf('o',3));
const res=str.concat('',greet,'all')
console.log(res);

console.log('=================includes============');

const hasING=greet.includes('ing')
console.log('hasing',hasING);

console.log('==================replace==============');

const  value=greet.replace('Morning','Afternoon')
console.log(value);

console.log('==============substr======');

const data='Hello all Welcome to test yantra'
const extractedStr=data.substr(11,10)
console.log(extractedStr);

console.log('======substring===========');
//end is not inclusive
const substrVal=data.substring(1,4)
console.log(substrVal);

console.log('=========trim method=========='); 
const email='                        habsy1997@gmail.com             '
console.log('email',email);
const emailAfterTrim=email.trim()
console.log('emailAterTrim',emailAfterTrim);

const gmail='                   habsy997@gmail.com                '
console.log('start-',gmail.trimStart());  
console.log('end',gmail.trimEnd());  

// 3.wap to Geolocation
    // navigator.geolocation.getCurrentPosition(val=>{
    // console.log(val);
    // console.log('user acppeted shareing ');
    // console.log('latitude',val.coords.latitude);
    // console.log('longitude',val.coords.longitude);
    // },deny=>{
    //     console.log(deny);   
    // })
    //geo location
    //3 methods clearWatch(),gecuurentPostion?(),watchPostion()

    let callback=(postion)=>{
        console.log(postion);
    };
    let errorcode=(error)=>{
        console.log(error);
    };
    navigator.geolocation.getCurrentPosition(callback,errorcode)

// 4.this keyword
const person = {
    firstName: "sam",
    lastName: "h.s",
    getFullName: function ()
    {
        return this.firstName + ' ' + this.lastName
    }
}
// Example.2
var fullName=person.getFullName()
console.log(fullName);

var address={
    company:"Test Yantra",
    city:"Banglore",
    state:"KA",
    fullAddress:function()
    {
        return this.company+' '+this.city+' '+this.state
    }
}
var fetchAddress=address.fullAddress()
console.log(fetchAddress);