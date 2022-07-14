//As maçãs custam R$0,30 cada se forem compradas menos do que 12, e R$0,25 se forem compradas 12 ou mais. Escreva um programa que leia o número de maçãs compradas, calcule e escreva o valor total da compra.

//importando o modulo
const readline = require('readline');

//Criando Ainterface
const interface = readline.createInterface({input:process.stdin,output:process.stdout});

//Iserção de dados
interface.question("Quantas maças foram compradas?",(input)=>
{

//Condição
    if (input<12)
        {
            resultado=input*0.30
            console.log("o valor total é:$",resultado)

        }
    
    else 
        {
            resultado=input*0.25
            
            console.log("O valor total é:$",resultado)

        }
//Fechar interface
    interface.close();

})