let firstname = "Vicente"
let lastname = "Ramos"
let Country = "USA"
let City = "Denver"
let Age = 24
let isMarried = false
let Year = 1998

console.log(typeof firstname)
console.log(typeof lastname)
console.log(typeof Country)
console.log(typeof City)
console.log(typeof Age)
console.log(typeof isMarried)
console.log(typeof Year)

console.log(10 == '10')
console.log(parseInt('9.8') == 10)

console.log(Math.ceil(4.7) == 5)
console.log(11 == 13)
console.log(Age == Math.floor(24.9))


//user input

var name = window.prompt("Enter name: "); alert("your name is " + name);


let base = window.prompt("Enter Base: ")
let height  = window.prompt("Enter height: ")

alert("your area is : "+  base * height* 0.5)

let result = 0
let result1  = 4 > 3  // true
let result2  = 4 >= 3  //true
let result3  = 4 < 3  //false
let result4  = 4 <= 3 //false
let result5  = 4 == 4 //true
let result6  = 4 === 4  //true
let result7  = 4 != 4  //false
let result8  = 4 != '4'  //false
let result9  = 4 == '4'  //true
const results = [result1,result2, result3, result4, result5, result6,result7,result8,result9]

for(let i = 0; i< 9; i++)
{
    console.log(results[i])
}


const today = new Date()

console.log(today.Year)
console.log(today.getMonth) +1
console.log(today.getDay)
console.log(today.getDate)
console.log(today.getHours)
console.log(today.getMinutes)
console.log(today.getSeconds)
console.log(today.getTime)


let a = windows.prompt("Enter side a: ")
let b = windows.prompt("Enter side b: ")
let c = windows.prompt("Enter side c: ")

alert("The perimeter of the triangle is: " +a+b+c)

const PI = 3.14
let radius = windows.prompt("Enter radius: ")
let area = PI * r * r

//Calculate the slope
