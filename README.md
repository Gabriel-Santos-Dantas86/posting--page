README.md - Projeto de Postagem Social
markdown
# 📱 Projeto de Postagem Social

<div align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
  <img src="https://img.shields.io/badge/API-JSONPlaceholder-blue?style=for-the-badge" alt="API">
</div>

## 📋 Descrição do Projeto

Este projeto simula uma interface de criação de posts semelhante às redes sociais (Facebook, LinkedIn), permitindo aos usuários criar publicações com título e conteúdo. A aplicação realiza comunicação com uma API real (JSONPlaceholder) para simular o envio de dados, proporcionando uma experiência prática de consumo de APIs no front-end.

**Desenvolvedor:** Gabriel Dantas

## ✨ Funcionalidades

- ✅ Formulário de criação de posts com validação
- ✅ Comunicação com API externa (JSONPlaceholder)
- ✅ Renderização dinâmica do conteúdo
- ✅ Design responsivo e moderno
- ✅ Feedback visual durante operações
- ✅ Simulação realista de postagem em redes sociais

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estrutura semântica da página
- **CSS3** - Estilização e design responsivo
- **JavaScript (ES6+)** - Lógica e interatividade
- **Fetch API** - Comunicação com serviço externo
- **JSONPlaceholder API** - API REST para simulação

## 🚀 Como Executar o Projeto

### Opção 1: Executar localmente

1. **Clone ou baixe os arquivos do projeto**

2. **Certifique-se de que tenha os seguintes arquivos na mesma pasta:**
projeto-postagem/
├── index.html
├── style.css
└── script.js

text

3. **Abra o arquivo `index.html` em um navegador web:**
- Clique duplo no arquivo `index.html`
- Ou arraste o arquivo para uma janela do navegador

### Opção 2: Executar com Live Server (VS Code)

1. **Instale a extensão "Live Server" no VS Code**
2. **Abra a pasta do projeto no VS Code**
3. **Clique com o botão direito no `index.html`**
4. **Selecione "Open with Live Server"**

### Opção 3: Hospedar online (GitHub Pages)

1. **Crie um repositório no GitHub**
2. **Faça upload dos três arquivos**
3. **Vá em Settings → Pages**
4. **Selecione a branch `main` e a pasta `/root`**
5. **Acesse o link gerado**

## 📁 Estrutura do Projeto
projeto-postagem-social/
│
├── index.html # Arquivo HTML principal
├── style.css # Estilos CSS
├── script.js # Lógica JavaScript
└── README.md # Este arquivo de documentação

text

## 🔧 Detalhes de Implementação

### 1. Estrutura HTML
- Utilização de tags semânticas (`<header>`, `<main>`, `<section>`, `<footer>`)
- Formulário com inputs para título e conteúdo
- Área dedicada para renderização do post

### 2. Estilização CSS
- Design moderno com gradientes e sombras
- Layout responsivo com CSS Grid
- Animações e transições suaves
- Foco em acessibilidade e usabilidade

### 3. Lógica JavaScript
- Comunicação assíncrona com API usando Fetch
- Manipulação de eventos (submit, DOMContentLoaded)
- Validação de formulário
- Renderização dinâmica de conteúdo
- Tratamento de erros e feedback ao usuário

### 4. Comunicação com API

A aplicação se comunica com a API [JSONPlaceholder](https://jsonplaceholder.typicode.com/):

```javascript
// Endpoint utilizado
const API_URL = 'https://jsonplaceholder.typicode.com/posts';

// Método: POST
// Headers: Content-type: application/json
// Body: JSON com título, conteúdo e userId
📝 Requisitos Atendidos
✅ Requisitos Mínimos
HTML com inputs e outputs

Formulário com dois campos (título e conteúdo)

Botão para requisição POST

Área para renderização do post

JavaScript com seletores e eventos

Seletores para elementos do DOM

Event listener para submit do formulário

Prevenção do comportamento padrão (preventDefault)

Montagem do objeto para envio à API

Especificações da API

Estrutura do objeto: {title, body, userId: 1}

Configuração correta do fetch (method, headers, body)

Renderização do retorno na interface

✅ Requisitos Adicionais
Design responsivo e acessível

Feedback visual durante operações

Validação de formulário

Tratamento de erros

Código organizado e comentado

🎨 Personalização
Alterar Estilos
Para personalizar a aparência, edite o arquivo style.css:

css
/* Exemplo: Alterar cores principais */
:root {
  --primary-color: #3a8ffe;
  --secondary-color: #1e5fd8;
  --background-color: #f5f7fa;
}
Modificar Comportamento
Para alterar a lógica, edite o arquivo script.js:

javascript
// Exemplo: Alterar o userId
const data = {
  title: postTitle.value,
  body: postContent.value,
  userId: 2 // Alterar ID do usuário
};
🧪 Testando a Aplicação
Teste de formulário vazio

Clique em "Publicar Post" sem preencher campos

Deve mostrar mensagem de erro

Teste de postagem bem-sucedida

Preencha título e conteúdo

Clique em "Publicar Post"

Deve mostrar post renderizado e mensagem de sucesso

Teste de responsividade

Redimensione a janela do navegador

A interface deve se adaptar a diferentes tamanhos

Teste de API offline

Simule falta de conexão (modo avião)

A aplicação deve tratar o erro graciosamente

🔍 Pontos de Atenção
Simulação com API
A API JSONPlaceholder é um serviço de teste

Posts não são realmente salvos no servidor

O ID retornado é sempre 101 (simulação)

Limitações
Não há persistência local de dados

Não há autenticação de usuário real

Apenas simulação de funcionalidades de rede social

📚 Aprendizados do Projeto
Este projeto aborda conceitos fundamentais do desenvolvimento front-end:

Manipulação do DOM - Seleção e modificação de elementos

Event Handling - Captura e tratamento de eventos do usuário

Fetch API - Comunicação assíncrona com serviços externos

Form Validation - Validação de dados do usuário

Responsive Design - Adaptação a diferentes dispositivos

Error Handling - Tratamento de erros em operações assíncronas

🤝 Contribuindo
Faça um fork do projeto

Crie uma branch para sua feature (git checkout -b feature/AmazingFeature)

Commit suas mudanças (git commit -m 'Add some AmazingFeature')

Push para a branch (git push origin feature/AmazingFeature)

Abra um Pull Request

📄 Licença
Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

👨‍💻 Autor
Gabriel Santos Dantas

Desenvolvedor Front-end

Projeto desenvolvido como parte de um desafio de aprendizado

🙏 Agradecimentos
JSONPlaceholder pela API gratuita

Comunidade de desenvolvimento front-end

Recursos educacionais online

<div align="center"> <p>Desenvolvido com ❤️ por Gabriel Dantas</p> <p>Se encontrar algum problema, por favor abra uma <em>issue</em> no repositório.</p> </div> ```
📋 Como usar este README
Crie um arquivo README.md na mesma pasta dos outros arquivos

Copie e cole todo o conteúdo acima no arquivo

Personalize conforme necessário (nome, detalhes específicos, etc.)

Se quiser adicionar uma licença, crie um arquivo LICENSE com o texto da licença MIT

📝 Exemplo de Licença MIT (opcional)
Crie um arquivo LICENSE com:

text
MIT License

Copyright (c) 2023 Gabriel Dantas

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
🎯 Estrutura Final Completa do Projeto
text
projeto-postagem-social-gabriel-dantas/
│
├── index.html          # Página principal
├── style.css           # Estilos da aplicação
├── script.js           # Lógica JavaScript
├── README.md           # Documentação completa
└── LICENSE             # Licença MIT (opcional)
