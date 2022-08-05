/*Faça um algoritmo que receba uma entrada do usuário e caso encontre uma vogal transforme ela em maiuscula(obrigatorio usar FOR)
EX: abelha
O algoritmo imprime:
AbElhA*/

// Readline
const readline=require('readline')
const interface = readline.createInterface({input:process.stdin,output:process.stdout})

//Variavel para a entrada da palavra com as vogais maiusculas
let palavrafinal=""

//inserção da palavra
interface.question("Insira a palavra: ",(palavra)=>
{

//loop     
    for(i=0;i<palavra.length;i++)
    {

//condição para tornar vogais para maiusculas        
        if (palavra.charAt(i)== "a"|| palavra.charAt(i) == "e"|| palavra.charAt(i)== "i"|| palavra.charAt(i)== "o"||palavra.charAt(i)== "u")
        {
            
//Acrescentando as vogais em maiusculas para a variavel final            
            palavrafinal+= palavra.charAt(i).toUpperCase()
        }
        else

//Acrescentando as consoantes para a variavel final        
        palavrafinal+= palavra.charAt(i)
    }
    
//Imprimindo resultado
    console.log(`A palavra com as devidas modificações feitas é: ${palavrafinal}`)
    
    
    interface.close()
    
})
