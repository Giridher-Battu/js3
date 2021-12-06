let cars = "polo, audi , lbw";
console.log(cars.slice(6,10));

let me = "am innocent among few";
console.log(me.replace("few", "all"));//used to replace the wlwments of a string

a=cars.split(",")//used to split the string
console.log(a[2])

console.log(me.match(/am/gi))//give the matching elemwnts

console.log(me.includes("innocent"));//check if the string contains the word or not