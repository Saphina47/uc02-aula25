
crie um programo  , que leia dois valores muméricos
// do usuário e em seguida , calcule a sua soma
// em seguida, valide se o o resultado da soma 
// for maior que 5 , então escreva a mensagem " Passou do Limite"
// senão , escreva a mensagem dentro do limite

// ENTRADA
// 1- obter  um valor em guarda em um variável chamada valor1
// 2- obter um valor em guarda em um variável chamada valor1
const valor1 = Number(prompt ("primeiro valor"))
const valor2 =Number(prompt ("segunda valor"))
console .log(resultado)

// PROCESSAMENTO
// 3- soma os valores dois variáveis valor1 e valor2
console. soma = valor1 + valor2
// 4- e em guarda em uma variável chamada resultado
// 4- variável se o resultado da soma for maior que 5
// 5-e escreve mensagem  "passou limite".
// 6-senão 
let  mensagem = ""

if (resultado > 5) {
    mensagem = "passou do limit"
} else {
    mensagem = "dentro do limite"
}

const percentual =(valor1 * 0,10) / valor2

// se o percentual for maior ou igual a 10 
// então , mude a mensagem para percentual ok
// senão ,mude a mensagem para percentual alterado

if ((percentual  >10) && (percentual ==10)){}

    if (percentual >= 10) {
        mensagem ="percentual ok"
    }

{
    else
    mensagem= "percentual alterado"
}


// SAIDA
// 5 - Imprimir a mensagem  de acordo.
const divRoot = document. getElementById("root")
divRoot .appendChild(document. createTextNode (mensagem))
