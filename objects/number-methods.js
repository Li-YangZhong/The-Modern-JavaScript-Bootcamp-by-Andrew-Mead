let num = 103.941

console.log(num.toFixed(2))//四舍五入

console.log(Math.round(num))
console.log(Math.floor(num))
console.log(Math.ceil(num))

let min = 0
let max = 1
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min
//10-20

console.log(randomNum)