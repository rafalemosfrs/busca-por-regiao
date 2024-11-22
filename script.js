const geojsonPath = './assets/json/brazil_geo.json';
const municipiosTabela = document.getElementById("municipios").getElementsByTagName('tbody')[0];
const resetarBotao = document.getElementById("resetarTabela");
let geojsonLayer;

const map = L.map('map').setView([-14.2350, -51.9253], 4);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

async function carregarEstadosNoMapa() {
  try {
    const resposta = await fetch(geojsonPath);
    const geojson = await resposta.json();

    if (geojsonLayer) {
      map.removeLayer(geojsonLayer);
    }

    geojsonLayer = L.geoJSON(geojson, {
      style: { color: '#3388ff', weight: 2 },
      onEachFeature: (feature, layer) => {
        layer.on('click', () => {
          const uf = feature.id; 
          buscarMunicipios(uf);
        });
        layer.on('mouseover', () => {
          layer.setStyle({ color: '#ff7800' });
        });
        layer.on('mouseout', () => {
          layer.setStyle({ color: '#3388ff' });
        });
      }
    }).addTo(map);

    map.fitBounds(geojsonLayer.getBounds());
  } catch (error) {
    console.error('Erro ao carregar o GeoJSON:', error);
  }
}

async function buscarMunicipios(uf) {
  try {
    if (!uf) {
      municipiosTabela.innerHTML = '';
      return;
    }

    const urlMunicipios = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/distritos`;
    const resposta = await fetch(urlMunicipios);
    const municipios = await resposta.json();

    municipios.sort((a, b) => a.nome.localeCompare(b.nome));

    municipiosTabela.innerHTML = '';

    municipios.forEach(municipio => {
      const row = document.createElement('tr');
      const nomeCell = document.createElement('td');
      const idCell = document.createElement('td');

      nomeCell.textContent = municipio.nome;
      idCell.textContent = municipio.id;

      row.appendChild(nomeCell);
      row.appendChild(idCell);
      municipiosTabela.appendChild(row);
    });
  } catch (error) {
    console.error('Erro ao buscar municípios:', error);
  }
}

resetarBotao.addEventListener('click', () => {
  municipiosTabela.innerHTML = '';
  carregarEstadosNoMapa();
});

carregarEstadosNoMapa();
