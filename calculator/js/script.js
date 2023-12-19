
var operacao = ''

var num1 = 0
var num2 = 0
var res = 0

var vez_num = 1

function tecla_precionada(tecla) {

    if ( typeof tecla == "number" ){
        switch (vez_num){
            case 1:
                var temp = (num1 * 10) + tecla

                if ( 999999999 >= temp)
                    num1 = temp

                mostrar(num1)

                break;

            case 2:
                var temp = (num2 * 10) + tecla

                if ( 999999999 >= temp)
                    num2 = temp

                mostrar(num2)

                break;
        }

    } else {
        vez_num = 2

        if (tecla == '=') 
            realizar_conta()
        else
            operacao = tecla

    }
}

function realizar_conta() {
    console.log("NUM 01:" + num1)
    console.log("NUM 02:" + num2)
    switch (operacao){
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

    console.log("RES: " + res);
    mostrar(res)

    operacao = ''

    vez_num = 1

}

function mostrar(variavel) {
    document.getElementById("num_visor").innerHTML = variavel;
}