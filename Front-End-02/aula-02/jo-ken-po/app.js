let pontosUsuario = 0;
let pontosMaquina = 0;

// Permitir jogar novamente
function jogarNovamente() {
  let simOuNao = confirm('Jogar novamente?');
  if (simOuNao) {
    validaUsuario();
  }
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

function jogo(escolhaUsuario) {
  // 2 - Gerar aleaoriamente um número entre 1 e 3
  let escolhaMaquina = Math.floor(Math.random() * 3) + 1;

  // Armazenar pontos e se um dos jogadores chegar a 3 pontos, o jogo acaba
  function pontuacao() {
    if (pontosUsuario === 3) {
      alert('voce ganhou 3 partidas e venceu o jogo!');
      jogarNovamente();
    } else if (pontosMaquina === 3) {
      alert('voce perdeu 3 partidas e perdeu o jogo :(');
      jogarNovamente();
    }
  }
  console.log(escolhaUsuario);
  console.log(escolhaMaquina);

  // 3 - Quem ganhou
  if (
    escolhaUsuario > escolhaMaquina ||
    (escolhaUsuario == 1 && escolhaMaquina == 3)
  ) {
    pontosUsuario += 1;
    console.log(pontosUsuario + ' usuario pontos');
    alert('vc ganhou essa partida.');
  } else if (
    escolhaUsuario < escolhaMaquina ||
    (escolhaUsuario == 3 && escolhaMaquina == 1)
  ) {
    pontosMaquina += 1;
    console.log(pontosMaquina + ' maquina pontos');
    alert('vc perdeu');
  } else {
    console.log('empate');
    alert('empate');
  }
  pontuacao();
  validaUsuario();
}
validaUsuario();
