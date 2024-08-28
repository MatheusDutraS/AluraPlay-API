import { conectaApi } from "./conectaApi.js";
import construirCard from "./mostrarVideos.js";

async function buscaVideo(evento) {
    evento.preventDefault()

    const dadosDePesquisa = document.querySelector('[data-pesquisa]').value;
    const busca = await conectaApi.buscarVideo(dadosDePesquisa);

    const lista = document.querySelector('[data-lista]');

    // lista.innerHTML = ""
    while (lista.firstChild) {
        lista.removeChild(lista.firstChild)
    }

    console.log(busca)

    busca.forEach(e => lista.appendChild(
        construirCard(e.titulo, e.descricao, e.url, e.imagem)
    ))

    if (busca.length == 0) {
        lista.innerHTML = `<h2 class="mensagem__titulo">Não existem vídeos com esse termo</h2>`
    }
}

const btnPesquisa = document.querySelector('[data-btn-pesquisa]')

btnPesquisa.addEventListener('click', (evento) => buscaVideo(evento))