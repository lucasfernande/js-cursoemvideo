let verif = document.querySelector('input[value=Verificar]')
verif.addEventListener('click', verificar)

function verificar() {
    var data = new Date()
    anoAtual = data.getFullYear()

    var ano = document.querySelector('#ano').value
    
    if (ano.length == 0 || ano > anoAtual) {
        alert('Erro: dados inválidos!')
    } else {
        var idade = anoAtual - ano
        if (idade <= 25) {
            var faixa = 'j' // jovem
        } else if (idade <= 55) {
            var faixa = 'a' // adulto
        } else {
            var faixa = 'i' // idoso
        }

        var sexo = document.getElementsByName('sexo')
        var res = document.querySelector('#res')
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (sexo[0].checked) {
            sexo = 'Homem'
        } else if (sexo[1].checked) {
            sexo = 'Mulher'
        }
        res.innerHTML = `<p>${sexo} com ${idade} anos</p>`
        img.setAttribute('src', `assets/img/${sexo}-${faixa}.jpg`)
        res.appendChild(img)
    }
}
