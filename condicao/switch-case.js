//Escreva um programa que receba o número de um mês (1 a 12) e exiba o nome do mês correspondente.
// Escreva um programa que receba um número de 1 a 7 e exiba o dia da semana correspondente, considerando que domingo é o dia 1.
// Escreva um programa que receba uma letra e verifique se é uma vogal ou uma consoante.
// Escreva um programa que receba um número de 1 a 5 e exiba a mensagem correspondente: "Muito bom", "Bom", "Regular", "Ruim" ou "Muito ruim".
// Escreva um programa que receba uma nota de 0 a 100 e exiba a mensagem correspondente: "Aprovado" se a nota for igual ou maior que 60, ou "Reprovado" caso contrário.

//Exercícios Condicionais
let mes = 1
switch (mes) {
    case 1:
        console.log('Janeiro')
        break;
    case 2:
        console.log('Fevereiro')
        break;
    case 3:
        console.log('Março')
        break;
    case 4:
        console.log('Abril')
        break;
    case 5:
        console.log('Maio')
        break;
    case 6:
        console.log('Junho')
        break;
    case 7:
        console.log('Julho')
        break;
    case 8:
        console.log('Agosto')
        break;
    case 9:
        console.log('Setembro')
        break;
    case 10:
        console.log('Outubro')
        break;
    case 11:
        console.log('Novembro')
        break;
    case 12:
        console.log('Dezembro')
        break;
    default:
        console.log('Esse mês não existe')
        break;
}

let semana = 2
switch (semana) {
    case 1:
        console.log('Domingo')
        break;
    case 2:
        console.log('Segunda')
        break;
    case 3:
        console.log('Terça')
        break;
    case 4:
        console.log('Quarta')
        break;
    case 5:
        console.log('Quinta')
        break;
    case 6:
        console.log('Sexta')
        break;
    case 7:
        console.log('Sábado')
        break;
    default:
        console.log('Esse dia não existe')
        break;
}

let letra = 'l'
if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
    console.log('Vogal')
} else {
    console.log('Consoante')
}

let num = 2
if (num === 1) {
    console.log('Muito ruim')
} else if (num === 2) {
    console.log('Ruim')
} else if (num === 3) {
    console.log('Regular')
} else if (num === 4) {
    console.log('Bom')
} else if (num === 5) {
    console.log('Muito bom')
}

let nota = 1

if (nota >= 60 && nota <= 100) {
    console.log('Aprovado')
} else if (nota < 60 && nota >= 0) {
    console.log('Reprovado')
} else {
    console.log('Valor não permitido')
}