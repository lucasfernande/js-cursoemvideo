let btnContar = document.querySelector('#btnContar')
btnContar.addEventListener('click', contar)

function contar() {
    let i = document.querySelector('#i').value
    let f = document.querySelector('#f').value
    let p = document.querySelector('#p').value

    if (i.length == 0 || f.length == 0) {
        res.innerHTML = 'Impossível contar!'
    } else {
        i = Number(i)
        f = Number(f)
        if (p.length == 0 || p <= 0) {
            alert('Vamos considerar o passo sendo 1!')
            p = 1
        }
        p = Number(p)
        let res = document.querySelector('#res')
        res.innerHTML = '<p>Contando:</p>'

        if (i < f) {
            for (var c = i; c <= f; c += p) {
                res.innerHTML += `${c} &#x1F449 `
            }
        } else {
            for (var c = i; c >= f; c -= p) {
                res.innerHTML += `${c} &#x1F449 `
            }
        }
        res.innerHTML += 'Fim!'
    }
}