

//Day 2 excercises

let challenge = '30 days of JavaScript'
let companies = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
let sentece = 'You cannot end a sentence with because because because is a conjunction'

//exercise: Level 1

console.log(challenge)
console.log(challenge.length)
console.log(challenge.toUpperCase)
console.log(challenge.toLowerCase)
console.log(challenge.substring(2,8))
console.log(challenge)
console.log(challenge.includes('Script'))
console.log(challenge.split(' '))
console.log(companies.split(','))
console.log(challenge.replace('JavaScript', 'Python'))
console.log(challenge.charAt(15))
console.log(challenge.charCodeAt('J'))
console.log(challenge.indexOf('a'))
console.log(challenge.lastIndexOf('a'))
console.log(sentece.indexOf('because'))
console.log(sentece.lastIndexOf('because'))
console.log(sentece.search('because'))


//Excercise level 2
console.log("Excersises Level two /n")
console.log('There is no exercise better for the heart than reaching down and lifting people up.')
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.")

console.log(parseFloat('9.8')==10)
console.log(Math.ceil(9.8) == 10)

let string = ['jargon', 'python']
console.log(string.includes('on'))

let randnum = Math.random()
let numbtnzeroandfifty = randnum * 51
let numbtnfiftyandone = randnum * 51
let numbsubnet =  randnum * 256

console.log(Math.floor(numbtnzeroandfifty))
console.log(Math.floor(numbtnfiftyandone) +50)
console.log(Math.floor(numbsubnet))

console.log('1\t1\t1\t1\t1')
console.log('2\t1\t2\t4\t8')
console.log('3\t1\t3\t9\t27')
console.log('4\t1\t4\t16\t64')
console.log('5\t1\t5\t25\t125')

let stringtwo = 'You cannot end a sentence with because because because is a conjunction'
console.log(stringtwo.substr(27,49))