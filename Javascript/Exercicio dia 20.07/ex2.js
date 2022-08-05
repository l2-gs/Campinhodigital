/*Escreva um programa que passe por todos os números de 1 a 50 e para cada um deles imprima na tela se o número é par ou ímpar. Caso o número também seja primo, o programa deve dizer que ele é primo.(um número primo é um número que só é divisível por ele mesmo e por 1).
Dica: Neste exercicio você pode precisar da ajuda do operador MÓDULO(%). Você também pode criar mais de um loop.
EX:
1 ÍMPAR PRIMO
2 PAR PRIMO
3 ÍMPAR PRIMO
4 PAR
5 ÍMPAR PRIMO
6 PAR
7 ÍMPAR PRIMO
8 PAR
9 ÍMPAR
10 PAR */

//Primeiro loop
for (let i = 1; i <= 50; i++)
 {
    let flag = 0;
//Segundo loop
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }

    }
//Condição para par primo
    if (flag ==0 && i%2==0)
    {
        console.log(i,"PAR PRIMO")
    }
//Condição para impar primo
    else if (flag==0 && i%2!=0)
    {
        console.log(i,"IMPAR PRIMO")
    }
//Condição para par 
    else if (flag==1 && i%2==0)
    {
        console.log(i,"PAR")
    }
//Condição para primo
    else
    {
        console.log(i,"IMPAR")
    }
}