

import { SELECTORS } from './config.js';
import { fetchRepositories } from './api.js';
import { renderRepositories, updateFooterYear, setupScrollAnimations } from './ui.js';

// Função principal assíncrona para organizar o código
async function initApp() {
    const repoListContainer = document.querySelector(SELECTORS.repoList);
    const currentYearSpan = document.querySelector(SELECTORS.currentYear);


    if(repoListContainer) {
        repoListContainer.innerHTML = '<p>Carregando projetos do GitHub...</p>';
    }
    

    const repos = await fetchRepositories();
    if(repoListContainer) {
        renderRepositories(repoListContainer, repos);
    }


    updateFooterYear(currentYearSpan);
    setupScrollAnimations(SELECTORS.animatedSections);
}


document.addEventListener('DOMContentLoaded', initApp);