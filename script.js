const ENDPOINT = "http://localhost:5000";
let modo = "AUTÔNOMO";

async function enviarComando(comando) {
  if (modo !== "MANUAL") return;
  try {
    const res = await fetch(`${ENDPOINT}/comando`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ acao: comando })
    });
    const result = await res.json();
    console.log("Comando enviado:", result);
  } catch (error) {
    console.error("Erro ao enviar comando:", error);
  }
}

async function atualizarSensores() {
  try {
    const res = await fetch(`${ENDPOINT}/sensores`);
    const json = await res.json();
    const partes = json.dados.split('|');
    partes.forEach(parte => {
      const [chave, valor] = parte.split(':');
      switch (chave) {
        case 'DIST': document.getElementById('distance-front').textContent = valor; break;
        case 'TEMP': document.getElementById('temperature').textContent = valor; break;
        case 'HUM': document.getElementById('humidity').textContent = valor; break;
        case 'LUX': document.getElementById('light-level').textContent = valor; break;
        case 'INCL': document.getElementById('inclination').textContent = valor; break;
        case 'RPM': document.getElementById('wheel-rotation').textContent = valor; break;
        case 'IMP': document.getElementById('impact').textContent = valor; break;
      }
    });
  } catch (error) {
    console.error("Erro ao buscar sensores:", error);
  }
}

function alternarModo() {
  modo = modo === "AUTÔNOMO" ? "MANUAL" : "AUTÔNOMO";
  document.getElementById('modo-atual').textContent = modo;
  document.getElementById('controle-manual').style.display = (modo === "MANUAL") ? "block" : "none";
}

setInterval(atualizarSensores, 2000);
