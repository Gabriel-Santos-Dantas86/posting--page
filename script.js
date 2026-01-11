// Seletores DOM
const postForm = document.querySelector('#postForm');
const postTitle = document.querySelector('#postTitle');
const postContent = document.querySelector('#postContent');
const submitBtn = document.querySelector('#submitBtn');
const postRendered = document.querySelector('#postRendered');
const apiStatus = document.querySelector('#apiStatus');
const currentYear = document.querySelector('#currentYear');

// Definir ano atual no rodapé
currentYear.textContent = new Date().getFullYear();

// Evento de envio do formulário
postForm.addEventListener('submit', async function(e) {
    e.preventDefault(); // Prevenir comportamento padrão do formulário
    
    // Validar se os campos estão preenchidos
    if (!postTitle.value.trim() || !postContent.value.trim()) {
        showStatus('Por favor, preencha todos os campos', 'error');
        return;
    }
    
    // Desabilitar botão durante a requisição
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Publicando...';
    
    // Mostrar status de carregamento
    showStatus('Enviando post para a API...', 'loading');
    
    // Montar objeto de dados conforme especificação
    const data = {
        title: postTitle.value,
        body: postContent.value, 
        userId: 1
    };
    
    try {
        // Configuração da requisição
        const options = {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        };
        
        // Fazer requisição para a API
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', options);
        
        // Verificar se a resposta foi bem sucedida
        if (!response.ok) {
            throw new Error(`Erro na API: ${response.status}`);
        }
        
        const responseData = await response.json();
        
        // Mostrar sucesso
        showStatus('Post publicado com sucesso! (Simulação - API JSONPlaceholder)', 'success');
        
        // Renderizar o post na tela
        renderPost(responseData);
        
        // Limpar o formulário
        postForm.reset();
        
    } catch (error) {
        // Mostrar erro
        showStatus(`Erro ao publicar: ${error.message}`, 'error');
        
        // Renderizar com dados locais em caso de erro na API (para demonstração)
        renderPost(data);
        
    } finally {
        // Reabilitar botão
        submitBtn.disabled = false;
        submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Publicar Post';
    }
});

// Função para renderizar o post
function renderPost(postData) {
    // Criar elementos HTML para o post
    const postHTML = `
        <h3 id="renderizador-titulo">${postData.title}</h3>
        <p id="renderizador-conteudo">${postData.body}</p>
        <div class="post-meta">
            <p><strong>ID do Post:</strong> ${postData.id || 'Simulado'}</p>
            <p><strong>Autor:</strong> Usuário ${postData.userId}</p>
            <p><strong>Publicado em:</strong> ${new Date().toLocaleDateString('pt-BR')}</p>
        </div>
    `;
    
    // Inserir o HTML no container
    postRendered.innerHTML = postHTML;
    
    // Adicionar classe de animação
    postRendered.style.animation = 'none';
    setTimeout(() => {
        postRendered.style.animation = 'fadeIn 0.5s';
    }, 10);
}

// Função para mostrar status da API
function showStatus(message, type) {
    apiStatus.textContent = message;
    apiStatus.className = 'api-status';
    
    // Adicionar classe baseada no tipo
    if (type) {
        apiStatus.classList.add(type);
    }
    
    // Esconder após alguns segundos (exceto para loading)
    if (type !== 'loading') {
        setTimeout(() => {
            apiStatus.style.display = 'none';
        }, 5000);
    }
}

// Exemplo de post pré-carregado para demonstração
window.addEventListener('DOMContentLoaded', () => {
    // Pré-carregar um exemplo
    postTitle.value = "Bem-vindo ao Postagem Social!";
    postContent.value = "Esta é uma demonstração de como funciona a aplicação. Você pode digitar seu próprio título e conteúdo, clicar em 'Publicar Post' e ver como a aplicação se comunica com uma API real (JSONPlaceholder) para simular a criação de um post em redes sociais.";
});