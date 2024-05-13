
function consoleCarteira (){

    console.log(`Carteira: \nDinheiro: ${carteira.dinhero}
    \nIdentidade: \nNome: ${carteira.identidade.nome} \nIdade: ${carteira.identidade.idade} \nEtnia: ${carteira.identidade.itinia}`)

}

let carteira = {
    identidade: {
        nome: prompt("Seu nome completo:"),
        idade: Number(prompt("Sua Idade?")),
        itinia: nacionalidade(prompt("De onde você é"))
    },

    dinhero: Number(prompt("Quanto você tem na carteira?")),
}
consoleCarteira()

function nacionalidade (nacional){
    let qualNacional = nacional

    let nacionalSera 

    switch (qualNacional){
        
        case "Brasil":
        nacionalSera = "Brasileiro"
        break

        case "EUA":
        nacionalSera = "Norte Americano"
        break

        case "Italia":
        nacionalSera = "Italiano"
        break

        case "Russia":
        nacionalSera = "Russo"
        break

        case "Japão":
        nacionalSera = "Japones"
        break

        case "Mexico":
        nacionalSera = "Mexicano"

    }
    return nacionalSera
}
nacionalidade(carteira.identidade.itinia)

function mercadoDeFrutas (){
      
   let sacola1 = {
    fruta: "maça",
    disponibilidade: true,
    preco: 12.00
    }

       let sacola2 = {
    fruta: "uva",
    disponibilidade: true,
    preco: 6.00
    }

       let sacola3 = {
    fruta: "laranja",
    disponibilidade: true,
    preco: 9.00
    }

       let sacola4 = {
    fruta: "pera",
    disponibilidade: true,
    preco: 5.00
    }

       let sacola5 = {
    fruta: "limão",
    disponibilidade: true,
    preco: 7.50
    }

    let paraSacolas = [sacola1, sacola2, sacola3, sacola4, sacola5]
    return paraSacolas
}

let sacolas = mercadoDeFrutas()

sacolas[0].disponibilidade = false
sacolas[1].disponibilidade = true
sacolas[2].disponibilidade = true
sacolas[3].disponibilidade = true
sacolas[4].disponibilidade = true

if (sacolas[0].disponibilidade === false) {
    sacolas[0].fruta = 0
}
if (sacolas[1].disponibilidade === false) {
    sacolas[1].fruta = 0
}
if (sacolas[2].disponibilidade === false) {
    sacolas[2].fruta = 0
}
if (sacolas[3].disponibilidade === false) {
    sacolas[3].fruta = 0
}
if (sacolas[4].disponibilidade === false) {
    sacolas[4].fruta = 0
}

function porNoCarrinho (){

    function proCarrinho (){

        if (escolha.includes(sacolas[0].fruta)){
            praSacola.push(sacolas[0].fruta)
        } 
        if (escolha.includes(sacolas[1].fruta)){
            praSacola.push(sacolas[1].fruta)
        }
        if (escolha.includes(sacolas[2].fruta)){
            praSacola.push(sacolas[2].fruta)
        } 
        if (escolha.includes(sacolas[3].fruta)){
            praSacola.push(sacolas[3].fruta)
        }
        if (escolha.includes(sacolas[4].fruta)){
            praSacola.push(sacolas[4].fruta)
        }
        return praSacola
    }
    let praSacola = []

    function paraEscolher (){
    let praPergunta = []

    if (sacolas[0].disponibilidade === true){
        praPergunta.push(`\n maça ${sacolas[0].preco}R$`)
    }
    if (sacolas[1].disponibilidade === true){
        praPergunta.push(`\n uva ${sacolas[1].preco}R$`)
    }
    if (sacolas[2].disponibilidade === true){
        praPergunta.push(`\n laranja ${sacolas[2].preco}R$`)
    }
    if (sacolas[3].disponibilidade === true){
        praPergunta.push(`\n pera ${sacolas[3].preco}R$`)
    }
    if (sacolas[4].disponibilidade === true){
        praPergunta.push(`\n limão ${sacolas[4].preco}R$`)
    }
    return praPergunta
}

let escolha = prompt(`Diga quais as frutas que você quer: ${paraEscolher()}`)

    let n1
    let n2
    let n3
    let n4
    let n5

    function numerosDinheiro (){
        if (escolha.includes(sacolas[0].fruta)){
            n1 = sacolas[0].preco
        } else {
            n1 = 0
        }
        if (escolha.includes(sacolas[1].fruta)){
        n2 = sacolas[1].preco
        } else {
            n2 = 0
        }
        if (escolha.includes(sacolas[2].fruta)){
            n3 = sacolas[2].preco
        } else {
            n3 = 0
        } 
        if (escolha.includes(sacolas[3].fruta)){
            n4 = sacolas[3].preco
        } else {
            n4 = 0
        }
        if (escolha.includes(sacolas[4].fruta)){
            n5 = sacolas[4].preco
        } else {
            n5 = 0
        }

        let calculoFrutas = n1+n2+n3+n4+n5
        return calculoFrutas
    }

    function calculoDoDinheiro (){
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
    let resultadoDoDinheiro = carteira.dinhero - numerosDinheiro()

    console.log(`Itens: ${proCarrinho()} 
    \nValor: ${numerosDinheiro()}R$
    \n${calculoDoDinheiro()}`)

}
porNoCarrinho()

