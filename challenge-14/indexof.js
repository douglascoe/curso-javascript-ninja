/*
const frutas = ["laranja", "abacaxi", "limão"];
const lugares = {
  estados: {
    SP: ["São Paulo", "Guarulhos"],
    RJ: ["Rio", "Niteroi"],
    RN: ["Natal", "Mossoró"]
  }
};

let lugarQueOUsuarioDigitou = "Natal";

console.log(
  `indice do ${lugarQueOUsuarioDigitou}:`,
  lugares.estados.SP.indexOf(lugarQueOUsuarioDigitou),
  lugares.indexOf(lugarQueOUsuarioDigitou)
);

// ----
var numberObjects = [];
for (var i = 1; i <= 10; i++) {
  numberObjects.push({ number: i });
}

console.log("\nExiste um { number: 2 } em numberObjects?");

if (numberObjects.indexOf({ number: 2 }) == -1) {
  console.log("Não existe um objeto { number: 2 } em numberObjects :(");
} else {
  console.log("Existe um objeto { number: 2 } em numberObjects !");
}
*/

let banana = { fruta: "banana" };
let fruta = banana;

banana = "Douglas";
fruta = banana;

let douglas = fruta;

fruta = { number: "1" };

console.log("banana:", banana); // douglas
console.log("fruta:", fruta); // douglas
console.log("douglas:", douglas); // douglas
