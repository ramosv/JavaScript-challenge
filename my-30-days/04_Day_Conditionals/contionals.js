

//Excercises: Level 1

let age = prompt('Enter your age:')

if (age > 18) {
    alert(`you are:${age} years old. Which means you are old enough to drive`)
}
else {
    let yearsleft = 18 - age
    alert(`you have ${yearsleft} until you are able to drive`)
}
