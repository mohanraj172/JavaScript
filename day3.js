//if satement

if(temp>0 && temp<=30){
console.log("the weather good");
}
else{
console.log("weather is bad");
}


// while loop


let login = false;
let username;
let password;
while(!login){
    usrename = window.prompt(`Enter your username`);
    password = window.prompt(`Enter your password`);
    if(username === "myusername" && password === "mypassword"){
        login = true;
        console.log(`you are login`);
    }
    else{
        console.log(`invalid name and password`);
    }
}
// for loop


function EvenNumbers() {
  for (let i = 0; i <= 10; i += 2) {
    console.log(i);
  }
}
EvenNumbers();