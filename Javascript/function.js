// Practice Question-1
// i
let age=23;
age+2;
console.log(age);

// ii
let telugu=80;
let hindi=90;
let maths=100;
let avg=(telugu+hindi+maths)/3;
console.log("average:",avg)


// Practice Question-2
// i
let num=5;
let newNum=num++;
newNum=++num;
console.log(num);
console.log(newNum);



// Practice Question
let light="Green";

if(light=="Red") {
    console.log("Stop");
}
if(light=="Yellow") {
    console.log("Slow Down");
}
if(light=="Green"){
    console.log("GO!")
}
else{
    console.log("Invalid value");
}


// Practice Question
let size="S";
if (size=="XL") {
    console.log("Price:Rs.250");
}
else if (size=="L"){
    console.log("Price:Rs.200");
}
else if(size=="M"){
    console.log("Price:Rs.100");
}
else if(size=="S"){
    console.log("Price:Rs.50");
}
else {
    console.log("Invalid Size");
}




// Arrow Function

function addition(x,y){
    return x+y;
}
let Addition=(x,y)=>{
    return x+y;
}
let a=10;
let b=20;
console.log(`additon:${addition(a,b)}`)
console.log(`additon:${Addition(a,b)}`)



//Arrays
let myArray=[1,2,3,4,5];
console.log(myArray);
myArray.push(6);
console.log(myArray);
myArray.pop()
console.log(myArray);
myArray.unshift(0)
console.log(myArray);
myArray.shift()
console.log(myArray);

//Recursive function
var number=1;
function print(){
    console.log(number);
    number++;

    if (number<=10){
        print();
    }
    else{
        return;
    }
}
print();


// Destructuring    
function Destructuring(){
    return [1,2];
}
const [x,y,z]=Destructuring()
console.log(x,y,z);           


//using map
let arr=[1,2,3,4,5];
console.log(arr);
const newArr=arr.map((e)=>(e+2));
console.log(newArr);


// using filter
let array=[10,20,30,40,50];
const narray=array.filter((e)=>e>20);
console.log(array);
console.log(narray);