/*Faça um programa que receba uma frase e troque a palavra 'bosta' pro 'estrume'.
Utilize o método replace()*/


//Readline
const readline=require('readline')
const interface=readline.createInterface({input:process.stdin,output:process.stdout})

//Inserção de dados
interface.question("Digite a frase:",(frase)=>
{

//Troca de palavras na frase    
    let troca = frase.replace("bosta","estrume");
    
//Impressão da frase modificada
    console.log(troca)
    interface.close()
})