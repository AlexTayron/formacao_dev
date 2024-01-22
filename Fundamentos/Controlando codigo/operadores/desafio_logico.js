//aluno faltou 18 vezes em um total de 223 aulas no ano
//Notas: 5.8, 8.1, 6.9

//O aluno foi aprovado?
// Média maior ou igual que 7 e frequencia de 80%

let nota1 = 5.8
let nota2 = 8.1
let nota3 = 6.9
let media = Math.round((nota1 + nota2 + nota3) / 3)
let temMediaSuficiente = media >= 7

let faltas = 18
let totalAulas = 223

let frequencia = (1 - faltas/totalAulas) * 100
let temFrequenciaSuficiente = frequencia >= 80


console.log('Frequencia: ',frequencia)
console.log('Média: ',media)

const aprovado = temFrequenciaSuficiente && temMediaSuficiente
console.log('Aprovado? ', aprovado)