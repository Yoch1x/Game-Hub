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

window.onload = function() {
    // Verificar se é a primeira vez do usuário
    if (!localStorage.getItem('hasAccount')) {
        document.getElementById('signup-screen').style.display = 'block'; // Mostra a tela de criação de conta
    } else {
        document.getElementById('login-screen').style.display = 'block'; // Mostra a tela de login
    }

    // Mostra e esconde a senha
    const showSignupPassword = document.getElementById('show-signup-password');
    const showPassword = document.getElementById('show-password');

    const signupPasswordInput = document.getElementById('signup-password');
    const passwordInput = document.getElementById('password');

    showSignupPassword.onclick = function() {
        signupPasswordInput.type = signupPasswordInput.type === 'password' ? 'text' : 'password';
    };

    showPassword.onclick = function() {
        passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
    };

    // Criar conta
    document.getElementById('signup-form').onsubmit = function(e) {
        e.preventDefault();
        
        const username = document.getElementById('signup-username').value;
        const password = document.getElementById('signup-password').value;

        if (username && password) {
            // Armazenar informações da conta no localStorage
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
            localStorage.setItem('hasAccount', 'true'); // Marcar que o usuário tem uma conta
            
            // Mostrar a tela de login
            document.getElementById('signup-screen').style.display = 'none';
            document.getElementById('login-screen').style.display = 'block';
        }
    };

    // Fazer login
    document.getElementById('login-form').onsubmit = function(e) {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        const storedUsername = localStorage.getItem('username');
        const storedPassword = localStorage.getItem('password');
        
        if (username === storedUsername && password === storedPassword) {
            // Login bem-sucedido, ir para os downloads
            document.getElementById('login-screen').style.display = 'none';
            document.getElementById('downloads').style.display = 'block';
        } else {
            alert('Usuário ou senha inválidos!');
        }
    };

    // Ir para a tela de criação de conta
    document.getElementById('go-to-signup').onclick = function() {
        document.getElementById('login-screen').style.display = 'none';
        document.getElementById('signup-screen').style.display = 'block';
    };
};