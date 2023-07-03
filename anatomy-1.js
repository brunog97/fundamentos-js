// Function declaration 

// Daclare function
function sayHello(i){
   i =  typeof(i) === 'undefined' ? 0 : i + 1;
   console.log(`${i} - Hello!`);
}

// Invoke function
/*
    sayHello();
*/


// Playing 
// Say Hello 100 times
/*
    for(let i = 0;i < 100; i++){
        sayHello(i);
    }
*/

function sayHelloTo(name){
    console.log(`Hello ${name}!!`);
}

/*
    sayHelloTo('Bruno');
*/

// Este valor não sera imprimido quando a função for invocada
function returnHi(){
    return 'Hi!';
}

// Para imprimir este valor deve usar uma var para receber o valor retornado pela function
// ou chama-la direta no console
// Forma 1 
const greeting = returnHi()
console.log(greeting);

// Forma 2 
console.log(returnHi());

function returnHiTo(name){
    return `Hi ${name}!`;
}

console.log(returnHiTo('Bruno Gomes'));