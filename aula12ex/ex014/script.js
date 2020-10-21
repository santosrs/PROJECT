function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // bom dia !
        img.src = 'manha-2.png'
        document.body.style.background = '#fef5cc'
    } else if (hora >= 12 && hora < 18) {
        // boa tarde !
        img.src = 'tarde2.png'
        document.body.style.background = '#b7a692'
    } else {
        //boa noite !
        img.src = 'noite1.png'
        document.body.style.background = '#373a3f'
    }

}