let body = document.querySelector("body")
let tenis = document.querySelector(".img-tenis")
let corBotao = document.querySelector(".botao-carrinho")

function mudarVisual(cor, imagem){
    tenis.classList.add("troca-efeito")

   body.style.background = cor
   tenis.src = imagem

   setTimeout(() => {
        tenis.classList.remove("troca-efeito")

   }, 500); // 500 milisegundos = meio segundo

       corBotao.style.background = cor
}
