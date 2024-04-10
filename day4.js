 //object edit and delete

let user = {
  name: 'mohan'
  age: 20;
  salary:60000
  address:'pollachi'
}
user.email="email"//add the email
delete user.name//delete the user
console.log(user)

//array usind add and delete method...

let user = ['mohan','user','age','void']
console.log(user[1])// add inddex value of Array
user.push = ('add')//add the element array
user.pop()//delete the element array.

user.splice(1,0,'apple') //delecting are adding array middle element are delecting  the element exaple: splice(index,delete count,addlist)..

console.log(user)

// function...
function name() {
console.log('mohan')
}
name()
name()
//create a function it make the many to to call the function.

function add(a, b){
console.log (a+b)
}
add(2,3)
add(50,20)
//let => it is unable to use the out side the function..
// create a function to calculate the
     
  function sqr(n){
  return n*n;
  }            
 let result= sqr(3)
 console.log(result)

//arrow function...

cube=(n)=>{
console.log(n*n*n)
}
cube(3)
