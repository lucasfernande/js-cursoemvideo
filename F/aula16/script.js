function parImp(n = 0) {
    return n % 2 == 0 ? 'Par' : 'Ímpar'
}

function soma(a = 0, b = 0) {
    return a + b
}

function fatorial(n) { // função recursiva
    if (n == 1) {
        return 1
    }
    return n * fatorial(n - 1)
}

console.log(parImp(8));
console.log(soma(4, 9));
console.log(fatorial(5));