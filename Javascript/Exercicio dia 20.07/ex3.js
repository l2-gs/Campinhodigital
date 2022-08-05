/* Escreva um programa javascript para escrever o seguinte padrão na tela, com N linhas:
*
**
***
****
*****
Onde N é um número maior que zero determinado pelo usuário(no exemplo N=5).
*/

const readline=require('readline')
const interface= readline.createInterface({input:process.stdin,output:process.stdout})

//Variavel texto
text = ""
//Inserção da quantidade de linhas
interface.question("Determine o N:",(n)=>
{
//Loop
    for(i=0;i<n;i++)
    {
//Acrescimento do texto        
        text+="*"
        console.log(text)
    }
//Fechando Interface    
    interface.close()
})