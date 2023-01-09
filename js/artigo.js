function busca(pasta, arquivo) {
    const myRequest = new XMLHttpRequest();
    myRequest.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200)
            populaArtigo(myRequest.responseText);
    };
    myRequest.open('GET', `./json/${pasta}/${arquivo}.json`, true);
    myRequest.send();
}

function populaArtigo(response) {
    const object = JSON.parse(response);
    const article = document.getElementById('article');

    article.getElementsByClassName('titulo')[0].innerHTML = object.nome;
    article.getElementsByClassName('subtitulo')[0].innerHTML = object.subtitulo;
    article.getElementsByClassName('descricao1')[0].innerHTML = object.descricao1;    
}