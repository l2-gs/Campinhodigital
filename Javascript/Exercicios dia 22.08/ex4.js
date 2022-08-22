//const { stdin, stdout } = require('process')
//const readline = require('readline')

function letras(palavra)
{
let vogais = 0
let consoante = 0
//const interface = readline.createInterface({input:stdin,output:stdout})  
//interface.question("Digite a palavra: ",(palavra)=>
{
    
    for (i=0;i<palavra.length;i++)
    {
        if(palavra[i]=="a"||palavra[i]=="e"||palavra[i]=="i"||palavra[i]=="o"||palavra[i]=="u")
        {
        ++vogais
        }
        else
        {
        ++consoante
        }
    }
    console.log(`O números de vogais é ${vogais} e o número de consoantes é ${consoante}`)
    
}
}
letras('matheus')