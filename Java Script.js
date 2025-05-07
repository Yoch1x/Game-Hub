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
    }, 8000);
}

// Exemplo de partículas sendo criadas continuamente
setInterval(createParticle, 300);