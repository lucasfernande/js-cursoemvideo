var btnCalcular = document.querySelector('#btnCalcular')

btnCalcular.onclick = () => {
    var tab = document.querySelector('#tab')
    tab.innerHTML = ''

    var n = document.querySelector('#n').value
    if (n.length == 0) {
        alert('Digite um número!')
        tab.innerHTML = '<option>Digite um número acima!</option>'
    } else {
        n = Number(n)
        for (var c = 1; c <= 10; c++) {
            var item = document.createElement('option')
            item.innerText = `${n} x ${c} = ${n * c}`
            tab.appendChild(item)
        }
    }
}