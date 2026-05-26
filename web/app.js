
async function load() {
  const res = await fetch('http://localhost:3333/api/clients');
  const data = await res.json();
  document.getElementById('lista').innerHTML = data.map(c=>`<li>${c.nome}</li>`).join('');
}

async function criar() {
  const nome = document.getElementById('nome').value;
  await fetch('http://localhost:3333/api/clients', {
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body: JSON.stringify({nome})
  });
  load();
}

load();
