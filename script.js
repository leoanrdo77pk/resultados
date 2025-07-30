async function carregarJogos() {
  const resposta = await fetch('api/fixtures.php');
  const dados = await resposta.json();

  const container = document.getElementById('jogos');
  container.innerHTML = '';

  if (!dados || !dados.data) {
    container.innerHTML = '<p>Nenhum jogo encontrado.</p>';
    return;
  }

  dados.data.forEach(jogo => {
    const home = jogo.teams.home.name;
    const away = jogo.teams.away.name;
    const horario = new Date(jogo.starting_at).toLocaleTimeString('pt-BR', {hour: '2-digit', minute:'2-digit'});
    const placar = jogo.score ? `${jogo.score.home} x ${jogo.score.away}` : 'vs';

    const card = `
      <div class="jogo">
        <strong>${home}</strong> ${placar} <strong>${away}</strong><br />
        <small>${horario}</small>
      </div>
    `;
    container.innerHTML += card;
  });
}

carregarJogos();

