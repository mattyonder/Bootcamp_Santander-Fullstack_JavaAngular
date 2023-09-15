/* Faça um programa para calcular o valor gasto de uma viagem.
Você terá 5 variaveis,. Sendo elas:
Preço do etanol
Preço da gasolina
O tipo de combustivel que está no seu carro
Valor médio de gasto do combustivel carro por KM
Distância  em quilometro da viagem

Imprima no console o valor que será gasto de combustivel para realizar esta viagem.
*/

const precoGasolina = 5.79;
const precoEtanol = 3.85;
const tipoCombustivel = 'Etanol';

const kmPorLitros = 10;
let distanciaEmKm = 100;

let valorGasto;

if (tipoCombustivel === 'Gasolina') {
    valorGasto = (distanciaEmKm / kmPorLitros) * precoGasolina;
} else if (tipoCombustivel === 'Etanol') {
    valorGasto = (distanciaEmKm / kmPorLitros) * precoEtanol;
}
// Se eu definir uma variavel dentro do escopo do IF, isso vai dar erro, pois as variáveis de fora não vão po
// der acessar ela
console.log(valorGasto.toFixed(2));