let pontosMaquina = 0;
let pontosUsuario = 0;

// Permitir jogar novamente
function jogarNovamente() {
  let simOuNao = confirm('Jogar novamente?');
  if (simOuNao) {
    validaUsuario();
  }
}
// Armazenar pontos e se um dos jogadores chegar a 3 pontos, o jogo acaba
function pontuacao() {
  console.log(pontosUsuario + ' usuario pontos');
  console.log(pontosMaquina + ' maquina pontos');
  if (pontosUsuario === 3) {
    pontosUsuario = 0;
    pontosMaquina = 0;
    alert('voce ganhou 3 partidas e venceu o jogo!');
    jogarNovamente();
  } else if (pontosMaquina === 3) {
    pontosUsuario = 0;
    pontosMaquina = 0;
    alert('voce perdeu 3 partidas e perdeu o jogo :(');
    jogarNovamente();
  }
}

function jogo(escolhaUsuario) {
  // 2 - Gerar aleaoriamente um número entre 1 e 3
  let escolhaMaquina = Math.floor(Math.random() * 3) + 1;
  console.log(escolhaUsuario);
  console.log(escolhaMaquina);

  // 3 - Quem ganhou
  if (
    escolhaUsuario > escolhaMaquina ||
    (escolhaUsuario == 1 && escolhaMaquina == 3)
  ) {
    pontosUsuario++;
    pontuacao();
    alert('vc ganhou essa partida.');
  } else if (
    escolhaUsuario < escolhaMaquina ||
    (escolhaUsuario == 3 && escolhaMaquina == 1)
  ) {
    pontosMaquina++;
    pontuacao();
    alert('vc perdeu');
  } else {
    console.log(pontosUsuario + ' usuario pontos');
    console.log(pontosMaquina + ' maquina pontos');
    alert('empate');
  }
  validaUsuario();
}

// Validar a escolha do usuário
function validaUsuario() {
  // 1 - Obter qual a jogada do jogador
  let escolhaUsuario = parseInt(
    prompt('Escolha entre [1] Pedra - [2] Papel - [3] Tesoura'),
  );
  if (isNaN(escolhaUsuario) || escolhaUsuario < 1 || escolhaUsuario > 3) {
    alert('Escolha apenas numeros entre 1 e 3');
    validaUsuario();
  } else {
    jogo(escolhaUsuario);
  }
}
validaUsuario();
