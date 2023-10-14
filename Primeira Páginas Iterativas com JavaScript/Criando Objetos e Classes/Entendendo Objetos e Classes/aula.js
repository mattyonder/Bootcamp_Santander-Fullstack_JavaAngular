const pessoa = {
    nome: 'Mateus',
    idade: 17,

    descrever: function () {
        console.log('Meu nome é ' + this.nome + ' e tenho ' + this.idade + '');
    }
};
// Sintaxe de objeto em javascript
// Objeto em java script é uma coleção de chave e valor

pessoa.altura = 1.80;
// Aqui eu incrementei um atributo em meu objeto

delete pessoa.altura;
// Estou deletando um atributo


pessoa.nome = 'Renan';
pessoa.idade = '24';
pessoa.descrever = function () {
    console.log('Meu nome é '+this.nome);
}

// Estou sobreescrevendo o objeto, mudando seus atributos e seu método descrever

const atributo = 'idade';
console.log(pessoa[atributo])
// Aqui eu estou acessando dinamicamente um atributo atravez de uma string

pessoa['nome'] = 'teste';
// Estou recebendo um texto como parâmetro para acessar e mudar o valor de 
// um atributo

console.log(pessoa.nome)

class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2023 - idade;
    }
    // Estou criando um construtor para a classe pessoa
    descrever() {
        console.log('Meu nome é ' + this.nome + ' e tenho ' + this.idade + '');
    }
}

// Instanciando uma classe Pessoa.
// Classe é a definição, e instancia é a ocorrencia

const mateus = new Pessoa('Mateus de Jesus Santos', 17);
const matias = new Pessoa('Matias', 16);
// Estou instanciando um objeto mateus da classse Pessoa

function compararPessoas(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(p1.nome + " é mais velho(a) que " + p2.nome);

    } else if (p2.nome > p1.idade) {
        console.log(p2.nome + " é mais velho(a) que " + p1.nome);

    } else {
        console.log(p1.nome + " tem a mesma idade que " + p2.nome);
    }
}
// Criando uma função para comparar objetos

compararPessoas(mateus, matias);
