# Gerador de Relatório PDF

Este projeto React gera um relatório em **PDF** contendo um gráfico (de barras) e uma tabela, utilizando a biblioteca `@react-pdf/renderer` para a geração do PDF e a API pública [QuickChart.io](https://quickchart.io/) para a renderização do gráfico como imagem.

## Funcionalidades

- Geração de gráfico dinâmico com dados mockados
- Exibição de tabela com dados simples
- Download do relatório em formato PDF

## 📦 Como rodar o projeto

### 1. Clonar o repositório

```bash
git clone https://github.com/seu-usuario/relatorio-pdf.git
cd relatorio-pdf
```

### 2. Instalar as dependências

```bash
npm install
```

### 3. Rodar o projeto

```bash
npm start
```

Abra o navegador e acesse:  
[http://localhost:3000](http://localhost:3000)

Clique no botão para gerar e baixar o relatório em PDF.

## 🛠️ Como funciona

1. O gráfico é gerado utilizando a API **QuickChart.io**, com base nos dados definidos no código.
2. A tabela exibe os dados em duas colunas: **Item** e **Valor**.
3. O botão da interface permite gerar e baixar o arquivo PDF contendo o gráfico e a tabela.

## 🧰 Tecnologias utilizadas

- [React](https://reactjs.org/)
- [@react-pdf/renderer](https://github.com/diegomura/react-pdf)
- [QuickChart.io](https://quickchart.io/)

## 📄 Licença

Este projeto é de código aberto e está sob a licença [MIT](https://opensource.org/licenses/MIT).

---

Desenvolvido como parte de uma atividade de geração de relatórios em PDF.