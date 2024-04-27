function atividade (){

let nome = prompt("Seu nome")
let email = prompt("Seu e-mail")
console.log(`O e-mail ${email} foi cadastrado com sucesso. Seja bem-vinda(o), ${nome}!`)

}

function atividade2 (arrays){
    let array = []
    let comidas = prompt("comida") 
    let comidas2 = prompt("comida")
    let comidas3 = prompt("comida")
    let comidas4 = prompt("comida")
    array.push(comidas, comidas2, comidas3, comidas4)
    console.log(`Suas comidadas preferidas:\n ${array[0]}\n ${array[1]}\n ${array[2]}\n ${array[3]}`)
}

function lista (){
    let array = []

    let tarefa = prompt("Uma terefa") 
    let tarefa2 = prompt("Uma terefa")
    let tarefa3 = prompt("Uma terefa")
    let tarefa4 = prompt("Uma terefa")


    array.push(tarefa, tarefa2, tarefa3, tarefa4)

 console.log(`Suas tarefas: ${array}`)

    let completas = prompt("Quantas completas de 1 a 4")

    completas = Number(completas)

    array.splice(0, completas)

    console.log(`Suas tarefas: ${array}`)
}
/*

let array1 = []

let guardarNu = prompt("Numero")

guardarNu = Number(guardarNu)

let array2 = [1,2,3,4,5]

let numero1 = prompt("um numero")
numero1 = Number(numero1)
let numero2 = prompt("um numero")
numero2 = Number(numero2)

array2.splice(0, guardarNu)
array2.unshift(numero1, numero2)

let mudar = prompt("Outro Numero")
mudar = Number(mudar)

let mudar2 = prompt("Outro Numero")
mudar2 = Number(mudar2)


array1.push(array2[mudar], array2[mudar2])
console.log(array1, array2)
*/
/*
let frase = "Eu sou Ederson, tenho 16 anos e sou um estudante"
console.log(frase+ "\n")
let nome = prompt("Seu nome")
let idade = prompt("Sua idade")

let estudante = prompt("Esta estudando [S/N]")
if (estudante.toUpperCase() == "SIM"){
    estudante = "sou um estudante"
} else {
    estudante = "não sou um estudante"
}

frase = frase.replaceAll("sou um estudante", estudante)
frase = frase.replaceAll("Ederson", nome)
frase = frase.replaceAll("16", idade)

console.log(frase)


let numero1 = Number(prompt("um numero"))
let numero2 = Number(prompt("um numero"))

let mult = numero1 * numero2

console.log(`${numero1} X ${numero2} = ${mult}`)

let numero3 = Number(prompt("um numero"))
let numero4 = Number(prompt("um numero"))

let mult2 = numero3 * numero4

console.log(`${numero3} X ${numero4} = ${mult2}`)


if (mult < mult2){
    console.log(`O primeiro Resultado é menor que o segundo: ${mult} < ${mult2}`)
} else if (mult = mult2){
    console.log(`O primeiro resultado é igual ao segundo: ${mult} = ${mult2}`)
} else {
    console.log(`O primeiro resultado é maior que o segundo: ${mult} > ${mult2}`)
}
*/

function algo (algo){ 
    let array2 = []
    array2.push(algo[0 + numero])
    array2.push(algo[algo.length - numero2])
    return array2
}
let numero = Number(prompt("Um numero"))
let numero2 = Number(prompt("Um numero"))
let array1 = [1,2,3,4,5,6,7,8,9,]
let novo = algo(array1)
console.log(novo)

