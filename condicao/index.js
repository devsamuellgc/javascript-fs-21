const pessoa = 'Samuel'
let idade = 26
idade = 3
if (idade > 17) {
    console.log('Maior que 17', idade)
} else if (idade < 17) {
    console.log('Maior que 15', idade)
} else {
    console.log('Menor que 16', idade)
}

// Operadores lógicos
// Soma: + 
// Subtrair: - 
// Dividir: / 
// Multiplicar: *
// Resto: %

let num1 = 3
let num2 = 6

const resultado = num1 * num2

// console.log(resultado)
console.log(resultado % 5 === 0, resultado) //Saber quando é ímpar
console.log(resultado % 2 === 0, resultado) //Saber quando é par
// console.log(0 === '0')

// if (num1 === 0) {
//     console.log('Número:', 0)
// } else if (num1 % 2 === 0) {
//     console.log('par', num1)
// } else {
//     console.log('impar', num1)
// }

// Escreva um programa que verifique se um número é positivo, negativo ou zero.

let valor = 0;

if (valor === 0) {
    console.log('Zero')
} else if (valor > 0) {
    console.log('Número é positivo')
} else {
    console.log('Número é negativo')
}