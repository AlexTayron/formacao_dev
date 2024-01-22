const emBlackFriday = false
const temEstoque = false
const temPerfilFuncionario = true

const permiteDescontoMaximo = (emBlackFriday && temEstoque) || temPerfilFuncionario

console.log('Permite desconto maximo?', permiteDescontoMaximo)