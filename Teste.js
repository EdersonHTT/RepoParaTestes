let carteira = {
    identidade: {
        nome: prompt("Seu nome completo:"),
        idade: Number(prompt("Sua Idade?"))
    },

    dinhero: Number(prompt("Quanto você tem na carteira?")),
}

console.log(`Carteira: \nIdentidade: ${carteira.identidade.nome}
Idade: ${carteira.identidade.idade} \nDinheiro: ${carteira.dinhero}`)

function sacolasPraCompra (){
      
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
let sacolas = sacolasPraCompra()

sacolas[0].disponibilidade = true
sacolas[1].disponibilidade = true
sacolas[2].disponibilidade = false
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

function paraEscolher (){
    let praPergunta = []

    if (sacolas[0].disponibilidade === true){
        praPergunta.push(" maça")
    }
    if (sacolas[1].disponibilidade === true){
        praPergunta.push(" uva")
    }
    if (sacolas[2].disponibilidade === true){
        praPergunta.push(" laranja")
    }
    if (sacolas[3].disponibilidade === true){
        praPergunta.push(" pera")
    }
    if (sacolas[4].disponibilidade === true){
        praPergunta.push(" limão")
    }
    return praPergunta
}

    let escolha = prompt(`Diga quais as frutas que você quer: ${paraEscolher()}`)

    let n1
    let n2
    let n3
    let n4
    let n5

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
    
    let praSacola = []

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

    let calculoFrutas = n1+n2+n3+n4+n5

    let resultadoDoDinheiro = carteira.dinhero - calculoFrutas

    console.log(`Itens: ${proCarrinho()}\n 
Valor: ${calculoFrutas}R$\n
${calculoDoDinheiro()}`)
}
porNoCarrinho()