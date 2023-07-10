const numbers = [1,2,3,4,5,6]
const dobro = n => n * 2 
//console.log(numbers.map(dobro))

const nomes = ['Ana','Bia','Gui','Lia','Rafa']
const primeiraLetra = texto => texto[0]

console.log(nomes.map(primeiraLetra))

const carrinho = [
    {nome: 'Caneta', qtde: 10, preco: 7.99},
    {nome: 'Impressora', qtde: 0, preco: 649.99},
    {nome: 'Caderno', qtde: 4, preco: 27.99},
    {nome: 'Lapis', qtde: 3, preco: 5.99},
    {nome: 'Tesoura', qtde: 1, preco: 19.99}
]

const getNome = item => item.nome
console.log(carrinho.map(getNome))

const totais = carrinho.map((elemento) => elemento.preco * elemento.qtde)
console.log(totais)

// Usei um reduce pra efetuar o calculo total dos produtos
console.log(totais.reduce((total, value) => total += value,0))

// Não pode ser uma arrow function porque precisa acessar o array pelo this.
// Demonstrando como o map funciona internamente.
Array.prototype.meuMap = function(fn) {
    const mapped = []
    for(let i = 0; i < this.length; i ++){
        mapped.push(fn(this[i], i, this))
    }
    return mapped;
}

console.log(carrinho.meuMap((elemento) => elemento.preco * elemento.qtde))

