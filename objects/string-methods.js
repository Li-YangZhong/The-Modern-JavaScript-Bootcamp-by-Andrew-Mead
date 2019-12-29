let name = '  Andrew Mead '

//Length Property
console.log(name.length)

//Convert to upper case

console.log(name.toUpperCase())

//Convert to lower case

console.log(name.toLowerCase())

//Includes method

let password = 'abc123asdf098'
console.log(password.includes('password'))

//Trim
console.log(name.trim())

//isValidPassword
let isValidePassword = function(password) {

    return password.length > 8 && !password.includes('password')

}
 
console.log(isValidePassword('asdfp'))
console.log(isValidePassword('abc123@#$%^&'))
console.log(isValidePassword('asdfpasdfpoijpassword'))
