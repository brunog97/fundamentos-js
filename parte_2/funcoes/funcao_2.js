
// Função que recebe e executa uma função
function execQualquerCoisa(fn){
    if( typeof fn === 'function')
        fn()
    else
        console.log('Is not a function!')
}

 execQualquerCoisa() 

 // Função que retorna uma função
 function potencia(base, exp){
    return Math.pow(base,exp)
 }

 const bits128 = potencia(2,128)
 console.log(bits128) //3.402823669209385e+38


 function potencia2(base){
    return function(exp) {
        return Math.pow(base,exp)
    }
 }


 const potenciaDe2 = potencia2(2)
 console.log(potenciaDe2(8)) // 256
 console.log(potencia2(2)(8)) //256