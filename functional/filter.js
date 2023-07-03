const numbers = [1,2,3,4,5,6];


const greaterThanZero = el => el > 0;
const greaterThanTen = el => el > 10;
const even = el => el % 2 === 0; // meaning is par

// same return [1,2,3,4,5,6]
console.log(numbers.filter(greaterThanZero));
console.log(numbers.filter(el => el > 0));
// return []
console.log(numbers.filter(greaterThanTen))
// return [2,4,6]
console.log(numbers.filter(even));

const students = [
    { name: 'Jake', score: 6.4 }, 
    { name: 'Susan', score: 8.6 }, 
    { name: 'Emma', score: 9.4 },
    { name: 'Peter', score: 9.1 },
];


const greatStudents = student => student.score >= 9
//[ Emma, Peter] they are great students!
console.log(students.filter(greatStudents));


/*
map()
filter()
reduce()

Essas funções fazem um for internamente pra percorrer os elementos
map e filter são funções que retornam um novo array 
*/