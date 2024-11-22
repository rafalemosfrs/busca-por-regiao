# Projeto de Seleção de Regiões, Estados e Municípios

Este é um projeto simples que permite ao usuário selecionar uma região, um estado e visualizar a lista de municípios relacionados, utilizando a API de Localidades do IBGE. O projeto inclui um layout moderno, com um gradiente de fundo e uma tabela interativa para mostrar os municípios.

## Funcionalidades

- **Seleção de Região**: O usuário pode selecionar uma região do Brasil.
- **Seleção de Estado**: Após escolher uma região, o usuário pode selecionar um estado da região.
- **Visualização de Municípios**: Após selecionar um estado, a tabela exibirá os municípios desse estado.
- **Resetar**: O botão "Resetar" limpa as seleções e a tabela de resultados, e recarrega a lista de regiões.

## Tecnologias Usadas

- **HTML**: Estrutura básica da página.
- **CSS**: Estilização moderna e responsiva com gradiente de fundo.
- **JavaScript**: Interatividade, utilizando `fetch` para consumir a API do IBGE e manipulação do DOM para exibir os dados.
- **API do IBGE**: A API é usada para obter os dados de regiões, estados e municípios diretamente do IBGE.

## Como Usar

1. **Clonar o Repositório**:  
  Primeiro, clone o repositório para sua máquina local.

   ```bash
   git clone https://github.com/rafalemosfrs/busca-por-regiao.git

2. **Abrir no Navegador**:
  Abra o arquivo index.html em um navegador para visualizar o projeto em funcionamento.

3. **Interagir com a Página**:

  ° Selecione uma região no primeiro dropdown.
  ° Escolha um estado relacionado à região selecionada.
  ° A tabela abaixo será preenchida com os municípios correspondentes.
  ° Utilize o botão "Resetar" para limpar as seleções e resultados.

## Estrutura do projeto

```bash
/projeto-regioes-estados-municipios
|-- /assets
|   |-- /images
|   |   |-- iconmonstr-globe-8.svg       # Favicon da página
|-- index.html                           # Arquivo HTML principal
|-- style.css                            # Arquivo de estilo CSS
|-- script.js                            # Arquivo de código JavaScript
|-- README.md                            # Este arquivo (README)
```


## Explicação do Código

### HTML

O arquivo `index.html` contém a estrutura básica do projeto, incluindo:

- Um título centralizado.
- Três elementos `<select>` para selecionar a região, estado e exibir a tabela de municípios.
- Um botão "Resetar" para limpar os dados e reiniciar as seleções.

### CSS

O arquivo `style.css` é responsável pela estilização da página. Algumas características incluem:

- **Gradiente de fundo**: Para um visual mais moderno e suave.
- **Estilização de selects e botões**: Melhorando a interação com os usuários.
- **Tabelas**: Estilização da tabela de municípios com linhas alternadas e efeitos de hover.

### JavaScript

O arquivo `script.js` faz uso de:

- **API do IBGE**: Utiliza `fetch` para buscar os dados de regiões, estados e municípios.
- **Eventos**:
  - Quando uma região é selecionada, os estados daquela região são carregados.
  - Quando um estado é selecionado, a lista de municípios daquele estado é carregada e exibida em uma tabela.
  - O botão "Resetar" limpa as seleções e a tabela.

#### Funções:

- **`buscarRegioes`**: Carrega as regiões do Brasil.
- **`buscarEstadosPorRegiao`**: Carrega os estados de uma região selecionada.
- **`buscarMunicipios`**: Carrega os municípios de um estado selecionado.

#### Eventos de interação:

- Os selects e o botão de reset acionam as funções de busca de dados.

## Possíveis Melhorias

- **Filtros adicionais**: Poderia ser implementado um sistema de busca por nome do município.
- **Exibição de mais informações**: Mostrar mais dados sobre cada município, como população ou área.
- **Armazenamento local**: Armazenar a seleção do usuário no navegador para que ele não precise refazer as escolhas ao recarregar a página.


