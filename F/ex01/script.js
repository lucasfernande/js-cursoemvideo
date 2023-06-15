function adicionar() {
    let n = document.querySelector('#n').value

    if (n.length == 0) {
        alert('ERRO: preencha o campo número!')
    } else if (Number(n) < 1 || Number(n) > 100) {
        alert('ERRO: digite um número entre 1 e 100')
    } else if (numeros.indexOf(Number(n)) != -1) {
        alert(`ERRO: o valor ${n} já foi cadastrado!`)
    } else {
        n = Number(n)
        numeros.push(n)

        let res = document.querySelector('#res')
        res.innerHTML = ''
        
        let nums = document.querySelector('#nums')
        
        option = document.createElement('option')
        option.text = `O valor ${n} foi cadastrado`
        nums.appendChild(option)
    }
}

function finalizar() {
    if (numeros.length == 0) {
        alert('Nenhum número foi adicionado!')
    } else {
        numeros.sort((a, b) => {
            return a - b
        })
        let qtd = numeros.length
        let menor = numeros[0]
        let maior = numeros[qtd - 1]

        let soma = 0
        for (var c = 0; c < qtd; c++) {
            soma += numeros[c]
        }
        let media = soma / qtd

        let res = document.querySelector('#res')
        res.innerHTML += `<p>Foram cadastrados ${qtd} números</p>`
        res.innerHTML += `<p>O maior valor cadastrado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor cadastrado foi ${menor}</p>`
        res.innerHTML += `<p>A soma dos valores foi ${soma}</p>`
        res.innerHTML += `<p>A média do valores foi ${media}</p>`
    }
}

let numeros = []

let btnAdicionar = document.querySelector('#btnAdicionar')
btnAdicionar.addEventListener('click', adicionar)

let btnFinalizar = document.querySelector('#btnFinalizar')
btnFinalizar.addEventListener('click', finalizar)


