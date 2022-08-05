/* Faça um programa que receba uma palavra e verifica se ela termina com "al" se termina com "al" então imprime a palavra se não imprime "palavra não identificada".
Utilize o método endsWith().*/


//Readline
const readline=require('readline')
const interface=readline.createInterface({input:process.stdin,output:process.stdout})

//Inserção de dados
interface.question("Digite a palavra:",(palavra)=>
{

//Condição para determinar palavras que terminam com "al"    
    if(palavra.endsWith("al"))
    {

//impressão do resultado        
        console.log(palavra)
    }
    else
    {

//Impressão do resultado      
        console.log("palavra não identificada")
    }
    interface.close()
})