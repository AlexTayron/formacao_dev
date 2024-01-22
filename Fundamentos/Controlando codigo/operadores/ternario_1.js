const hora = 19
const saudacao1 = hora >= 12 ? 'Boa Tarde' : 'Bom dia'
console.log(saudacao1)

const saudacao2= hora <= 12 ? 'Bom Dia' : (hora <= 17 ? 'Boa Tarde' : 'Boa noite')
console.log(saudacao2)