function adicionar(x, y) {
    return x+y
}
function subtracao(x, y) {
    return x-y
}
function multiplicacao(x, y) {
    return x*y
}
function divisao(x, y) {
    return x/y
}
function quadradoDoNumero(x){
    return multiplicacao(x, x)
}
function mediaDeTresNumeros(x,y,z){
    return divisao(adicionar(x, y+z), 3)
}
function calculaPorcentagem(x,y){
    return multiplicacao(divisao(x, 100), y)
}

console.log('-------------- Teste de Operações / Calculadora --------------')

console.log(
    calculaPorcentagem(300,15)
    )
