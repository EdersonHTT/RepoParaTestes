let y = 1
let gardarDinheiro
let nome 
let idade
let etinia
let comprarMais
let quantidades = {
    macas: 0,
    uvas: 0,
    laranjas: 0,
    peras: 0,
    limoes: 0,
}

for (let x = 1; x <= y; x++){
    
function consoleCarteira (){
if(y === 1){
    console.log(`Carteira: ${carteira.dinhero}
    \nIdentidade: \nNome: ${carteira.identidade.nome} \nIdade: ${carteira.identidade.idade} \nEtnia: ${carteira.identidade.etinia}`)
}else{
    console.log(`Carteira: ${carteira.dinhero}`)
}
}

let carteira = {
    identidade: {
    },
}

if ( y === 1){
    carteira.identidade.nome = prompt("Seu nome completo:"),
    carteira.identidade.idade = Number(prompt("Sua Idade?")),
    carteira.identidade.etinia = nacionalidade(prompt("De onde você é").toUpperCase())
    carteira.dinhero = Number(prompt("Quanto você tem?"))
} else {
    carteira.dinhero = gardarDinheiro
    carteira.identidade.nome = nome
    carteira.identidade.idade = idade
    carteira.identidade.etinia = etinia
}

nome = carteira.identidade.nome
idade = carteira.identidade.idade
etinia = carteira.identidade.etinia

consoleCarteira()

function nacionalidade (nacional){
    let qualNacional = nacional

    let nacionalSera 

    switch (qualNacional){
        
        case "BRASIL":
        nacionalSera = "Brasileiro"
        break

        case "EUA", 'ESTADOS UNIDOS':
        nacionalSera = "Norte Americano"
        break

        case "ITALIA":
        nacionalSera = "Italiano"
        break

        case "RUSSIA":
        nacionalSera = "Russo"
        break

        case "JAPÃO":
        nacionalSera = "Japones"
        break

        case "MEXICO":
        nacionalSera = "Mexicano"

    }
    return nacionalSera
}
nacionalidade(carteira.identidade.itinia)



function mercadoDeFrutas (){
      
   let sacola1 = {
    fruta: "maça",
    disponibilidade: 21,
    preco: 12.00
    }
    if (y > 1){
        sacola1.disponibilidade = sacola1.disponibilidade - quantidades.macas
    }

    let sacola2 = {
    fruta: "uva",
    disponibilidade: 23,
    preco: 6.00
    }
    if (y > 1){
        sacola2.disponibilidade = sacola2.disponibilidade - quantidades.uvas
    }

    let sacola3 = {
    fruta: "laranja",
    disponibilidade: 13,
    preco: 9.00
    }
    if (y > 1){
        sacola3.disponibilidade = sacola3.disponibilidade - quantidades.laranjas
    }

    let sacola4 = {
    fruta: "pera",
    disponibilidade: 24,
    preco: 5.00
    }
    if (y > 1){
        sacola4.disponibilidade = sacola4.disponibilidade - quantidades.peras
    }

    let sacola5 = {
    fruta: "limão",
    disponibilidade: 12,
    preco: 7.50
    }
    if (y > 1){
        sacola5.disponibilidade = sacola5.disponibilidade - quantidades.limoes
    }

    let paraSacolas = [sacola1, sacola2, sacola3, sacola4, sacola5]
    return paraSacolas
}
let sacolas = mercadoDeFrutas()

if (sacolas[0].disponibilidade <= 0) {
    sacolas[0].fruta = false
}
if (sacolas[1].disponibilidade <= 0) {
    sacolas[1].fruta = false
}
if (sacolas[2].disponibilidade <= 0) {
    sacolas[2].fruta = false
}
if (sacolas[3].disponibilidade <= 0) { 
    sacolas[3].fruta = false
}
if (sacolas[4].disponibilidade <= 0) {
    sacolas[4].fruta = false
}

function proCarrinho (){

    if (escolha.includes(sacolas[0].fruta)){
        praSacola.push(` [${quantidades.macas}]`+sacolas[0].fruta)
    } 
    if (escolha.includes(sacolas[1].fruta)){
        praSacola.push(` [${quantidades.uvas}]`+sacolas[1].fruta)
    }
    if (escolha.includes(sacolas[2].fruta)){
        praSacola.push(` [${quantidades.laranjas}]`+sacolas[2].fruta)
    } 
    if (escolha.includes(sacolas[3].fruta)){
        praSacola.push(` [${quantidades.peras}]`+sacolas[3].fruta)
    }
    if (escolha.includes(sacolas[4].fruta)){
        praSacola.push(` [${quantidades.limoes}]`+sacolas[4].fruta)
    }
    return praSacola
}
let praSacola = []

function paraEscolher (){
    let praPergunta = []

    if (sacolas[0].disponibilidade > 0){
        praPergunta.push(`\n [${sacolas[0].disponibilidade}] maça ${sacolas[0].preco}R$`)
    }
    if (sacolas[1].disponibilidade > 0){
        praPergunta.push(`\n [${sacolas[1].disponibilidade}] uva ${sacolas[1].preco}R$`)
    }
    if (sacolas[2].disponibilidade > 0){
        praPergunta.push(`\n [${sacolas[2].disponibilidade}] laranja ${sacolas[2].preco}R$`)
    }
    if (sacolas[3].disponibilidade > 0){
        praPergunta.push(`\n [${sacolas[3].disponibilidade}] pera ${sacolas[3].preco}R$`)
    }
    if (sacolas[4].disponibilidade > 0){
        praPergunta.push(`\n [${sacolas[4].disponibilidade}] limão ${sacolas[4].preco}R$`)
    }
    return praPergunta

}

let escolha = prompt(`Diga quais as frutas que você quer: ${paraEscolher()}`)

if (escolha.includes(sacolas[0].fruta)){
    quantidades.macas = quantidades.macas + Number(prompt("Quantas maças?"))
} 
if (escolha.includes(sacolas[1].fruta)){
    quantidades.uvas = quantidades.uvas + Number(prompt("Quantas uvas?"))
}
if (escolha.includes(sacolas[2].fruta)){
    quantidades.laranjas = quantidades.laranjas + Number(prompt("Quantas laranjas?"))
} 
if (escolha.includes(sacolas[3].fruta)){
    quantidades.peras = quantidades.peras + Number(prompt("Quantas peras?"))
}
if (escolha.includes(sacolas[4].fruta)){
    quantidades.limoes = quantidades.limoes + Number(prompt("Quantos limões?"))
}


function numerosDinheiro (){

    let precos = []

    if (escolha.includes(sacolas[0].fruta)){
        precos.push(quantidades.macas * sacolas[0].preco)
    } else {
        precos.push(0)
    }
    if (escolha.includes(sacolas[1].fruta)){
        precos.push(quantidades.uvas * sacolas[1].preco)
    } else {
        precos.push(0)
    }
    if (escolha.includes(sacolas[2].fruta)){
        precos.push(quantidades.laranjas * sacolas[2].preco)
    } else {
        precos.push(0)
    } 
    if (escolha.includes(sacolas[3].fruta)){
        precos.push(quantidades.peras * sacolas[3].preco)
    } else {
        precos.push(0)
    }
    if (escolha.includes(sacolas[4].fruta)){
        precos.push(quantidades.limoes * sacolas[4].preco)
    } else {
        precos.push(0)
    }

    let calculoFrutas = precos[0]+precos[1]+precos[2]+precos[3]+precos[4]
    return calculoFrutas
}
    
function calculoDoDinheiro (){

    let resultadoDoDinheiro = carteira.dinhero - numerosDinheiro()

    let pagamento

    if (resultadoDoDinheiro === 0){
        pagamento = `pagamento feito com sucesso`
    } else if (resultadoDoDinheiro > 0){
        pagamento = `pagamento feito com sucesso \nSeu troco é de ${resultadoDoDinheiro}R$`
    } else {
        pagamento = `faltam ${-(resultadoDoDinheiro)}R$ a serem pagos`
    }
    return pagamento
}

gardarDinheiro = carteira.dinhero - numerosDinheiro()

console.log(`Itens: ${proCarrinho()} 
\nValor: ${numerosDinheiro()}R$
\n${calculoDoDinheiro()}`)

comprarMais = prompt(`Fazer mais uma compra?`).toUpperCase()

if (comprarMais.includes("S")){
    y++
}
}