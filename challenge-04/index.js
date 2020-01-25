// Desafio da semana #4
/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
var isTruthy = function(a) {
  if (a) {
    return true;
  }
  return false;
};

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
console.log("Retorna Falso: ", isTruthy(false));
console.log("Retorna Falso: ", isTruthy());
console.log("Retorna Falso: ", isTruthy(0));
console.log("Retorna Falso: ", isTruthy(undefined));

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
console.log("Retorna parâmetro truthy: ", isTruthy(1));
console.log("Retorna parâmetro truthy: ", isTruthy(1 + 1));
console.log("Retorna parâmetro truthy: ", isTruthy(2 - 1));
console.log("Retorna parâmetro truthy: ", isTruthy(1 * 1));
console.log("Retorna parâmetro truthy: ", isTruthy(1 / 1));
console.log("Retorna parâmetro truthy: ", isTruthy("a"));
console.log("Retorna parâmetro truthy: ", isTruthy("b"));
console.log("Retorna parâmetro truthy: ", isTruthy(1));

/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/

var carro = {
  marca: "Hyundi",
  modelo: "I30",
  placa: "AAA1A23",
  ano: "2010",
  cor: "Prata",
  quantasPortas: 5,
  assentos: 5,
  quantidadePessoas: 0
};

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
var mudarCor = function(cor) {
  carro.cor = cor;
};

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
var obterCor = function() {
  return carro.cor;
};

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
var obterModelo = function() {
  return carro.modelo;
};

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/

var obterMarca = function() {
  return carro.marca;
};

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
var obterMarcaModelo = function() {
  return "Esse carro é um : " + obterMarca() + " " + obterModelo();
};

console.log("Retorno do obterMarcaModelo", obterMarcaModelo());

/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:
- Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos.
- O método deve retornar a frase: "Já temos [X] pessoas no carro!"
- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"
- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/

carro.adicionarPessoas = function(numeroPessoa) {
  var adicionarPessoas = carro.quantidadePessoas + numeroPessoa;

  if (carro.quantidadePessoas === carro.assentos) {
    return "O carro já está lotado!";
  }

  if (adicionarPessoas > carro.assentos) {
    var vagas = carro.assentos - carro.quantidadePessoas;
    var palavraPessoa = vagas === 1 ? " pessoa !" : " pessoas !";
    return "Só cabem mais " + vagas + palavraPessoa;
  }
  carro.quantidadePessoas += numeroPessoa;
  return "Já temos " + carro.quantidadePessoas + " pessoas no carro!";
};

console.log("adicionarPessoas + 2 : ", carro.adicionarPessoas(2));
console.log("adicionarPessoas + 8 : ", carro.adicionarPessoas(8));
console.log("adicionarPessoas + 5: ", carro.adicionarPessoas(5));
console.log("adicionarPessoas + 5: ", carro.adicionarPessoas(3));
console.log("adicionarPessoas + 5: ", carro.adicionarPessoas(1));

/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/
console.log("Qual a cor atual do carro? ", obterCor());

// Mude a cor do carro para vermelho.
mudarCor("vermelho");

// E agora, qual a cor do carro?
console.log("Qual a cor atual do carro? ", obterCor());

// Mude a cor do carro para verde musgo.
mudarCor("verde musgo");

// E agora, qual a cor do carro?
console.log("Qual a cor atual do carro? ", obterCor());
// Qual a marca e modelo do carro?
console.log("Retorno do obterMarcaModelo", obterMarcaModelo());

// Adicione 2 pessoas no carro.
carro.quantidadePessoas = 2;
console.log("Quantidade de pessoas no carro ", carro.quantidadePessoas);
// Adicione mais 4 pessoas no carro.
carro.quantidadePessoas += 4;
console.log("Quantidade de pessoas no carro ", carro.quantidadePessoas);
// Faça o carro encher.
carro.quantidadePessoas = 5;
console.log("adicionarPessoas + 4: ", carro.adicionarPessoas(4));
// Tire 4 pessoas do carro.
carro.quantidadePessoas += -4;
console.log(" Tire 4 pessoas do carro.  ", carro.quantidadePessoas);
// Adicione 10 pessoas no carro.
console.log("Adicione 10 pessoas no carro = 10 ", carro.adicionarPessoas(10));
// Quantas pessoas temos no carro?
console.log("Quantas pessoas temos no carro? ", carro.quantidadePessoas);
