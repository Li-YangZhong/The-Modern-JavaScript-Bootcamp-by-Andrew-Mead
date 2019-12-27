// multiple arguments

let add = function (a, b) {
    return a + b
}

let result = add(10, 1)
console.log(result)

//default arguments

let getScoreText = function (name = 'Anonymous', score = 0) {
    return 'Name: ' + name + ' Score: ' + score
}

let scoreText = getScoreText(undefined, 99)
console.log(scoreText)


let tipCalc = function(total, tipPercent = 0.2) {
    return total*tipPercent
}

let tipAmount = tipCalc(100, 0.4)
console.log(tipAmount)