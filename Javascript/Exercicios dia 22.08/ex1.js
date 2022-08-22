
function igual(num1,num2)
{

        if (num1>num2)
        {
            let maior = num1
            let menor = num2
            console.log(`o número ${maior} é maior que ${menor}`)
            return `o número ${maior} é maior que ${menor}`
            
        }
        else if (num2>num1)
        {
            let maior = num2
            let menor = num1
            console.log(`o número ${maior} é maior que ${menor}`)
            return `o número ${maior} é maior que ${menor}`
        }
        else 
        {
            console.log("os números são iguais")
            return "Os números são iguais"
        }    
    }
igual(2,5)