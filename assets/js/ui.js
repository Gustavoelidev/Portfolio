

/**
 * Cria o HTML para um único card de repositório.
 * @param {object} repo 
 * @returns {string} 
 */
function createRepoCardHTML(repo) {
    const description = repo.description || 'Este projeto não possui uma descrição.';
    return `
        <div class="repo-card">
            <h3 class="repo-card__title">${repo.name}</h3>
            <p class="repo-card__description">${description}</p>
            <a href="${repo.html_url}" target="_blank" class="btn">Ver no GitHub</a>
        </div>
    `;
}

/**
 * Renderiza a lista de repositórios no container especificado.
 * @param {HTMLElement} container 
 * @param {Array} repos 
 */
export function renderRepositories(container, repos) {
    if (!repos || repos.length === 0) {
        container.innerHTML = '<p>Nenhum projeto encontrado ou falha ao carregar.</p>';
        return;
    }
    container.innerHTML = repos.map(createRepoCardHTML).join('');
}

/**
 * Configura o Intersection Observer para animar elementos na rolagem.
 * @param {string} selector 
 */
export function setupScrollAnimations(selector) {
    const elementsToAnimate = document.querySelectorAll(selector);
    
    if(!elementsToAnimate.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Anima apenas uma vez
            }
        });
    }, {
        threshold: 0.1 
    });

    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
}

/**
 * Atualiza o ano no rodapé.
 * @param {HTMLElement} element
 */
export function updateFooterYear(element) {
    if (element) {
        element.textContent = new Date().getFullYear();
    }
}