function escrevaMeuNome(nome) {
    return 'Meu nome é ' + nome;
}

escrevaMeuNome('Mateus');

function verificarIdade(idade) {
    if (idade >= 18) {
        console.log(escrevaMeuNome('Mateus')+' e sou maior de idade');
    } else {
        console.log(escrevaMeuNome('Mateus')+' e sou menor de idade');
    }
}

verificarIdade(17);