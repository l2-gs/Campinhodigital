/*Crie um programa que receba uma palavra e exiba quantas consoantes e vogais essas palavra tem:
EX: saúde
2 consoantes
3 vogais */


//Readline
const { Console } = require('console')
const readline=require('readline')
const interface = readline.createInterface({input:process.stdin,output:process.stdout})

//Variaveis
let palavrafinal=""
let consoante=0
let vogal=0

//Inserção de dados
interface.question("Insira a palavra: ",(palavra)=>
{

//loop da palavra    
    for(i=0;i<palavra.length;i++)
    {

//Condição para determinar números de vogais e consoantes na palavra        
        if (palavra.charAt(i)== "a"|| palavra.charAt(i) == "e"|| palavra.charAt(i)== "i"|| palavra.charAt(i)== "o"||palavra.charAt(i)== "u")
        {
        vogal++   
        }
        else
        {
            consoante++
        }    
    }

   //Impressão do resultado 
    console.log(`A palavra "${palavra}" tem ${vogal} vogais e ${consoante} consoantes.`)
    interface.close()

})