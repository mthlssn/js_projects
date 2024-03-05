const screen = document.getElementById('screen');
const context = screen.getContext('2d');

const tamanhox = 1920;

const tamanhoy = 1080;

const width = 1;
const height = 1;

var a = 0;

function gerar(){
  
  var tamanho_quadrado = 100;

  // context.fillStyle = "#000"

  context.clearRect(0 , 0, tamanhox, tamanhoy);

  context.fillStyle = "#000";
  context.fillRect( 0, 0, tamanhox, tamanhoy);

  for (let i = 0; i < 10; i++) {

    // tamanho aleatorio dos continentes
    let ranC_width = Math.floor(Math.random() * ((tamanhox / 3) * 2.5 - (tamanhox / 6)) + tamanhox / 6);
    let ranC_height = Math.floor(Math.random() * ((tamanhoy / 3) * 2.5 - (tamanhox / 6)) + tamanhox / 6);

    // posição aleatória dos continentes
    let ranC_posX = somaRan(20, tamanhox - ranC_width, "separar");
    let ranC_posY = somaRan(20, tamanhoy - ranC_height, "separar");

    for (let i = 0; i < 250; i++) {

      // tamanho aleatorio das partes do continente
      let ran_tamanho = somaRan(2, tamanho_quadrado, "juntar");

      // posição aleatória das partes do continente
      let positionX = somaRan(6, ranC_width - ran_tamanho, "juntar") + ranC_posX;  
      let positionY = somaRan(6, ranC_height - ran_tamanho, "juntar") + ranC_posY; 

      // parte do continente
      context.fillStyle = "#fff";
      context.fillRect( positionX, positionY, ran_tamanho, ran_tamanho);
    }
  }
}

// soma número aleatório para juntar ou separar
function somaRan (vezes, num, tipo) {
  let temp = 0;
  for (let i = 0; i < vezes; i++) {
    switch (tipo){
      case "juntar":
        temp = Math.floor(Math.random() * num/vezes) + temp; 
        break;
      case "separar":
        temp = Math.floor(Math.random() * num/vezes) + temp;

        if (i+1 == vezes) {
          temp = num/2 - temp;
          if (temp <= 0) {
            temp = num - Math.abs(temp);
          }
        }
        break;
    }
  }
  return temp;
}

// download do canvas em png
function download() {

  const canvas = document.getElementById('screen');

  const imgData = canvas.toDataURL("img");

  const link = document.createElement("a");
  link.href = imgData;
  link.download = "image.png";
  link.click();

}