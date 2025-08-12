//Definindo uma função com parâmetros padrão caso não sejam passados argumentos
function soma(a=0, b=0) {
    return a + b;
}

console.log(soma(2, 3)); // Output: 5