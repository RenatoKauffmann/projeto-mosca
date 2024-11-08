let body = document.querySelector("body")
let clicou = false
let score = 0
let vidas = 3
let img = document.createElement("img")
img.src = "./mosca.png"
img.style.position = "absolute"
img.style.width="250px"
img.style.height="250px"

function alteraTamanhoMosca(){
   let numeroAleatorio = Math.random() * (0.6 - 0.2) + 0.2
   img.style.transform = `scale(${numeroAleatorio})`
}

function geraPosicao(){
    let y = Math.random() * (window.innerHeight  * 0.6)
    let x = Math.random() * (window.innerWidth * 0.6)

    img.style.top = `${y}px`
    img.style.left = `${x}px`
}

img.addEventListener("click",function(){
  clicou = true
  img.remove()
})

setInterval(function(){
    alteraTamanhoMosca()
    geraPosicao()

    body.appendChild(img)

    if(!clicou){
        vidas--
 
     if(vidas == 2){
            let gorro3 = document.getElementById("gorro-3")
            gorro3.src = "gorrovazio.png"
        }
        if(vidas == 1){
            let gorro2 = document.getElementById("gorro-2")
            gorro2.src = "gorrovazio.png"
        }
        if(vidas == 0){
            let gorro1 = document.getElementById("gorro-1")
            gorro1.src = "gorrovazio.png"
       
            alert("Game Over")
       }
    }

    console.log(vidas)
}, 2000)


