// 1.create 5 objects  without using new keword with one function
// 1.
var array=[
    20,
    "habsy",
    undefined,
    null,
    true,
    {
        
            brand:'TATA',
            name:'Safari',
            color:'silver',
            price:1900000
    
    }
];
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
    
}
console.log('============================================');
var car=[
    {
    brand:'Hyndai',
    name:'Verna',
    color:'Black',
    price:1400000
    },
    {
    brand:'toyota',
    name:'etioscross',
    color:'Orange',
    price:900000
    },
    {
     brand:'Maruti Suzuki',
     name:'Swift',
     color:'Black & white',
     price:1000000
    },
    {
    brand:'Hyndai',
    name:'i20',
    color:'Black & white',
    price:800000
    },
    {
    brand:'TATA',
    name:'Safari',
    color:'silver',
    price:1900000
    }   
]
// console.log(car[0]);
// console.log(car[1]);
// console.log(car[2]);
for (var i = 0; i <car.length; i++)
{
    console.log(car[i]);    
}

//2.create 5 objects using new keyword with one function
var bikes=new Array(
    {
    brand:'hero',
    name:'xpulse',
    color:'silver',
    price:125000
    },
    {
    brand:'honda',
    name:'shine',
    color:'brown',
    price:90000
    },
    {
    brand:'Royal Enfiled',
    name:'classic',
    color:'silver',
    price:190000
    },
    {
    brand:'Bajaj',
    name:'pulsur',
    color:'RED',
    price:null
    },
    {
    brand:'TVS',
    name:Apache,
    color:'silver',
    price:129000
    }
)
console.log(bikes.length);
console.log(bikes[0]);
console.log(bikes[1]);

console.log('========================');

// 4.two examples for each primitive type using typeof operators

console.log(typeof 42);
console.log(typeof 54);

console.log(typeof 'blubber');
console.log(typeof 'habsy');


console.log(typeof true);
console.log(typeof false);


console.log(typeof undeclaredVariable);
console.log(typeof habsy);
console.log("==============================================================");


// 7.display day using date object
//input new date ('sept 12 2020)
//output is sat,sep 12 2020
var dateObj=new Date("sep 12 2020");
var formattedDate=dateObj.toLocaleDateString('en-us',
{
    weekday:"short",
    month:"short",
    year:"numeric",
    day:'numeric'
}
);
console.log(formattedDate);

console.log("===========================================================================");


// 5.Array using primitive and object
var arr1 =['mango', 10, true, null, undefined, {color: 'yellow'}]
for(var i=0; i<arr1.length; i++)
{
    console.log(arr1)        //output display number 1 to 5
}

var arr2 =['students', 150, true, null, undefined, {class: 'javaScript'}]
for(var i=0; i<arr2.length; i++)
{
    console.log(arr2)     //display length 6
}

var arr3 =['sofware', 15000, true, null, undefined, {class: 'webTechnology'}]
for(var i=0; i<arr3.length; i++)
{
        console.log(arr3[5])
    break;
}

// var arr4 =[10, 20 ,30, 40]
// var arr44 = [50, 70, 20, 10]
// for(var i=0; i<arr4.length; i++)
// {
//  for(var j=0; j<i; i++)
//  {
//      if(arr4[i]==arr44[j])
//          console.log(true)
//      else
//      console.log(false)
//  }
// }

var arr5 =['ok', 55.70, true, null, undefined, {class: 'webTechnology'}]
for(var i=0; i<arr5.length; i++)
{
        console.log(arr5[1])
        console.log(arr5[4])
        console.log(arr5[3])
        console.log(arr5[2])

}
console.log('==============================================================');
//Array using new operator
var a1 = new Array(20, 30, 40)
for(var i=0; i<a1.length; i++){
    console.log(i)      // 0 1 2
}

var a2 = new Array('swamy', 'boss', 'Rcb')
{
    for(var i=0; i<a2.length; i++)
    console.log(a2[1])
}

var a3= new Object('pk', 2013, 200.00, true, undefined)
for(var i=0; i<a3.length; i++)
{
    console.log(a3[0])
    console.log(a3[1])
    console.log(a3[2])
}

var a4 = ['swamy', 'jv', 'Najeer', 'suraj', 'ullas']
console.log(a4)
console.log(a4.length)

console.log(a4[0])
console.log(a4[1])
console.log(a4[2])
console.log(a4[3])

for(var i=0; i<=a4.lenght; i++){
    console.log('wel come to all this TE')
}

var a5 = new Object('ok', 'hi', 'bye')
console.log(a5[i])
for(var i=0; i<a5.length; i++)
{
a5='cu'
}
console.log(a5[i])      //undefined

var mobile={
    brand:"redmi",
    ram:'128gb',
    price:12000,
    gst:900,
    totalPrice=function(){
        return this.price+this.gst
    }

}