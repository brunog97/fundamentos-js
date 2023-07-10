// arrow function 
const felizNatal = () => console.log('Feliz Natal!!!')
felizNatal()

// Quando possui apenas um parametro pode omitir os parenteses
const saudacao = nome => `Fala ${nome}!!!!`
console.log(saudacao('Bruno'))

const somar = numeros => {
    let total = 0 
    for(let n of numeros){
        total += n
    }
    return total
}

//operador rest ->  pegar tudo e jogar em um array
const somar2 = (...numeros) => {
    let total = 0 
    for(let n of numeros){
        total += n
    }
    return total
}
console.log(somar([1,2,3,4,5,6,7,8,9,10])) //55
console.log(somar2(3,2)) //5


// reduzindo codigo 
const potencia = base => exp => Math.pow(base,exp)
console.log(potencia(2)(10)) //1024

//this 
Array.prototype.log = function (){
    console.log(this)
}

Array.prototype.ultimo = function(){
    console.log(this[this.length -1])
}

const numeros = [1,2,3]
numeros.log() // [1,2,3]
numeros.ultimo() // 3