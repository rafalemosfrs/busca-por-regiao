# Projeto de Seleção de Regiões, Estados e Municípios

Este é um projeto simples que permite ao usuário selecionar uma região, um estado e visualizar a lista de municípios relacionados, utilizando a API de Localidades do IBGE. O projeto inclui um layout moderno, com um gradiente de fundo e uma tabela interativa para mostrar os municípios.

## Funcionalidades

- **Mapa Interativo**: O usuário pode clicar em um estado diretamente no mapa do Brasil para visualizar sua lista de municípios.
- **Visualização de Municípios**: Após selecionar um estado, a tabela exibida listará os municípios relacionados.
- **Resetar**: O botão "Resetar" limpa a seleção do estado e a tabela de resultados.

## Tecnologias Usadas

- **HTML**: Estrutura básica da página.
- **CSS**: Estilização moderna e responsiva com gradiente de fundo.
- **JavaScript**: Interatividade e consumo da API do IBGE.
- **Leaflet**: Biblioteca de mapas interativos para renderizar o mapa do Brasil.
- **GeoJSON**: Dados geográficos utilizados para delinear os estados no mapa.
- **API do IBGE**: Fornece dados detalhados de estados e municípios do Brasil.

## Como Usar

1. **Clonar o Repositório**:  
  - Primeiro, clone o repositório para sua máquina local.

   ```bash
   git clone https://github.com/rafalemosfrs/busca-por-regiao.git
```

2. **Abrir no Navegador**:
  - Abra o arquivo index.html em um navegador para visualizar o projeto em funcionamento.

3. **Interagir com a Página**:

  - Clique em um estado no mapa para visualizar seus municípios.
  - A tabela abaixo será preenchida com os municípios correspondentes.
  - Utilize o botão "Resetar" para limpar a seleção e os resultados.

## Estrutura do projeto

```bash
/projeto-regioes-estados-municipios
|-- /assets
|   |-- /images
|   |   |-- iconmonstr-globe-8.svg       # Favicon da página
|   |-- /json
|   |   |-- brazil_geo.json              # Arquivo GeoJSON do mapa do Brasil
|-- index.html                           # Arquivo HTML principal
|-- style.css                            # Arquivo de estilo CSS
|-- script.js                            # Arquivo de código JavaScript
|-- README.md                            # Este arquivo (README)
```


## Explicação do Código

### HTML

O arquivo `index.html` contém a estrutura básica do projeto, incluindo:

- Um título centralizado.
- Um mapa interativo renderizado pela biblioteca Leaflet.
- Uma tabela responsiva para exibir os municípios de um estado selecionado.
- Um botão "Resetar" para limpar os dados e reiniciar a interação.

### CSS

O arquivo `style.css` é responsável pela estilização da página. Algumas características incluem:

- Gradiente de fundo: Para um visual mais moderno e suave.
- Estilização do mapa e da tabela: Melhorando a experiência do usuário.

### JavaScript

O arquivo `script.js` faz uso de:

- API do IBGE: Utiliza fetch para buscar os dados de estados e municípios.
- Leaflet: Renderiza o mapa e adiciona interatividade aos estados.
- GeoJSON: Utiliza dados geográficos para desenhar os limites dos estados.
- Eventos:
  - Quando um estado é clicado no mapa, a tabela é atualizada com os municípios correspondentes.
  - O botão "Resetar" limpa a seleção e os resultados.

#### Funções:

- **inicializarMapa**: Configura e renderiza o mapa do Brasil usando o arquivo GeoJSON.
- **buscarMunicipios**: Busca e exibe os municípios de um estado selecionado.

#### Eventos de interação:

- Os selects e o botão de reset acionam as funções de busca de dados.

## Possíveis Melhorias

- **Filtros adicionais**: Permitir busca por nome do município diretamente.

- **Mais dados sobre municípios**: Exibir informações como população ou área.

- **Armazenamento local**: Salvar seleções do usuário para persistência ao recarregar a página.




