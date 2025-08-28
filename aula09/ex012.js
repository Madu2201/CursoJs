let agora = new Date()// Cria um objeto Date com a data e hora atuais
let hora = agora.getHours()// Obtém a hora atual
console.log(`Agora são exatamente ${hora} horas.`)// Exibe a hora atual

if (hora < 12) {
    console.log('Bom dia!')
} else if (hora < 18) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}