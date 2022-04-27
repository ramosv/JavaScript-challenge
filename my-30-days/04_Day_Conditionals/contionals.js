

//Excercises: Level 1

let age = prompt('Enter your age:')

if (age > 18) {
    alert(`you are:${age} years old. Which means you are old enough to drive`)
}
else {
    let yearsleft = 18 - age
    alert(`you have ${yearsleft} until you are able to drive`)
}

//ticketing system
//If more than 5 people offer discount of 20%


let ticket = 10;
let people = prompt('How many ticket do you need: ')
let price = 0;

if (people > 5) {
    let price = (ticket * people)
    let discount = (price * .20)
    let total = price - discount
    alert(`Your total is ${total} , you saved ${discount}`)
}
else {
    let price = (ticlet * people)
    alert(`Your total is ${price}`)
}

//excersise level2
//Grading students

let grade = promp('What did you get in the exam?')

if (grade >= 90) {

    alert("A")
}
else if (grade >= 80) {
    alert("B")

}
else if (grade >= 70) {
    alert("C")

}
else if (grade >= 60) {
    alert("D")

}
else {
    alert("F")
}