
function gets() {
    return 10;
}

function print(texto) {
    console.log(texto);
}

module.exports = { gets, print };
// Estou exportando um um objeto com o gets e o print

module.exports.gets = gets;
// poderia fazer isso também