

function gerar(){

    const screen = document.getElementById('screen')
    const context = screen.getContext('2d')

    const tamanhox = 1920
    const taRanX = 640

    const tamanhoy = 1080
    const taRanY = 360

    const width = 1
    const height = 1

    var tamanho_quadrado = 100

    var color = ''
    var positionX = 0
    var positionY = 0

    var array = []
    var array2 = []

    // context.fillStyle = "#000"

    context.clearRect(0,0,tamanhox,tamanhoy);

    context.fillStyle = "rgba(0, 0, 0, 0)"
    context.fillRect( 0, 0, tamanhox, tamanhoy)

    for (let i = 0; i < 100; i++) {
        let ran_tamanho = Math.floor(Math.random() * tamanho_quadrado) + Math.floor(Math.random() * tamanho_quadrado);3

        positionX =  Math.floor(Math.random() * taRanX) + Math.floor(Math.random() * taRanX) + Math.floor(Math.random() * taRanX);
        positionY =  Math.floor(Math.random() * taRanY) + Math.floor(Math.random() * taRanY) + Math.floor(Math.random() * taRanY);

        positionX = positionX - Math.floor(ran_tamanho/2)
        positionY = positionY - Math.floor(ran_tamanho/2)

        context.fillStyle = "#fff"
        context.fillRect( positionX, positionY, ran_tamanho, ran_tamanho)

        console.log(positionX, positionY, ran_tamanho);
    }
}

function download() {

  const canvas = document.getElementById('screen')

  const imgData = canvas.toDataURL("img");

  const link = document.createElement("a");
  link.href = imgData;
  link.download = "image.png";
  link.click();

}