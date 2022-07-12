//Escreva um programa para ler o ano de nascimento de uma pessoa e escrever uma mensagem que diga se ela poderá ou não votar este ano(nãoé necessário considerar o mês em que ela nasceu).

//Importando o modulo
const readline = require('readline');
//Criando interface
const interface = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout,
    }
);

//Inserção dos dados
interface.question("ano de nascimento: ",(input)=>
{
//Condição
    if(2022-input >=16)
    {
        console.log("Você pode votar")
    }
        else 
        {
            console.log("Você não pode votar")
        }
        
//Fechar interface
        interface.close();    
});

