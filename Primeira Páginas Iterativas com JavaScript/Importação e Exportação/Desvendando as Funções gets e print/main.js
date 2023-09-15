const funcoes = require('./funcoes_auxiliares');
// O funcoes recebe um objeto require

// E quando usamos um require estamos importando oq
// está sendo exportado
// então devemos definir o que vai ser exportado

console.log(funcoes);
// Estou mostrando o que tem dentro de funções

console.log(funcoes.gets())
// Estou usando a função gets dentro de funcoes


/*const pessoa = {
    nome : 'mateus'
}

const { nome } = pessoa;

console.log(nome);*/

//Aqui eu "desmontei a classe" e criei uma variavel que recebe um atributo dela

const { gets, print } = require('./funcoes_auxiliares');

print(gets());

// Desconstrui o objeto em 2 variaveis gets e print
// E dei um print em gets e executei ele
