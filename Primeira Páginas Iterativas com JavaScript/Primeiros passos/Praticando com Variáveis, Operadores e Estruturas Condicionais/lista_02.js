const peso = 75;
const altura = 1.80;
const imc =  peso / Math.pow(altura, 2);

if (imc < 18.5) {
    console.log("Abaixo do peso");
} else if (imc >= 18.5 && imc < 25) {
    console.log("Peso normal");
} else if (imc >= 25 && imc < 30) {
    console.log("Acima do peso");
} else if (imc >= 30 && imc < 40) {
    console.log("Obesidade");
} else {
    console.log("Obesidade grave");
}

/*
operador > 19 ?(

) : (

);

operador > 19 ? "" : ""
*/