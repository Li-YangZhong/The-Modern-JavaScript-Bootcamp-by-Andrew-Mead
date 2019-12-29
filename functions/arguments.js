// multiple arguments

let add = function (a, b) {
    return a + b
}

let result = add(10, 1)
console.log(result)

//default arguments

let getScoreText = function (name = 'Anonymous', score = 0) {
    return `Name: ${name} - Score: ${score}`

}

let scoreText = getScoreText(undefined, 99)
console.log(scoreText)


let tipCalc = function(total, tipPercent = 0.2) {
    // return total*tipPercent
    return `A ${tipPercent * 100}% tip on $${total} would be ${total * tipPercent}`
}

let tipAmount = tipCalc(60)
console.log(tipAmount)


