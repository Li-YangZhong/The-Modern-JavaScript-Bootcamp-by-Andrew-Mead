//Global scope (f_to_c)
    //Local scope farenheit, celsius
        //Local scope (isFreezing)
let f_to_c = function (fahrenheit) {
    let celsius = (fahrenheit - 32) * 5 / 9

    if (celsius <= 0) {
        let isFreezing = true
    }
    
    return celsius
}


console.log(f_to_c(32))
console.log(f_to_c(68))