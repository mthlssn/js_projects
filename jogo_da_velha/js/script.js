const jogo_tag = [];

const pecasX_tag = [];
const pecasO_tag = [];

const todasPecasX_tag = document.getElementsByClassName('pecasX');
const todasPecasO_tag = document.getElementsByClassName('pecasO');

const posiVencedoras = [
    "000102",
    "101112",
    "202122",
    "001020",
    "011121",
    "021222", 
    "001122",
    "201102",
]

var jogoT = [];
var jogoP = [];

var pecasX = [];
var pecasO = [];

var vez_jogador;

var pecaSelecionada;
var pecaDescelecionada;

var gameOver;
var vencedor;

for (let i = 0; i < 3; i++) {
    let linha = [];

    for (let j = 0; j < 3; j++){
        linha.push(document.getElementById('l'+i+j))
    }

    jogo_tag.push(linha);
}

for (let i = 0; i < 6; i++) {
    pecasX_tag.push(document.getElementById('x'+i));
    pecasO_tag.push(document.getElementById('o'+i));
}

function start() {

    jogoT = [[0,0,0], [0,0,0], [0,0,0]];
    jogoP = [["","",""],["","",""],["","",""]];

    pecasX = [3, 3, 2, 2, 1, 1];
    pecasO = [3, 3, 2, 2, 1, 1];

    vez_jogador = "x";

    pecaSelecionada = null;
    pecaDescelecionada = null;

    gameOver = false;
    vencedor = null;

    redenrizar()
}

function redenrizar() {
    let x = `<i class="bi bi-x-lg"></i>`;
    let o = `<i class="bi bi-circle"></i>`;

    let border_on;
    let border_off;

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++){

            switch (jogoT[i][j]){
                case 3:
                    jogo_tag[i][j].style.fontSize = "30px";
                    break;
                case 2:
                    jogo_tag[i][j].style.fontSize = "20px";
                    break;
                case 1:
                    jogo_tag[i][j].style.fontSize = "10px";
                    break;
            }

            switch (jogoP[i][j]){
                case "x":
                    jogo_tag[i][j].innerHTML = x;
                    break;
                case "o":
                    jogo_tag[i][j].innerHTML = o;
                    break;
                case "":
                    jogo_tag[i][j].innerHTML = "";
            }
        }
    }

    for (let i = 0; i < 6; i++) { 

        switch (pecasX[i]){
            case 3:
                pecasX_tag[i].innerHTML = x;
                pecasX_tag[i].style.fontSize = "30px";
                break;
            case 2:
                pecasX_tag[i].innerHTML = x;
                pecasX_tag[i].style.fontSize = "20px";
                break;
            case 1:
                pecasX_tag[i].innerHTML = x;
                pecasX_tag[i].style.fontSize = "10px";
                break;
            case 0:
                pecasX_tag[i].innerHTML = "";
                break;
        }

        switch (pecasO[i]){
            case 3:
                pecasO_tag[i].innerHTML = o;
                pecasO_tag[i].style.fontSize = "30px";
                break;
            case 2:
                pecasO_tag[i].innerHTML = o;
                pecasO_tag[i].style.fontSize = "20px";
                break;
            case 1:
                pecasO_tag[i].innerHTML = o;
                pecasO_tag[i].style.fontSize = "10px";
                break;
            case 0:
                pecasO_tag[i].innerHTML = "";
                break;
        }
    }

    switch (vez_jogador){
        case "x":
            border_on = todasPecasX_tag[0];
            border_off = todasPecasO_tag[0];
            break;
        case "o":
            border_on = todasPecasO_tag[0];
            border_off = todasPecasX_tag[0];
            break;
        case "":
            todasPecasX_tag[0].style.border = "2px solid black";
            todasPecasO_tag[0].style.border = "2px solid black";
            break;
    }

    if (vez_jogador != "") {
        border_on.style.border = "2px solid white";
        border_off.style.border = "2px solid black";
    }

    if (pecaSelecionada) {
        let temp1;
        switch (pecaSelecionada[0]){
            case "x":
                temp1 = pecasX_tag[parseInt(pecaSelecionada[1])];
                break;
            case "o":
                temp1 = pecasO_tag[parseInt(pecaSelecionada[1])];
                break;
        }

        temp1.style.backgroundColor = "white";
        temp1.style.color = "black";

        if(pecaDescelecionada && pecaDescelecionada != pecaSelecionada) {
            let temp2;
            switch (pecaDescelecionada[0]){
                case "x":
                    temp2 = pecasX_tag[parseInt(pecaDescelecionada[1])];
                    break;
                case "o":
                    temp2 = pecasO_tag[parseInt(pecaDescelecionada[1])];
                    break;
            }

            temp2.style.backgroundColor = "black";
            temp2.style.color = "white";
        }
    } else {
        if(pecaDescelecionada) {
            let temp2;
            switch (pecaDescelecionada[0]){
                case "x":
                    temp2 = pecasX_tag[parseInt(pecaDescelecionada[1])];
                    break;
                case "o":
                    temp2 = pecasO_tag[parseInt(pecaDescelecionada[1])];
                    break;
            }

            temp2.style.backgroundColor = "black";
            temp2.style.color = "white";
        }
    }

    if (gameOver) {
        gameOver = false;
        if(vencedor) {
            for (let i = 0; i < 6; i = i + 2) {
                jogo_tag[vencedor[i]][vencedor[i+1]].classList.toggle('piscando');
            }

            setTimeout(() => {
                for (let i = 0; i < 6; i = i + 2) {
                    jogo_tag[vencedor[i]][vencedor[i+1]].classList.remove('piscando');
                }
                gameOver = true;
                },
            2250
            )
        } else {
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++){
                    jogo_tag[i][j].classList.toggle('piscando');
                }
            }

            setTimeout(() => {
                for (let i = 0; i < 3; i++) {
                    for (let j = 0; j < 3; j++){
                        jogo_tag[i][j].classList.remove('piscando');
                    }
                }
                gameOver = true;
                },
            2250
            )
        }
    }
}

