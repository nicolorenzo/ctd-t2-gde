function Aluno(nome, faltas, notas) {
        this.nome = nome;
        this.faltas = faltas;
        this.notas = notas;
        this.calculaMedia = function(){
            let soma = 0;
            for(let nota of this.notas) {
                soma+=nota;
            }
            return soma/this.notas.length
        };
        this.falta = function(){
            this.faltas++
        }
}
module.exports = {
    Aluno,
}