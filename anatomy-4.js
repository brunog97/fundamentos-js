// Anonymous function 
(function (a,b,c) {
    console.log(a + b + c)
})(1,2,3);
// ??? como chamar essa function
// IIFE - Immediately Invoked Function Expression 
// Function Invocada Imediatamente
// Passando os valores logo em seguida (1,2,3)

// Executar duas funções desta forma se faz necessario o uso do ponto virgula na primeira 

// Possível criar função desse tipo como arrow 
(() => {
    console.log('arrow #1')
})();

