//Escreva um programa para ler 3 valores inteiros (considere que não serão lidos valores iguais) e escreve-los em ordem crescente.

//Importando o modulo
const readline = require('readline');

//Criando a interface
const interface = readline.createInterface({input:process.stdin,output:process.stdout});

//Váriavel de ordem
const crescente = []

//Inserção de dados
interface.question("Digite o primeiro número: ",(num1)=>
{
//Inserção de dados   
    interface.question("Digite o segundo número: ",(num2)=>
    {               
//Inserção de dados 
        interface.question("Digite o terceiro número: ",(num3)=>
        {                                                                                                   
//Adicionando valor para a váriavel de ordem 
            crescente.push(num1)
            crescente.push(num2)
            crescente.push(num3)
//Ordenando os valores                
            crescente.sort()    
            
            console.log(crescente)
//Fechar interface                
            interface.close()
        })
     })
})

