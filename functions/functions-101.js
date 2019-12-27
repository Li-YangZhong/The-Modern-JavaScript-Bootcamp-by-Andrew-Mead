let greetUser = function () {
    console.log('Welcome user!')
}

greetUser()
greetUser()
greetUser()

let square = function (num) {
    let result = num * num
    return result
}

let value = square(3)
let otherValue = square(10)

console.log(value)
console.log(otherValue)

// let celsius = (fahrenheit - 32) * 5 / 9

// let f_to_c = function (fahrenheit) {
//     let celsius = (fahrenheit - 32) * 5 / 9
//     return celsius
// }

let f_to_c = function (fahrenheit) {
    return (fahrenheit - 32) * 5 / 9
    
}
console.log(f_to_c(32))
console.log(f_to_c(68))