//Faça um programa que receba um número do usuário e verifique se este número é par ou ímpar, escrevendo na tela "PAR" ou "IMPAR"

//Importando o modulo
const readline = require('readline');

//Criando a interface
const interface = readline.createInterface({input:process.stdin, output:process.stdout});

//Inserção dos dados
interface.question("Digite um número: ",(input)=>
{
//Condição 
    if (input%2==0)
    {
        console.log("O número",input,"é PAR")
    }
        else
        {
        console.log("O número",input,"é IMPAR")
        }

 //Fechar interface   
        interface.close();
}
)