async function listaVideos() {
    const conexao = await fetch("localhost:3000/videos");
    const conexaoConvertida = await conexao.json();
    console.log(conexaoConvertida);
}

listaVideos();