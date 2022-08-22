function letras(palavra)
{
let vogais = 0
let consoante = 0
let resposta = ""
//const interface = readline.createInterface({input:stdin,output:stdout})  
//interface.question("Digite a palavra: ",(palavra)=>
{
    
    for (i=0;i<palavra.length;i++)
    {
        if(palavra[i]=="a"||palavra[i]=="e"||palavra[i]=="i"||palavra[i]=="o"||palavra[i]=="u")
        {
        resposta = "possui vogal"
        }
        else
        {
        resposta = "não possui vogais"
        }
    }
}
console.log(resposta)
}
letras('banana')