let a = 4

console.log(a) // 4

// Function declaration
function bomDia() {
    console.log('Bom dia!')
}

bomDia() // Bom dia!

//Function expression 
const boaTarde = () => 'Boa Tarde!' // Boa tarde!
const boaTarde2 = () => console.log('Boa Tarde!') // undefined
let x = boaTarde2()
let y = boaTarde()
console.log(x) // undefined
console.log(y) // Boa tarde!

function somar(a,b){
    return a + b
}

const resultado = somar(3,4) //7
console.log(resultado)