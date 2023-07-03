// Anonymous function 
// Uma função que não tem nome 

(function (a, b, c) {
    return a + b + c;
}) 

// function express
// Atribuiçao de uma função em uma var
const x = 1
const sum = function (a,b) {
    return a + b;
}

const calculo = sum(7,59)
console.log(calculo);

const anotherSum = sum
console.log(anotherSum(5,9))

// Em JS variavel pode receber qq valor 
