let nums = [5, 1, 2, 8, 3]

nums.push(15) // adiciona um valor no final da lista
console.log(nums);
console.log(nums.length); // retorna quantos elementos tem na lista

nums.sort((a, b) => { // ordena a lista em ordem crescente
    return a - b
})

/*
console.log('Iterando a lista:');
for (let i in nums) {
    console.log(nums[i]); // pegando os valores da lista um de cada vez
}
*/

pesq = nums.indexOf(7) // busca um valor na lista (retorna -1 se não encontrar)
if (pesq != -1) {
    console.log(`O valor ${nums[pesq]} existe na lista e está na posição ${pesq}`);
} else {
    console.log('Esse valor não existe na lista');
}