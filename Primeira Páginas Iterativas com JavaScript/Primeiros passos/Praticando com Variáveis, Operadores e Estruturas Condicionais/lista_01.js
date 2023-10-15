/*
1) Faça um algoritmo que dado as 3 notas tiradas por um aluno
    em um semestre da faculdade calcule e imprima a sua média
    e a sua classificação conforme a tabela abaixo.

    media = 3 notas;

    classificação
    - média menor que 5 reprova
    - média entre 5 e 7 recuperação
    - média acima de 7, passou de semestre.
*/

const nota1 = 8;
const nota2 = 8;
const nota3 = 8;

const media = (nota1 + nota2 + nota3) / 3;
console.log(media)

if (media < 5) {
    console.log("Você está reprovado");
}
else if (media => 5 && media <= 7) {
    console.log("Você está de recuperação");
}
else {
    console.log("Você está aprovado");
}