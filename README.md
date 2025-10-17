# Meu portfolio com integração GitHub API

## Sobre o projeto

Este projeto foi criado para ser um cartão de visitas digital, moderno e de fácil manutenção para mostrar meus projetos. A página apresenta de forma clara e minimalista as informações essenciais: um perfil profissional, os projetos mais relevantes e as formas de contato.

O grande diferencial é a **automação do portfólio**: a seção de projetos consome a API do GitHub em tempo real, garantindo que o currículo esteja sempre atualizado com os últimos trabalhos públicos, sem a necessidade de editar o código manualmente.

## Features

-   **Integração Dinâmica com GitHub API**: Exibe os 6 repositórios mais recentes, atualizados automaticamente.
-   **Arquitetura Limpa (Clean Code)**: Código modular e desacoplado em JavaScript (Modules) e CSS, seguindo princípios de *Separation of Concerns*.
-   **Design Responsivo**: Layout fluido que se adapta perfeitamente a desktops, tablets e smartphones.
-   **Animações Sutis**: Efeitos de *fade-in* ao rolar a página, implementados com `Intersection Observer` para melhor performance.
-   **Código Otimizado**: Escrito com HTML5 semântico, CSS3 moderno e JavaScript puro (Vanilla JS), garantindo leveza e carregamento rápido.
-   **Scrollspy na Navegação**: O link do menu é destacado automaticamente conforme a seção correspondente fica visível na tela.

## Arquitetura do Projeto

O projeto segue uma estrutura de arquivos clara e organizada, visando a manutenibilidade e escalabilidade.

```
/PORTFOLIO
├── index.html              # Estrutura e conteúdo
├── README.md               # Documentação do projeto
│
├── assets
│   ├── css                  # Estilos modulares
│   │   ├── main.css         # Ponto de entrada do CSS (@import)
│   │   ├── _base.css        # Reset e estilos globais
│   │   ├── _variables.css   # Variáveis de cor, fontes, etc.
│   │   ├── _layout.css      # Header, footer, sections, container
│   │   └── _components.css  # Botões, cards, etc.
│   │
│   └── js                   # Lógica modular
│       ├── main.js          # Orquestrador da aplicação
│       ├── config.js        # Configurações (username, seletores)
│       ├── api.js           # Módulo para chamadas à API
│       └── ui.js            # Módulo para manipulação do DOM
│
└── public
    ├── cv2025.pdf   # Arquivo do currículo
    ├── icon.png     # Icone na barra do navegador
    └── image.jpg    # Foto de perfil
```
-   **JavaScript Modular**:
    -   `config.js`: Centraliza variáveis e seletores, facilitando a customização.
    -   `api.js`: Única responsabilidade de buscar dados externos (GitHub).
    -   `ui.js`: Responsável por toda a manipulação do DOM (renderizar cards, animações).
    -   `main.js`: Ponto de entrada que orquestra as chamadas aos outros módulos.

