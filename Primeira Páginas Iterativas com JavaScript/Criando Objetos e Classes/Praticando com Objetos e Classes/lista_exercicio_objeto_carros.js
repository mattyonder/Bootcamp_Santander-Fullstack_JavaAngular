class Carro{
    marca;
    cor;
    gastoMedioPorKm;

    // O this se refere a um atributo do contexto do objeto
    constructor(marca, cor, gastoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = 1 / gastoMedioPorKm;
    }

    calcularGastoDePercurso(distanciaEmKm, precoCombustivel) {
        return this.gastoMedioPorKm * distanciaEmKm * precoCombustivel;
    }
}

const uno = new Carro('Fiat', 'Prata', 12)
const palio = new Carro('Palio', 'Preto', 10)

console.log(uno.calcularGastoDePercurso(70, 5))
console.log(palio.calcularGastoDePercurso(70, 5))