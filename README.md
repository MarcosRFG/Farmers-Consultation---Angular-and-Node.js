---------
PORTUGUÊS
---------

# Projeto: 
    Consulta de Agricultores (SPA e API)

# Descrição: 
    Esse projeto tem por objetivo disponibilizar a consulta de agricultores. Para isso, foi criado uma aplicação front-end em Angular 7 (SPA), onde o usuário pode consultar os agricultores fazendo o filtro pelo nome ou número do documento.
    O SPA faz a integração com uma API em Node.js, que por sua vez, possui um método exposto em GET que recebe o parametro de busca, seleciona todos os agricultores que contém o valor de busca (mock), e retorna na saída do serviço. 

# Tecnologias  envolvidas
    - Angular 7.2.15
    - Material Angular 7.3.7
    - Node.js 12.2.0
    - Express 4.17.1

# Pré-requisitos
    - Node
    - NPM
    - Git

# Clone e Instalação do projeto
    Primeiro, é necessário fazer o clone da aplicação do GitHub:

    comando: git clone https://github.com/MarcosRFG/Farmers-Consultation-Angular-and-Node.js.git

    Na pasta clonada, terão dois projetos, o SPA e a API, é necessário baixar as dependências de cada um deles.
    Vamos começar pelo SPA (entre na pasta spa-angular-farmer):

    comando: npm install

    Após a conclusão, é hora de baixar as dependências da API (entre na pasta api-nodejs-farmer)

    comando: npm install

    Nesse momento, temos todas as dependências instaladas e prontos para rodar o projeto.
    
# Rodando os projetos SPA e API    
    Vamos começar iniciando a API na porta 3000 (api-nodejs-farmer):

    comando: npm start

    Depois, vamos rodar o SPA em outro terminal (spa-angular-farmer):

    comando: npm start

    Após as duas aplicações estarem rodando, acesse a aplicação pela web através de:
    http://localhost:4200

# Teste Unitário
    SPA (spa-angular-farmer)
        A aplicação possui teste unitário com cobertura de 98%.
        Para rodar os testes unitários:

        comando: npm test

        Após a conclusão, será gerado o coverage em /build/reports/coverage/html/

    API (api-nodejs-farmer)
        A API possui teste unitário com cobertura de 100% do controller.
        Para rodar os testes unitários:

        comando: npm test

        Após a conclusão, será gerado o coverage em /coverage/lcov-report/

# Autor
    Marcos Rodrigues
    https://github.com/MarcosRFG


-------
ENGLISH
-------

# Project:
    Farmers Consultation (SPA and API)

# Description:
    This project aims to provide consultation to farmers. For this, a front-end application was created in Angular 7 (SPA), where the user can consult farmers by filtering by name or document number.
    The SPA integrates with an API in Node.js, which in turn, has a method exposed in GET that receives the search parameter, selects all farmers that contain the search value (mock), and returns in the output service.

# Technologies involved
    - Angular 7.2.15
    - Angular Material 7.3.7
    - Node.js 12.2.0
    - Express 4.17.1

# Prerequisites
    - Node
    - NPM
    - Git

# Project clone and installation
    First, you need to clone the GitHub application:

    command: git clone https://github.com/MarcosRFG/Farmers-Consultation-Angular-and-Node.js.git

    In the cloned folder, there will be two projects, the SPA and the API, it is necessary to download the dependencies of each one of them.
    Let's start with the SPA (enter the spa-angular-farmer folder):

    command: npm install

    Upon completion, it's time to download the API dependencies (enter the api-nodejs-farmer folder)

    command: npm install

    At this point, we have all the facilities installed and ready to run the project.
    
# Running the SPA and API projects
    Let's start by starting the API on port 3000 (api-nodejs-farmer):

    command: npm start

    Then, we will run the SPA in another terminal (spa-angular-farmer):

    command: npm start

    After both applications are running, access the application via the web through:
    http://localhost:4200

# Unit Testing
    SPA (spa-angular-farmer)
        The application has a unit test with 98% coverage.
        To run unit tests:

        command: npm test

        Upon completion, coverage will be generated in /build/reports/coverage/html/

    API (api-nodejs-farmer)
        The API has unit testing with 100% controller coverage.
        To run unit tests:

        command: npm test

        Upon completion, coverage will be generated in /coverage/lcov-report/

# Author
    Marcos Rodrigues
    https://github.com/MarcosRFG
    
