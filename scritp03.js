// Faça programa que obtenha notas
// Em seguida , calcula a média simples das notas
// Se a média for maior ou igual a 7 .impar "Aluno Aprovado"
// Senão , se a nota for maior ou a igual a 5, impar "aluno em Aprovado"
//Senão , impar "Aluno Reprovado"


// ENTRADA
const nota1 = Number(prompt ("Informe a primeiro nota"))



//PROCESSAMENTO
const media = (nota1 + nota2 + nota3 + nota4) / 4

let mensagem = ""

//se a media é maior ou igual a 7 ,aluo aprovado
//Senão , se a média for maior ou igual a 5, aluno em recuperação
// Senão , Aluno reprovado


if (media >= 7) {
    mensagem ="Aluno Aprovado - Média" + media 
}
else
if(média >=5){

    mensagem = "Aluno em Recuperação - Média" + media  
} else { 
    mensagem = "Alune Reprovado - Média" + media
}


document.body.appendChild(document.createTextNode(mensagem))