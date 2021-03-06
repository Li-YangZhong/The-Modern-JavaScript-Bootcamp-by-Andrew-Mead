//undefined for variable
let name 
console.log(name) //undefined represents the absence of a value
name = 'Jen'
if (name === undefined) {
    console.log('Please provide a name')
} else {
    console.log(name)
}

//undefined for argument
//undefined as function return default value

let square = function (num) {
    console.log(num) //undefined
}

let result = square()
console.log(result) //undefined

//Null as assigned value
let age = 27
age = null
console.log(age)//null