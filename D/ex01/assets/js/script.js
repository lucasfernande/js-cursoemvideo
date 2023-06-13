let hora = new Date()
hora = hora.getHours()

let div = document.querySelector('#hora')
div.innerText = `Agora são ${hora} horas`

let img = document.querySelector('#container > img')

if (hora < 12) {
    hora = 'manha'
    document.body.style.background = '#e3c7b1'
} else if (hora < 18) {
    hora = 'tarde'
    document.body.style.background = '#fe8d45'
} else {
    hora = 'noite'
    document.body.style.background = '#183a6a'
}

img.src = `assets/img/${hora}.jpg`


