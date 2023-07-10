// somar(3)(4)(5)
function somar(n1){
    return function(n2){
        return function(n3){
            return n1 + n2 + n3
        }
    }
}


const resultadoSomar = somar(3)(3)(3)
console.log(resultadoSomar) // 9

// fn -> 3 + 7

function calcular(n1){
    return function(n2){
        return function(fn){
            if (typeof fn === 'function')
                return fn(n1,n2)
            else
                return 'Is not a function!'
        }
    }
}

const soma = (n1,n2) => n1 + n2

var calcularSoma = calcular(1)(1)(soma)
console.log(calcularSoma) // 2


/*
RESPOSTA DO DESAFIO 

function somar (a){
    return function(b) {
        return function(c){
            return a +b + c
        }
    }
}

function calcular(x){
    return function(y){
        return function (fn){
            return fn(x,y)
        }
    }
}

function subtrair(a,b){
    return a - b
}

function multiplicar(a,b){
    return a * b 
}

const r1 = calcular(10)(5)(subtrair)
const r2 = calcular(10)(5)(multiplicar)
console.log(r1) //5 
console.log(r2) //50
*/