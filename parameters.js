function logParams(a,b,c){
    console.log(a,b,c);
}

// Params não declarados foram ignoradas e a função foi executada bem sucedida
logParams(1,2,3,4,5,6)
logParams(1,2,3)
// O mesmo ocorre para var existentes que foram omitidas
logParams(1,2)
logParams()

// Inicializando valor das variaveis
function defaultParams(a,b,c = 0){
    console.log(a,b,c)
}

defaultParams(7,8)


function logNums(nums){
    for(let n of nums){
        console.log(n)
    }
}

logNums([1,2,3])

// Operador spread/rest
function logNums2(...nums){
    // Juntando o array separando o por espaço
    console.log(nums.join(" "))
    // for(let n of nums){
    //     console.log(n)
    // }
}

logNums2(1,2,3,4,5,6)

// função que ira somar todos os numeros passados
function sumAll(...nums){
    let total = 0; 
    for(let n of nums){
        total += n;
    }
    return total;
}
//55
console.log(sumAll(1,2,3,4,5,6,7,8,9,10))

// !!! JS É UMA LINGUAGEM FLEXIVEL !!! 