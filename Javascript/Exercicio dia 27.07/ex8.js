/* Faça um programa que receba uma palavra e diga-se há vogais ou não.
Utilize o método indexOf()*/


//Readline
const readline=require('readline')
const interface=readline.createInterface({input:process.stdin,output:process.stdout})

//Inserção de dados
interface.question("Digite a palavra:",(palavra)=>
{

//Condição para determinar se há vogais na palavra    
    if(palavra.indexOf("a")>=1||palavra.indexOf("e")>=1||palavra.indexOf("i")>=1||palavra.indexOf("o")>=1||palavra.indexOf("u")>=1)
    {
        
//Impressão do resultado          
        console.log("Há vogais nessa palavra")
    }
    else
    {

//Impressão do resultado        
        console.log("Não há vogais nessa palavra")
    }
    interface.close()
})