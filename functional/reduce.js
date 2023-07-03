const numbers = [1,2,3,4,5,6];

const sum = (total, el) => total + el;
var total = numbers.reduce(sum)
// 21
console.log(total)

//121
// Neste caso foi passar o valor inicial
total = numbers.reduce(sum, 100)
console.log(total)

const avg = (acc, el, i, array) => {
    if(i === array.length - 1) {
        return (acc + el) / array.length;
    }else {
        return acc + el;
    }   
}

// 3.5
total = numbers.reduce(avg)
console.log(total)