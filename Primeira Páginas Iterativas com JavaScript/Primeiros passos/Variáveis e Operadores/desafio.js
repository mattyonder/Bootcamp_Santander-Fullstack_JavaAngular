/* Faça um programa para calcular o valor gasto de uma viagem.
Você terá 3 variaveis,. Sendo elas:
Preço do combustivel
Valor médio de gasto do combustivel carro por KM
Distância  em quilometro da viagem

Imprima no console o valor que será gasto de combustivel para realizar esta viagem.
*/
const precoCombustivel = 5.79;
const kmPorLitros = 12;
let distanciaEmKm = 1580;

let valorGasto = (distanciaEmKm / kmPorLitros) * precoCombustivel;

console.log('O valor gasto na viagem foi: ' + valorGasto.toFixed(2));
