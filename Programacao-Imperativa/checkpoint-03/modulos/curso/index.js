module.exports = {
  nome: 'Programação',
  notaAprovacao: 7,
  faltasMax: 5,
  listaAlunos: [],
  novoAluno: function(aluno){
    this.listaAlunos.push(aluno)
  },
  aprovaTeste: function(aluno) {
    if(aluno.calcularMedia() >= this.notaAprovacao &&aluno.qtdFaltas<this.faltasMax){
      return true;
    } else if(aluno.calcularMedia()>this.notaAprovacao*1.1 && aluno.qtdFaltas===this.faltasMax){
        return true;
    } else{
      return false;
    }
  },
  listaAprovados: function() {
    let aprovados =[];
    for(let i =0; i<this.listaAlunos.length; i++){
      aprovados.push(this.aprovaTeste(this.listaAlunos[i]))
    }
    return aprovados
  }
}
