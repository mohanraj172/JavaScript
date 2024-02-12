//bollean

let online = false;
 let become = true;
console.log(`not${online}`);
console.log(`become a devloper${become}`);
let fullname=`mohanraj`
document.getElementById("mohan").textContent = `your name is${fullname}`;

//arthamatic operator

let num=10;
console.log(`the value is ${num*2}`);
let result= 2**(2+5);
console.log(`the value is ${result}`);

//functions

let username;
document.getElementById("mySubmit").onclick  = function(){
 username = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = `hello${username}`;
} 
//type conversion
let age = window.prompt("what is your age");
age = Number(age);
age+=1;
console.log(age);

let x = "mohan";
let y = "mohan";
let z =  "mohan";
x = Number(x);
y= String(y);
z = Boolean(z);
console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof y);