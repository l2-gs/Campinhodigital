/*Escreva um programa que calcule a soma de todos os múltiplos de 3 e de 5 entre 1 e 1000.*/

//Variavel soma
let soma =0

//Loop
for(i=1;i<=1000;i++)
{
//condição para divisores de 3
    if(i%3==0)
    {
//acrescentando divisor de 3 a soma         
        soma=soma+i
    }
 //condição para divisores de 5
    else if(i%5==0)
    {
//acrescentando divisor de 5 a soma
        soma=soma+i
    }
    else
    {

    }
}
console.log(soma)