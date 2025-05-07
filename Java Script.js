document.getElementById('cta-button').addEventListener('click', function() {
    alert('Prepare-se para explorar o mundo dos games!');
});
// Seleciona o cabeçalho
const header = document.querySelector('.animated-header');

// Função para criar partículas
function createParticle() {
    const particle = document.createElement('span');
    particle.classList.add('particle');

    // Define uma posição aleatória
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    
    header.appendChild(particle);

    // Remove a partícula depois de um tempo
    setTimeout(() => {
        particle.remove();
    }, 8000); // Tempo de vida da partícula em ms
}

// Variáveis para as telas
const loginScreen = document.getElementById('login-screen');
const signupScreen = document.getElementById('signup-screen');
const downloadsSection = document.getElementById('downloads-section');

// Exibe a tela de criação de conta
document.getElementById('go-to-signup').addEventListener('click', function() {
    loginScreen.style.display = 'none';
    signupScreen.style.display = 'block';
});

// Função para criar conta
document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('signup-username').value;
    const password = document.getElementById('signup-password').value;

    // Salva as credenciais no localStorage
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    alert('Conta criada com sucesso! Agora, faça login.');

    // Volta para a tela de login
    signupScreen.style.display = 'none';
    loginScreen.style.display = 'block';
});

// Função de login
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Verifica as credenciais armazenadas
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (username === storedUsername && password === storedPassword) {
        alert('Login bem-sucedido!');
        
        // Mostra a seção de downloads e esconde a tela de login
        loginScreen.style.display = 'none';
        downloadsSection.style.display = 'block';
    } else {
        alert('Usuário ou senha incorretos!');
    }
});
