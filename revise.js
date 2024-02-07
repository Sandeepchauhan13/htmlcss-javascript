console.log("functions in js");

function greet(name, greetText="welcome from javascript"){
    console.log(greetText+name+"is a good boy");
}
let name="Sandeep";
let name1="saurav";
let name2="shivam";
let name3="Sagar";
 
let greetText="good morning";
greet(name, greetText);
greet(name1, greetText);
greet(name2, greetText);
greet(name3);

function sum (a,b,c){
    let d = a+b+c;
    return d;
}
let returnVal= sum(1,2,3);
console.log(returnVal)
// console.log(name+"have a nice day");
// console.log(name1+"have a nice day");
// console.log(name2+"have a nice day");
// console.log(name3+"have a nice day");
