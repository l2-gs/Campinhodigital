/*Faça um programa que receba uma palavra e verifica se a palavra está cometendo o seguinte erro de português.
Antes de "p" ou "b" devemos usar M. Caso a palavra esteja errada informar o erro, se não dizer que a a palavra está certa.
Utilize o método includes()*/


//Readline
const readline=require('readline')
const interface=readline.createInterface({input:process.stdin,output:process.stdout})


//Inserção de dados
interface.question("Digite a palavra:",(palavra)=>
{

//Condição para determinar se a palavra está escrita de forma correta    
    if(palavra.includes("np")|| palavra.includes("nb"))
    {

//Impressão do resulado        
        console.log("Palavra escrita de forma incorreta")
    }
    else
    {

//impressão do resultado        
        console.log("Palavra escrita de forma correta")
    }
    interface.close()
})