var operacao = ''

var num1 = ''
var num2 = ''
var res = 0

var float = false

var vez_num = 1

function tecla_precionada(tecla) 
{
    if (tecla == 'c')
    {
        num1 = ''
        num2 = ''
        res = 0

        float = false

        vez_num = 1

        mostrar('')
    }
    else if ( typeof tecla == "number" || tecla == '.')
    {
        var temp

        switch (vez_num)
        {
            case 1:
                temp = num1

                break;

            case 2:
                if (operacao == '')
                {
                    vez_num = 1
                    temp = ''
                } else
                    temp = num2

                break;
        }
        
        if (tecla == '.') 
        {
            if (temp.length == 0)
            {
                temp = '0.'
                float = true
                
            } else if (temp.length <= 8 && float == false)
            {
                temp = temp + tecla
                float = true
            }
            } else 
            {
                if (float && temp.length <= 9) 
                    temp = temp + tecla
                else if ( !float && temp.length <= 8)
                    temp = temp + tecla
            }
        
        switch (vez_num)
        {
            case 1:
                num1 = temp
                break;
    
            case 2:
                num2 = temp
                break;
        }

        mostrar(temp)

    } else 
    {
        vez_num = 2
        float = false

        if (tecla == '=')
        {
            realizar_conta(operacao)
            operacao = ''
        }
        else if (operacao != '')
        {
            realizar_conta(operacao)
            operacao = tecla
        }
        else
            operacao = tecla
    }
}

function realizar_conta(ope) 
{
    num1 = parseFloat(num1)
    num2 = parseFloat(num2)

    switch (ope){
        case '+':
            res = num1 + num2;
            break;

        case '-':
            res = num1 - num2;
            break;

        case '*':
            res = num1 * num2;
            break;

        case '/':
            res = num1 / num2;
            break;
    }

    if ( res > 999999999.0 )
        res = 'error'
    else
        res = res.toFixed(2) 

    mostrar(res)

    num1 = '' + res
    num2 = ''
    

}

function mostrar(variavel) {
    document.getElementById("num_visor").innerHTML = variavel;
}