function ParOuImpar(numero) {
    if (numero % 2 === 0) {
        return 'Par';
    } else {
        return 'Ímpar';
    }
}

//console.log(ParOuImpar(10)); // Par
let res = ParOuImpar(11); // Ímpar
console.log(res); // Ímpar