(function(window, document) {
  "use strict";
  /*
Vamos desenvolver mais um projeto. A ideia é fazer uma mini-calculadora.
As regras são:

- Deve ter somente 1 input, mas não deve ser possível entrar dados nesse input
diretamente;
- O input deve iniciar com valor zero;
- Deve haver 10 botões para os números de 0 a 9. Cada botão deve ser um número;
- Deve haver 4 botões para as operações principais: soma (+), subtração(-),
multiplicação(x) e divisão(÷);
- Deve haver um botão de "igual" (=) que irá calcular os valores e um botão "CE"
que irá limpar o input, deixando-o com valor 0;

- A cada número pressionado, o input deve atualizar concatenando cada valor
digitado, como em uma calculadora real;
- Ao pressionar um botão com uma das 4 operações, deve aparecer o símbolo da
operação no input. Se o último caractere no input já for um símbolo de alguma
operação, esse caractere deve ser substituído pelo último pressionado.
Exemplo:
- Se o input tem os valores: "1+2+", e for pressionado o botão de
multiplicação (x), então no input deve aparecer "1+2x".
- Ao pressionar o botão de igual, o resultado do cálculo deve ser mostrado no
input;
- Ao pressionar o botão "CE", o input deve ficar zerado.
*/

  var $display = document.querySelector('[data-js="display"]');
  var $acaoCe = document.querySelector('[data-js="buttonCe"]');
  var $acaoIgual = document.querySelector('[data-js="buttonIgual"]');
  var $numeros = document.querySelectorAll('[data-js="buttonNumero"]');
  var $operacoes = document.querySelectorAll('[data-js="buttonOperacao"]');

  function initialize() {
    initEvents();
  }

  function initEvents() {
    Array.prototype.forEach.call($numeros, function(button) {
      button.addEventListener("click", clickNumber, false);
    });

    $acaoCe.addEventListener("click", clickCe, false);

    Array.prototype.forEach.call($operacoes, function(button) {
      button.addEventListener("click", clickOperacao, false);
    });

    $acaoIgual.addEventListener("click", clickIgual, false);
  }

  function clickNumber(event) {
    $display.value += this.value;
  }

  function clickOperacao(event) {
    $display.value = removerOperacao($display.value);
    $display.value += this.value;
  }

  function clickCe(event) {
    $display.value = 0;
  }

  function isLastItemAnOperation(number) {
    var operacoes = getOperacoes();
    var lastaItem = number.split("").pop();

    return operacoes.some(function(operacao) {
      return operacao === lastaItem;
    });
  }

  function getOperacoes() {
    return Array.prototype.map.call($operacoes, function(button) {
      return button.value;
    });
  }
  function removerOperacao(string) {
    if (isLastItemAnOperation(string)) {
      console.log(string.slice(0, -1));
      return string.slice(0, -1);
    }
    return string;
  }

  function clickIgual(event) {
    $display.value = removerOperacao($display.value);
    var allvalues = $display.value.match(getRegexOperacoes());
    $display.value = allvalues.reduce(calculateAllValues);
  }

  function getRegexOperacoes() {
    console.log($operacoes.value);
    console.log(getOperacoes);
    return new RegExp("\\d+[" + getOperacoes().join("") + "]?", "g");
  }

  function calculateAllValues(accumulated, actual) {
    var firstValue = accumulated.slice(0, -1);
    var operador = accumulated.split("").pop();
    var lastValue = removerOperacao(actual);
    var lastOperador = isLastItemAnOperation(actual)
      ? actual.split("").pop()
      : "";
    console.log(operador, firstValue, lastValue);
    return doOperacao(operador, firstValue, lastValue) + lastOperador;
  }

  function doOperacao(operador, firstValue, lastValue) {
    switch (operador) {
      case "+":
        return Number(firstValue) + Number(lastValue);
      case "-":
        return Number(firstValue) - Number(lastValue);
      case "x":
        return Number(firstValue) * Number(lastValue);
      case "÷":
        return Number(firstValue) / Number(lastValue);
    }
  }

  initialize();
})(window, document);
