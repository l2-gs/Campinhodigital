/* Faça um algoritmo que receba o nome de dois jogadores e após isso peça 5 números de 1 a 10 para cada jogador. Primeiro para o jogador A e depois para o jogador B. Após a escolha de cada jogador o algoritmo deve apresentar quais foram os números que apenas o jogador A e B colocou sem repetir nenhum número.
EX: Jogador A: 1,2,3,4,5
Jogador B: 1,2,3,8,7
Algoritmo imprime: 1,2,3,4,5,7,8*/


//Readline
const readline=require('readline')
const interface= readline.createInterface({input:process.stdin,output:process.stdout})

//Variaveis
let total=[]

//Inserção do nome do jogador A
interface.question('Nome do primeiro jogador:',(jogador1)=>
{

//Inserção do nome do Jogador B
    interface.question('Nome do segundo jogador:',(jogador2)=>
    {

//Inserção dos números do Jogador A        
            interface.question(`Numeros do ${jogador1}:`,(num1)=>
            {
                total.push(num1)
                interface.question(`Numeros do ${jogador1}:`,(num2)=>
            {
                total.push(num2)
                interface.question(`Numeros do ${jogador1}:`,(num3)=>
            {
                total.push(num3)
                interface.question(`Numeros do ${jogador1}:`,(num4)=>
            {
                total.push(num4)
                interface.question(`Numeros do ${jogador1}:`,(num5)=>
            {
                total.push(num5)
            
//Inserção dos números do Jogador B                
            interface.question(`numeros do ${jogador2}:`,(num6)=>
            {
                total.push(num6)
                interface.question(`numeros do ${jogador2}:`,(num7)=>
            {
                total.push(num7)
                interface.question(`numeros do ${jogador2}:`,(num8)=>
            {
                total.push(num8)
                interface.question(`numeros do ${jogador2}:`,(num9)=>
            {
                total.push(num9)
                interface.question(`numeros do ${jogador2}:`,(num10)=>
            {
                total.push(num10)


//Criando um novo array sem repetição de números
                let newtotal= [...new Set(total)]

//Impressão do resultado                
                console.log(`Os números iguais entre ${jogador1} e ${jogador2} são:`, newtotal)
                interface.close()
            })
        })
    })
})
})
})
})
})
})
})
})
})
         

    


            