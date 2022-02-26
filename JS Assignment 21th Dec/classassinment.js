var mobile={
    brand:"redmi",
    ram:'128gb',
    price:12000,
    gst:900,
    totalPrice= function(){
        return this.price+this.gst
    }

}
console.log(mobile.brand);

var mobile1=new Object()
mobile.brand='samsung'
mobile.ram='128gb'
mobile.price=32000
mobile.gst=4000
mobile.getfullprice=function(){
    return this.price+this.gst
}
console.log(mobile.brand);
