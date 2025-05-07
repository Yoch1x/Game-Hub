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

// Cria partículas a cada intervalo de tempo
setInterval(createParticle, 1000);

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário padrão

    // Aqui você pode verificar o login (apenas uma validação simples para demonstração)
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === '12345') {
        // Se o login for bem-sucedido, ocultamos a tela de login e mostramos os downloads
        document.getElementById('login-screen').style.display = 'none';
        document.getElementById('downloads-section').style.display = 'block';
        document.getElementById('downloads-link').style.display = 'block'; // Mostra o link de downloads
    } else {
        alert('Usuário ou senha incorretos!');
    }
});