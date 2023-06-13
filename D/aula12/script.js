/* 
var idade = 60

if (idade < 16) {
    console.log('Não vota');
} else if (idade < 18 || idade > 65) {
    console.log('Voto facultativo');
} else {
    console.log('Voto obrigatório');
}
*/

/*
var hora = new Date()
hora = hora.getHours()

if (hora < 12) {
    console.log('Bom dia')
} else if (hora < 18) {
    console.log('Boa tarde')
} else {
    console.log('Boa noite')
}
*/

var dia = new Date()
dia = dia.getDay()

switch (dia) {
    case 0:
        console.log('Domingo');
        break
    case 1:
        console.log('Segunda');
        break
    case 2:
        console.log('Terça');
        break
    case 3:
        console.log('Quarta');
        break
    case 4:
        console.log('Quinta');
        break
    case 5:
        console.log('Sexta');
        break
    case 6:
        console.log('Sábado');
        break
    default:
        console.log('Erro');
        break
}
