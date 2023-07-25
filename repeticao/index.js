// for (let i = 0; i < 5; i++) {
//     console.log(i)
// }

// for (let i = 2; i <= 100; i++) {
//     let isPrime = true;

//     for (let j = 2; j < i; j++) {
//         if (i % j === 0) {
//             isPrime = false;
//             break;
//         }
//     }

//     if (isPrime) {
//         console.log(i);
//     }
// }

// Array     0   1  2
// const arr = 'caso'


// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 'a' || arr[i] === 'e' || arr[i] === 'i' || arr[i] === 'o' || arr[i] === 'u') {
//         console.log(arr[i]);
//     }
// }

const vogais = ['a', 'e', 'i', 'o', 'u']

const ultimaPosicao = vogais.length - 1

const nome = 'George'

// for(let i = 0; i < nome.length; i++) {
//     console.log(i, nome[i])
// }

// let contador = 0
// for (let letra of nome) {

//     if(vogais.includes(letra)) {
//         contador++
//         console.log(contador)
//     }
// }

// for (let letra in vogais) {

//     console.log(letra)

// }


// const carro = {
//     "marca do carro": 'Fiat',
//     modelo: 'Sedan',
//     ano: 2022,
//     cor: 'rosa'
// }


// for (const chave in carro) {
//     console.log(carro[chave])
// }




// Mostrar apenas os nomes
const produtos = [
    { nome: 'Camisa', valor: 35 },
    { nome: 'Calça', valor: 50 },
    { nome: 'Sapatos', valor: 65 },
]
let soma = 0;

// for(let produto of produtos) {
//     soma = soma + produto.valor
// }

// console.log(soma)


const cidade = {
    nome: "Quixadá",
    populacao: 88321,
    estado: "CE",
    capital: false
}


const cidades = [
    {
        nome: "Quixadá",
        populacao: 88321,
        estado: "CE",
        capital: false
    },
    {
        nome: "Fortaleza",
        populacao: 2000000,
        estado: "CE",
        capital: true
    },
    {
        nome: "Guaramiranga",
        populacao: 45,
        estado: "CE",
        capital: false
    }
]

// mostrar apenas as cidades que não são capitais

for (const cidade of cidades) {

    if(cidade.capital === false) {
         console.log(cidade.nome, cidade.capital)
    }
}