const numbers = [1,2,3,4,5,6];

function multiplicapor2(number){
    return number * 2
}

// Multiplicando cada elemento por 2 esalvando em numbersV2
numbersV2 = numbers.map(multiplicapor2);
numbersV2 = numbers.map((elemento) => elemento * 2);



console.log(numbersV2);

const students = [
    { name: 'Jake', score: 6.4 }, 
    { name: 'Susan', score: 8.6 }, 
    { name: 'Emma', score: 9.4 },
    { name: 'Peter', score: 9.1 },
];


const getScore = el => el.score;

const scores = students
.map(getScore)
.map(Math.ceil)

/*
ceil arredonda >
floor arredonda <
*/

console.log(scores);
