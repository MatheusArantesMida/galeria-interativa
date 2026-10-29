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
        titulo: "The House of Spiders: The Middle Nursefather Outis",
        texto: "Kiddo, remember what Mama told you? You ever find anything you don't like, you can talk to me about it!"
    },
    {
        titulo: "The House of Spiders: The Middle Apprentice Ishmael",
        texto: "*sigh* C'mon, Mama! I thought I asked you to knock before barging into my room! I mean, it's not like I hate you coming in or anything, just… I was just flipping through some Fixers Monthly pages. … Wanna come read with me and see who our next kill's gonna be, if you're not busy?"
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