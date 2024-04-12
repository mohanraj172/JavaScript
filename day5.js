  // array maping .. array maping used transform / ma the array.

let array =[1,2,3,4,5,6]

let sqr = array.map((n)=>{
return n*n
})
console.log(array)

ex:

let user =[ {name:'mohan', age:20,gender:'male'},
              {name:'raj', age:23,gender:'male'},
              {name:'kumar' , age:28,gender:'male'},
              {name:'rohith', age:22,gender:'male'},
              ]
let cal = user.map((data)=>{
    return data.name
})
console.log(cal)

//filters can choose particular value to used
let cal = user.filter((data)=>{
return data.age>20
})

console.log(cal)


one click ="joined"
let title = document.getElementById('title')
let btn = document.getElementById('btn')
btn.style.display = 'none'
title.innerText = 'welcome'


function and value

  function

let amount = document.getElementById( 'amount' ) ;
let persons= document.getElementById( 'persons' ) ;
let result = (amount. value / persons.value).toFixed(2);//=> to fixed due to used for number of decimal add the value
document. getElementById( ' result ' ) . inner Text = result

amount.value =''
person .value = '' //it has add decimal nuber due to remove the decimal numbers.


