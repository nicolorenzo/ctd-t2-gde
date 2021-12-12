const curso = require('./modulos/curso');
function Aluno(nome, qtdFaltas, notas) {
        this.nome = nome;
        this.qtdFaltas = qtdFaltas;
        this.notas = notas;
        this.calcularMedia = function(){
            let soma = 0;
            for(let nota of this.notas) {
                soma+=nota;
            }
            return soma/this.notas.length
        };
        this.faltas = function(){
            this.qtdFaltas++
        }
}
const aluno1 = new Aluno(
    "Nico",
    1,
    [7,7,5],
);
const aluno2 = new Aluno(
    "João",
    4,
    [5,10,8],
);
curso.novoAluno(aluno1)
curso.novoAluno(aluno2)
console.log(curso.listaAprovados(aluno1))
  
