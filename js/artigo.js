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
    article.innerHTML = '';

    object.textos.forEach((texto, i) => {
        let tag = document.createElement(texto.tag);
        tag.classList.add(`${texto.className}${i}`);

        let content = document.createTextNode(texto.descricao);
        tag.appendChild(content);

        article.appendChild(tag);
    });
}