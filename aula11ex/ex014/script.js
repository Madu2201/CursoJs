/* Este código JavaScript altera a mensagem e a imagem com base na hora do dia.
A função carregar() é chamada quando a página é carregada*/

function carregar(){
    let msg = document.querySelector('#msg');
    let foto = document.querySelector('#imagem');
    let data = new Date(); // Obtem a data e hora atual
    let hora = data.getHours(); // Obtem a hora atual (0-23)

    msg.innerHTML = `Agora são ${hora} horas.`; // Exibe a hora atual

    // Verifica o período do dia e altera a mensagem e a imagem
    if (hora >= 0 && hora < 12) {
        msg.innerHTML += '<p>Bom dia!</p>';
        foto.src = 'imgmanha.jpg';
        document.body.style.background = '#ecd2a5ff';
    } else if (hora >= 12 && hora < 18) {
        msg.innerHTML += '<p>Boa tarde!</p>';
        foto.src = 'imgtarde.jpg';
        document.body.style.background = '#e77503b6';
    } else {
        msg.innerHTML += '<p>Boa noite!</p>';
        foto.src = 'imgnoite.jpg';
        document.body.style.background = '#01131Eff';
    }
}
