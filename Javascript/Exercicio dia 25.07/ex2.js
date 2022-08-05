/*Faça um programa que leia dois números, o primeiro é o valor inicial de um contador, e o segundo é o valor final do contador(verifique se o valor inicial fornecido é inferior ao valor final). Usando o comando FOR, escreva na tela uma contagem que comece no primeiro número lido, escreva os números seguintes colocando apenas um número em cada linha da tela até chegar ao valor final indicado.
Entre com o Valor Inicial:11
Entre com o Valor Final:13
Contagem:
11
12
13
Final da contagem*/

//Readline
const readline=require('readline')
const interface=readline.createInterface({input:process.stdin,output:process.stdout})

//Variaveis
let menor=0
let maior=0

//Inserção de dados
interface.question("Digite o primeiro valor: ",(num1)=>
{
    interface.question("digite o segundo valor: ",(num2)=>
    {
        
//Condições para determinar qual é o inicio e fim do contador        
        if(num1>num2)
        {
            maior=num1
            menor=num2
        }
        else
        {
            maior=num2
            menor=num1
        }

        console.log(`Contagem:`)
//loop do contador        
        for(i=menor;menor<=maior;menor++)
        {
            
//Impressão do loop           
            console.log(menor)

        }

        console.log(`Final da contagem`)
        
        interface.close()
    })
})