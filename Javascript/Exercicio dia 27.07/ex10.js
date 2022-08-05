/*Faça um algoritmo que receba um texto e imprima ele em letras maiúsculas.
Utilize o método toUpperCase()*/


//Readline
const readline=require('readline')
const interface = readline.createInterface({input:process.stdin,output:process.stdout})

//Variavel
let palavrafinal=""

//Inserção de dados
interface.question("Insira a palavra: ",(palavra)=>
{
    
//Loop pela palavra    
    for(i=0;i<palavra.length;i++)
    {

//Mudando as letras para maiuscula         
        palavrafinal+= palavra.charAt(i).toUpperCase()
    }

//Impressão do resultado
    console.log(palavrafinal)

    interface.close()
    console.log
})
