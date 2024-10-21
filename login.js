document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o recarregamento da página ao enviar o formulário

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Simulação de autenticação (para um sistema real, você conectaria a um servidor ou banco de dados)
    if (username === 'admin' && password === '1234') {
        // Exibe uma animação de sucesso (ou redireciona diretamente)
        document.body.innerHTML = `
            <div class="loading-container">
                <p>Login realizado com sucesso! Redirecionando...</p>
            </div>
        `;
        setTimeout(function() {
            window.location.href = 'index.html'; // Redireciona para o site principal
        }, 2000); // Aguarda 2 segundos para redirecionar
    } else {
        errorMessage.innerText = 'Usuário ou senha incorretos';
        errorMessage.style.display = 'block';
    }
});

// Exibe a mensagem de erro por 3 segundos e depois some
document.getElementById('loginButton').addEventListener('click', function() {
    const errorMessage = document.getElementById('error-message');
    if (errorMessage.style.display === 'block') {
        setTimeout(function() {
            errorMessage.style.display = 'none';
        }, 3000);
    }
});