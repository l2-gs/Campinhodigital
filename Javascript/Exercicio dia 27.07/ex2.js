/* Faça um algoritmo que receba o nome de dois jogadores e após isso peça 5 números de 1 a 10 para cada jogador. Primeiro para o jogador A e depois para o jogador B. Após a escolha de cada jogador o algoritmo deve apresentar quais os números que apenas o jogador A colocou diferente do jogador B.
EX: Jogador A: 1,2,3,4,5
Jogador B: 1,2,3,8,7
Algoritmo imprime: 4,5 */


//Readline
const readline=require('readline')
const interface= readline.createInterface({input:process.stdin,output:process.stdout})

//Variaveis
let first_array=[]
let second_array=[]
let diferentes=[]

//Inserção do nome do Jogador A
interface.question('Nome do primeiro jogador:',(jogador1)=>
{

//Inserção do nome do Jogador B       
    interface.question('Nome do segundo jogador:',(jogador2)=>
    {

//Inserção dos números do Jogador A                
            interface.question(`Numeros do ${jogador1}:`,(num1)=>
            {
                first_array.push(num1)
                interface.question(`Numeros do ${jogador1}:`,(num2)=>
            {
                first_array.push(num2)
                interface.question(`Numeros do ${jogador1}:`,(num3)=>
            {
                first_array.push(num3)
                interface.question(`Numeros do ${jogador1}:`,(num4)=>
            {
                first_array.push(num4)
                interface.question(`Numeros do ${jogador1}:`,(num5)=>
            {
               first_array.push(num5)
            

//Inserção dos números do Jogador B                
            interface.question(`numeros do ${jogador2}:`,(num6)=>
            {
                second_array.push(num6)
                interface.question(`numeros do ${jogador2}:`,(num7)=>
            {
                second_array.push(num7)
                interface.question(`numeros do ${jogador2}:`,(num8)=>
            {
                second_array.push(num8)
                interface.question(`numeros do ${jogador2}:`,(num9)=>
            {
                second_array.push(num9)
                interface.question(`numeros do ${jogador2}:`,(num10)=>
            {
                second_array.push(num10)


//Impressão dos números dos jogador A e B  
                console.log(`Os números de ${jogador1} são:`,first_array)
                console.log(`Os números de ${jogador2} são:`,second_array)

//Primeiro loop(Jogador A)
                for(i=0;i<first_array.length;i++)
                {

//Segundo loop(Jogador B)  
                    for(j=0;j<second_array.length;j++)
                    {

//Condição para os números do jogador A que são diferentes do jogador B                        
                        if(first_array[i] !== second_array[j] && i==j)
                        {
                            diferentes.push(first_array[i])
                        }
                    }
                }

//Impressão do resultado                
                console.log(`Os números do ${jogador1} que são diferentes dos números de ${jogador2} são:`, diferentes)
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
         

    


            