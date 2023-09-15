const lista = [];

for (let index = 0; index <= 30; index++) {
    lista.push(index);
}

for (let index = 0; index <= lista.length; index++) {

    const numero = lista[index];
    if (numero % 2 === 0) {
        console.log(lista[index]);
    }
    
}