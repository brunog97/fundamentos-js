

// Function express
const increment1 = function(n){
    return n + 1;
}

// Arrow function is always anonymous
const increment2 = (n) => {
    return n + 1;
}

// Quando é apenas um param pode se remover os parenteses
const increment3 = n => {
    return n + 1;
}

// Quando é uma função simples pode ser reduzida
//pois o compilador entende que isto será retornado de forma implicita
const increment4 = n => n + 1;


console.log(increment1(1))
console.log(increment2(6))
console.log(increment4(5))

const sum = (a,b) => a + b
console.log(sum(1,1))