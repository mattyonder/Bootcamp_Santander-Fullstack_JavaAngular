
/*
const alunos = ['Joao', 'Vitor', 'Marina'];

alunos.push('Renan');

alunos[3] = 'Vinicius';

alunos[4] = 123;


console.log(alunos.pop());
// Remove o ultimo elemento do lista

console.log(alunos.shift());
// Remove o primeiro elemento da lista

delete alunos[1]; 
//Remove um elemento de uma posição especifica

console.log(alunos);
*/

////////////////////////////////////////


const notas = [];

notas.push(10);
notas.push(10);
notas.push(10);
notas.push(6);
notas.push(5);
notas.push(8);

let soma = 0;

for (let i = 0; i < notas.length; i++) {
    soma = soma + notas[i];
    
}

media = soma / notas.length

console.log(media);

////////////////////////////////////////

/*

const nome = 'Mateus de Jesus Santos';

for (let index = 0; index < nome.length; index++) {
   
    const letra = nome[index]
    console.log(letra)
    
}

*/