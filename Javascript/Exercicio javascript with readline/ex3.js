//Escreva um programa que verifique a validade de uma senha fornecida pelo usuário.
//A senha válida é o número 1234.
//Devem ser impressas as seguintes mensagens:
//-ACESSO PERMITIDO caso a senha seja válida
//-ACESSI NEGADO caso a senha seja inválida

//importando modulo
const readline = require('readline');

//Criando interface
const interface = readline.createInterface({input:process.stdin,output:process.stdout})

//Inserção de dados
interface.question("Digite a senha:",(input)=>
{
//Condição    
    if (input =="1234")
    {
        console.log("ACESSO PERMITIDO")
    }
        else
        {
        console.log("ACESSO NEGADO")
        }
//Fechar interface
    interface.close()
})

