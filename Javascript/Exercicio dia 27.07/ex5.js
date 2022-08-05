/*Faça um programa que receba um nome e imprima a terceira letra do nome.
Utilize o método charAt() para esta atividade.*/


//Readline
const readline=require('readline')
const interface=readline.createInterface({input:process.stdin,output:process.stdout})

//Inserção de dados
interface.question("Digite a palavra:",(palavra)=>
{

//Impressão da terceira letra do nome processado    
    console.log(`A terceira letra da palavra "${palavra}" é:`,palavra.charAt(2))
    interface.close()
})
