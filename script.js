/**
 * MODAl
 */

//Fechar modal
document.querySelector('.fa-solid.fa-circle-xmark').addEventListener('click', () => {
    document.querySelector('.mascaraModal').style.display = 'none'
})

/**
 * ALTERAR FONT-SIZE e MODO CINZA
 */

// Modo cinza
document.querySelector('.tornarCinza').addEventListener('click', () => {
    document.querySelector('body').classList.toggle('acessible-grey')
})
// Alterar fontSize
let tamanhoFontPadrao = 16
document.querySelector('.plusFont').addEventListener('click', () => {
    if (tamanhoFontPadrao < 22) {
        tamanhoFontPadrao += 2
        document.querySelector('body').style.fontSize = `${tamanhoFontPadrao}px`;
    }
})
document.querySelector('.lessFont').addEventListener('click', () => {
    if (tamanhoFontPadrao > 14) {
        tamanhoFontPadrao -= 2
        document.querySelector('body').style.fontSize = `${tamanhoFontPadrao}px`;
    }
})
setInterval(() => {
    if (tamanhoFontPadrao == 14) {
        document.querySelector('.lessFont').classList.add('desible')
    } else {
        document.querySelector('.lessFont').classList.remove('desible')
    }
}, 10)
setInterval(() => {
    if (tamanhoFontPadrao == 22) {
        document.querySelector('.plusFont').classList.add('desible')
    } else {
        document.querySelector('.plusFont').classList.remove('desible')
    }
}, 10)