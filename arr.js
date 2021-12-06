let arr =[23, 12, 2, 4, 3, 1]

arr.forEach((element) => {
    console.log(element);
});

arr.map((element) => {
    console.log(element * 2)
});

let c = arr.filter(great);

function great(value,index){
    return value>10;
}
console.log(c);

let s= arr.reduce(good)

function good(total,value){
    return total+value
}
console.log(s)
