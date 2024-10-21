// Alternar entre modo claro e escuro
const toggleThemeButton = document.createElement('button');
toggleThemeButton.innerText = 'Modo Claro/Escuro';
toggleThemeButton.style.position = 'fixed';
toggleThemeButton.style.bottom = '20px';
toggleThemeButton.style.right = '20px';
toggleThemeButton.style.padding = '10px 20px';
toggleThemeButton.style.backgroundColor = '#e94560';
toggleThemeButton.style.color = 'white';
toggleThemeButton.style.border = 'none';
toggleThemeButton.style.borderRadius = '30px';
toggleThemeButton.style.cursor = 'pointer';

document.body.appendChild(toggleThemeButton);

toggleThemeButton.addEventListener('click', function () {
    document.body.classList.toggle('light-theme');
});

// Definindo as classes do modo claro
const style = document.createElement('style');
style.innerHTML = `
    body.light-theme {
        background: radial-gradient(circle, #ffffff, #f2f2f2);
        color: black;
    }
    body.light-theme header {
        background: rgba(255, 255, 255, 0.8);
    }
    body.light-theme nav ul li a {
        color: black;
    }
    body.light-theme #cta-button {
        background-color: #333;
    }
    body.light-theme article {
        background-color: #f7f7f7;
        color: black;
    }
    body.light-theme footer {
        background-color: #e2e2e2;
        color: black;
    }
`;
document.head.appendChild(style);

// Scroll suave ao clicar no menu
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Função de carregar mais conteúdo
const loadMoreButton = document.createElement('button');
loadMoreButton.innerText = 'Carregar Mais Reviews';
loadMoreButton.style.padding = '10px 20px';
loadMoreButton.style.marginTop = '20px';
loadMoreButton.style.backgroundColor = '#e94560';
loadMoreButton.style.color = 'white';
loadMoreButton.style.border = 'none';
loadMoreButton.style.borderRadius = '30px';
loadMoreButton.style.cursor = 'pointer';
loadMoreButton.style.display = 'block';
loadMoreButton.style.margin = '0 auto';

document.getElementById('reviews').appendChild(loadMoreButton);

let reviewsLoaded = false;

loadMoreButton.addEventListener('click', function() {
    if (!reviewsLoaded) {
        const newReview = document.createElement('article');
        newReview.innerHTML = `
            <h3>Review do Jogo Z</h3>
            <p>Este é um review adicional de um jogo incrível que acabou de ser lançado. O jogo traz inovações incríveis no gameplay.</p>
            <button>Leia Mais</button>
        `;
        document.getElementById('reviews').appendChild(newReview);

        const anotherReview = document.createElement('article');
        anotherReview.innerHTML = `
            <h3>Review do Jogo W</h3>
            <p>O jogo W redefine o gênero de ação com gráficos espetaculares e uma história imersiva.</p>
            <button>Leia Mais</button>
        `;
        document.getElementById('reviews').appendChild(anotherReview);

        reviewsLoaded = true;
        loadMoreButton.innerText = 'Todos os Reviews Carregados';
    }
});

// Animação ao rolar a página (Artigos entram suavemente)
window.addEventListener('scroll', function() {
    const articles = document.querySelectorAll('article');
    const windowHeight = window.innerHeight;
    articles.forEach(article => {
        const articleTop = article.getBoundingClientRect().top;
        if (articleTop < windowHeight - 100) {
            article.style.opacity = 1;
            article.style.transform = 'translateY(0)';
        } else {
            article.style.opacity = 0;
            article.style.transform = 'translateY(50px)';
        }
    });
});

// CSS para as animações de rolagem
const scrollStyle = document.createElement('style');
scrollStyle.innerHTML = `
    article {
        opacity: 0;
        transform: translateY(50px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
`;
document.head.appendChild(scrollStyle);