
const carrinho = [
    {nome: 'Caneta', qtde: 10, preco: 7.99},
    {nome: 'Impressora', qtde: 0, preco: 649.99},
    {nome: 'Caderno', qtde: 4, preco: 27.99},
    {nome: 'Lapis', qtde: 3, preco: 5.99},
    {nome: 'Tesoura', qtde: 1, preco: 19.99}
]

const qtdeMaiorQueZero = item => item.qtde > 0
const qtdeMaiorIgualZero = item => item.qtde >= 0
const qtdeMuitoGrande = item => item.qtde >= 1000

Array.prototype.meuFilter = function(fn){
  const novoArray = [];
  for(let i =0; i < this.length; i++){
    if ( fn(this[i], i, this) ){
      novoArray.push(this[i]);
    }
  }
  return novoArray;
}

const result = carrinho
.meuFilter(qtdeMaiorIgualZero)
.map((item) => item.nome)
/*
[
  { nome: 'Caneta', qtde: 10, preco: 7.99 },
  { nome: 'Caderno', qtde: 4, preco: 27.99 },
  { nome: 'Lapis', qtde: 3, preco: 5.99 },
  { nome: 'Tesoura', qtde: 1, preco: 19.99 }
]
*/
console.log(result)