function verificarMovimento(lugarSelecionado) {

    let temp;
    switch (pecaSelecionada[0]){
        case "x":
            temp = pecasX[pecaSelecionada[1]]
            break;
        case "o":
            temp = pecasO[pecaSelecionada[1]]
            break;
    }

    if (temp > jogoT[lugarSelecionado[1]][lugarSelecionado[2]]) {
        return true;
    } else {
        return false;
    }
}

function verificarResultado() {
    for (let i = 0; i < 8; i++) {
        let ganhador = [];

        for (let j = 0; j < 6; j = j + 2){

            if (jogoP[parseInt(posiVencedoras[i][0])][parseInt(posiVencedoras[i][1])] != "") {

                let temp1 = parseInt(posiVencedoras[i][j]);
                let temp2 = parseInt(posiVencedoras[i][j+1]);

                if (jogoP[temp1][temp2] == jogoP[parseInt(posiVencedoras[i][0])][parseInt(posiVencedoras[i][1])]) {
                    ganhador.push(true);
                } else {
                    ganhador.push(false);
                }
            }
        }

        if (ganhador[0] && ganhador[1] && ganhador[2]) {
            gameOver = true;
            vencedor = posiVencedoras[i];
            vez_jogador = "";

            return redenrizar();
        }
    }

    let temp;
    switch (vez_jogador){
        case "x":
            temp = pecasX;
            break;
        case "o":
            temp = pecasO;
            break;
    }

    let maiorPeca = 0;
    for (let i = 0; i < 6; i++) {
        if (maiorPeca < temp[i]) {
            maiorPeca = temp[i];
        }
    }

    let podeMover = false;

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++){
            if ( jogoT[i][j] < maiorPeca ) {
                podeMover = true;
            }
        }
    }

    if (!podeMover) {
        gameOver = true;
        vencedor = null;
        vez_jogador = "";

        return redenrizar();
    }
}

function clickLugar(id) {
    if (!jogoT[0] || gameOver){
        start()
    }

    if (pecaSelecionada && verificarMovimento(id)) {
        let temp;
        
        jogoP[id[1]][id[2]] = pecaSelecionada[0];
        jogoT[id[1]][id[2]] = temp;

        switch (pecaSelecionada[0]){
            case "x":
                temp = pecasX[pecaSelecionada[1]]
                pecasX[pecaSelecionada[1]] = 0
                break;
            case "o":
                temp = pecasO[pecaSelecionada[1]]
                pecasO[pecaSelecionada[1]] = 0
                break;
        }

        jogoT[id[1]][id[2]] = temp;

        switch (vez_jogador){
            case "x":
                vez_jogador = "o";
                break;
            case "o":
                vez_jogador = "x";
                break;
        }

        pecaDescelecionada = pecaSelecionada;
        pecaSelecionada = null;

        redenrizar()
        verificarResultado()
    }
}

function clickPecas(id) {
    if (id[0] === vez_jogador) {

        let temp = true;
        switch (vez_jogador){
            case "x":
                if (pecasX[id[1]] == 0) {temp = false;}
                break;
            case "o":
                if (pecasO[id[1]] == 0) {temp = false;}
                break;
        }

        if (temp) {
            pecaDescelecionada = pecaSelecionada;
            pecaSelecionada = id;

            redenrizar();
        }
    }
}