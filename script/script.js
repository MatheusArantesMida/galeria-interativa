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
        titulo: "The House of Spiders: The Index Nursefather Yi Sang",
        texto: "A life wherein one is granted not choices to make, but instead, choices made… *beep* Hah. Would that my darling daughter, too, could have felt the mirth that colors such a life."
    },
    {
        titulo: "The Index The Index Proxy - Effloresced E.G.O::Procuration Don Quixote",
        texto: "'Those whose eyes have met, and those whose eyes have not.' '72 minutes.' 'Kill.' 'Tis thou. Flee thee not, for the P-Prescript pointeth to thee."
    },
    {
        titulo: "The The House of Spiders: The Thumb Nursefather Rodion Nursefather",
        texto: "… I've already waited way past with what anyone oughta put up with. And right when I thought I was finally getting my ass outta this goddamn cold, what happens? My Ticket turns into blank scrap paper, all because of that mongrel brat! Ha… Haha… Gimme a fucking break."
    },
    {
        titulo: "The House of Spiders: The Middle Apprentice Ishmael",
        texto: "*sigh* C'mon, Mama! I thought I asked you to knock before barging into my room! I mean, it's not like I hate you coming in or anything, just… I was just flipping through some Fixers Monthly pages. … Wanna come read with me and see who our next kill's gonna be, if you're not busy?"
    },
    {
        titulo: "The House of Spiders: The Middle Nursefather Outis",
        texto: "Kiddo, remember what Mama told you? You ever find anything you don't like, you can talk to me about it!"
    },
    {
        titulo: "The House of Spiders: The Ring Apprentice Faust",
        texto: "Have you woken up, Fascia? Faust has been waiting—there is a new friend Faust wants to introduce to Fascia.How is it? Such a splendid piece of corpus our new friend has, yes?"
    },
    {
        titulo: "The House of Spiders: The Ring Nursefather Hong Lu",
        texto: "Let us explore together—the pulsations of your remaining life."
    },
    {
        titulo: "The House of Spiders: The Thumb Apprentice Heathcliff",
        texto: "… But she took me in and put a roof over my head. Fed me. Taught me this… bloody incredible swordfighting style—the sort a lowly vagrant like me would never have had the chance to learn. I know that. Shite, I know that, but… is this how the rest of my life's gonna go?"
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