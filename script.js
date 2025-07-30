document.addEventListener('DOMContentLoaded', () => {
  loadGames('ao-vivo');

  document.querySelectorAll('.tab-button').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.tab-button').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      loadGames(btn.dataset.tab);
    });
  });
});

function loadGames(tipo) {
  const url = `api/${tipo}.php`;
  const container = document.getElementById('jogos');
  container.innerHTML = 'Carregando...';

  fetch(url)
    .then(res => res.json())
    .then(json => {
      container.innerHTML = '';

      if (!json.data || json.data.length === 0) {
        container.innerHTML = '<p>Nenhum jogo encontrado.</p>';
        return;
      }

      json.data.forEach(jogo => {
        const home = jogo.teams.home;
        const away = jogo.teams.away;
        const score = jogo.score;
        const time = jogo.time?.minute ?? new Date(jogo.starting_at).toLocaleTimeString('pt-BR', {hour: '2-digit', minute: '2-digit'});

        const logoHome = `logos/${formatarNome(home.name)}.png`;
        const logoAway = `logos/${formatarNome(away.name)}.png`;

        const card = `
          <div class="jogo">
            <img src="${logoHome}" alt="${home.name}" />
            <div class="info">
              <strong>${home.name}</strong> ${score?.home ?? ''} x ${score?.away ?? ''} <strong>${away.name}</strong>
              <br><small>${time}'</small>
            </div>
            <img src="${logoAway}" alt="${away.name}" />
          </div>
        `;
        container.innerHTML += card;
      });
    });
}

function formatarNome(nome) {
  return nome.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]/g, '');
}
