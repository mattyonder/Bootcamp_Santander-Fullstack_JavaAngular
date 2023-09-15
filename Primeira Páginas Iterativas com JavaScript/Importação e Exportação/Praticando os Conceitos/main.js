
const { gets, print } = require('./funcoes');

let maiorValor = 0;

for (let index = 0; index < 5; index++) {

    const numero = gets();
    if (numero > maiorValor) {

        maiorValor = numero;
    }
}

print(maiorValor)
