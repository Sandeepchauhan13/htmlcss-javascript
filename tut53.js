console.log("This is tutorial 53");

function greet(name, greetText="Greetings from JavaScript")
// greetText=greetings from javascript default value if greet is not passed in greet
{
    console.log(greetText + "" + name);
    console.log(name + "is a good boy");
}
function sum(a,b,c){
    let d = a + b + c;
    return d;
// after return no line will return unreachable code
// after return no line will return unreachable code
}
let name = "Abhishek";
let name1 = "Shivam";
let name2 = "Saurav";
let name3 = "Sandeep";
let greetText = "Good morning";
greet(name, greetText);
greet(name1, greetText);
greet(name2, greetText);
greet(name3, greetText);

let returnVal = sum(1,2,3);
console.log(returnVal)


// let returnVal = greet(name3);
// console.log(returnVal)
// console.log(name + "is a good boy");
// console.log(name1 +  "is a good boy");
// console.log(name2 +  "is a good boy");
// console.log(name3 +  "is a good boy");

// #returnval method in javascript---
function sum(a,b,c){
    let d = a+b+c;
    return d;
}
let returnval=sum(1,2,3);
console.log(returnval);
  

// This can be shorton through funtions