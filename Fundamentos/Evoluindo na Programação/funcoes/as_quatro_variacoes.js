// #1 - Função SEM paramentros e SEM retorno
function exibirBomDia(){
    console.log('Bom dia!');
}
exibirBomDia();

// #2 - Função COM paramentros e SEM retorno
function exibirBomDiaPara(nome){
    console.log(`Bom dia ${nome}!`);
}
exibirBomDiaPara('Lucia');
exibirBomDiaPara('Ana');
exibirBomDiaPara('LuMiguel');

// #3 - Função SEM paramentros e COM retorno
function numeroEntre0e10(){
    const numero = parseInt(Math.random() * 10)
    return numero
}
console.log(numeroEntre0e10())

// #4 - Função COM paramentros e COM retorno
function somar(n1, n2){
    return n1 + n2
}

const resultado = somar(3, 4)
console.log(resultado)
console.log(somar(3, 7))