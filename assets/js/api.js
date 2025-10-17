
// Módulo responsável pela comunicação com a API do GitHub.

import { GITHUB_CONFIG } from './config.js';

/**
 * Busca os repositórios no GitHub.
 * @returns {Promise<Array>} 
 */
export async function fetchRepositories() {
    const { USERNAME, REPOS_PER_PAGE, SORT_BY, DIRECTION } = GITHUB_CONFIG;
    const API_URL = `https://api.github.com/users/${USERNAME}/repos?per_page=${REPOS_PER_PAGE}&sort=${SORT_BY}&direction=${DIRECTION}`;

    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error(`Erro na API: ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        console.error('Falha ao buscar repositórios:', error);

        return []; 
    }
}