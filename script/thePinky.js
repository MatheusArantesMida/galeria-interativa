document.getElementsByTagName('div')[0].focus();
const listaImagens = document.querySelectorAll(".miniatura");
const modal = document.getElementById("modal");
const btnFechar = document.getElementById("fechar");
const btnAnterior = document.getElementById("anterior");
const imagemModal = document.getElementById("imagemModal");
const contadorImagem = document.getElementById("contador");
const nomeImagem = document.getElementById("nomeImagem");
const btnProximo = document.getElementById("proximo");
const tituloDescricao = document.getElementById("tituloDescricao");
const textoDescricao = document.getElementById("textoDescricao");

let indiceAtual = 0;

function mostrarImagem(indice){

    if (indice < 0 ){
        indice = listaImagens.length - 1;
    }

    if (indice >= listaImagens.length){
        indice = 0;
    }

    indiceAtual = indice;
    const imagem = listaImagens[indice]
    imagemModal.src = imagem.src;
    imagemModal.alt = imagem.alt;
    nomeImagem.textContent = imagem.alt;
    tituloDescricao.textContent = descricoes[indice].titulo;
    textoDescricao.textContent = descricoes[indice].texto;
    contadorImagem.textContent = `${indiceAtual+1}   de ${listaImagens.length}`;
}

function abrirModal(indice){
    modal.classList.add("ativo");
    mostrarImagem(indice);
}

listaImagens.forEach(function(imagem, indice){
    imagem.addEventListener("click", () =>{
        abrirModal(indice);
    })
})

btnFechar.addEventListener("click", ()=>{
    modal.classList.remove("ativo");
})

btnProximo.addEventListener("click", ()=>{
    mostrarImagem(indiceAtual+1);
})

btnAnterior.addEventListener("click", ()=>{
    mostrarImagem(indiceAtual-1);
})

modal.addEventListener("click", (evento) => {
    if (evento.target === modal){
        modal.classList.remove("ativo");
    }
})

const descricoes = [
    {
        titulo: "Blade of the House of Spiders Ryōshū",
        texto: "I will take you to hell. If that's what it takes to burn and cut through the Nursefathers… Then yes, I will gladly become a bottomless pit for you to cast down every ugly secret you would rather forget and never see surfaced again. So come. There in its depths… await all of me from every path, waiting with our blades drawn to cut down all of you."
    },
    {
        titulo: "The House of Spiders: The Pinky Apprentice Sinclair",
        texto: "This lowly self of mine is yet to deserve the name of a Star. Until such a time arrives that I might inherit the title, I shall continue to be of service to my master and hone myself without end."
    }
];

document.addEventListener("keydown", (evento) => {
    if (evento.key === "Escape"){
        modal.classList.remove("ativo");
    }
        if(evento.key === "ArrowLeft"){
        mostrarImagem(indiceAtual-1);
    }
        if(evento.key === "ArrowRight"){
        mostrarImagem(indiceAtual+1);
    }
})