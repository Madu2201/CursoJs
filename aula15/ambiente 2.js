let valores = [8, 1, 7, 4, 2, 9];
//console.log(valores) // Forma padrão de exibir o array

/*for (let posição = 0; posição < valores.length; posição++) {
    console.log(`A posição ${posição} tem o valor ${valores[posição]}`);
} // Forma de exibir o array com laço de repetição */

for (let posição in valores) {
    console.log(`A posição ${posição} tem o valor ${valores[posição]}`);
} // Forma de exibir o array com laço de repetição simplificado