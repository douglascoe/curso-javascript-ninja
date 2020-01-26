/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var arrayDeCinco = [1, "Coe", null, "2", ""];
console.log("Valores do array : ", arrayDeCinco);

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
var retornaArray = function(b) {
  return b;
};

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(
  "Retorna o segundo índice do array ",
  retornaArray(arrayDeCinco)[1]
);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/

var retornaIndex = function(array, index) {
  return array[index];
};

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var arrayDeCinco = [1, "Coé", null, true, [1, 2]];
console.log("Valores do array : ", arrayDeCinco);

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/

console.log("Retornar o index 0: ", retornaIndex(arrayDeCinco, 0));
console.log("Retornar o index 1: ", retornaIndex(arrayDeCinco, 1));
console.log("Retornar o index 2: ", retornaIndex(arrayDeCinco, 2));
console.log("Retornar o index 3: ", retornaIndex(arrayDeCinco, 3));
console.log("Retornar o index 4: ", retornaIndex(arrayDeCinco, 4));

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(nome) {
  var livros = {
    "Libro A": {
      quantidadePaginas: 100,
      autor: "Coe",
      editora: "Brasil"
    },

    "Libro B": {
      quantidadePaginas: 200,
      autor: "Coe",
      editora: "Brasil"
    },

    "Libro C": {
      quantidadePaginas: 300,
      autor: "Coé",
      editora: "Brasil"
    }
  };

  if (!nome) {
    return livros;
  }

  return livros[nome];
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log("Os Livros :", book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
// Não estou conseguindo pegar o primeiro libro cadastrado.
console.log("O livro " + book() + " tem " + +"páginas!");

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
// ?

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
// ?
