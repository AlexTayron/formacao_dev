//funcao: 3 Params => mediaSimples => console.log 
//funcao: 3 Params => mediaPonderada => console.log 

function mediaSimples(nota1, nota2, nota3){
    const media = (nota1 + nota2 + nota3) / 3
    console.log(`A média simples é ${media}`)
}

function mediaPonderada(nota1, nota2, nota3){
    const media = (nota1 + 2 * nota2 + 3 * nota3) / 6
    console.log(`A média ponderada é ${media}`)
}

mediaSimples(6, 7, 8)
mediaPonderada(6, 7, 8)