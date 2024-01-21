## Gerenciamento Ramificações do Sistema

- master
  - **Descrição**
    - Branch principal do projeto

- staging
  - **Descrição**
    - Branch de homologação

- feature/creating-entity-category
  - **Descrição**
    - Criando estrutura entity category no core.

- feature/creating-validation-entity-category
  - **Descrição**
    - Criando estrutura de validação da entity category.

- feature/creating-repository-entity-category
  - **Descrição**
    - Criando estrutura do repostório da entity category.

- feature/creating-use-cases-entity-category
  - **Descrição**
    - Criando estrutura de use-cases da entity category no core.

- feature/creating-integration-core-application-with-nestjs
  - **Descrição**
    - Integrando estrutura core da aplicação no framework nestjs.

- feature/creating-category-rest-api-in-memory
  - **Descrição**
    - Criando estrutura rest api in-memory no core da aplicação.

- feature/creating-integration-database-and-sequelize
  - **Descrição**
    - Implementando sequelize e integrando na estrutura de database.

- feature/creating-configuring-execution-environment
  - **Descrição**
    - Implementando e configurando ambiente de execução do sistema.

- feature/integrating-categories-module
  - **Descrição**
    - Integrando modulo categories do framework nestjs no sistema.

- feature/finalization-categories-module-and-testing-end-to-end
  - **Descrição**
    - Finalizando modulo categories e implementando testing end-to-end.

## Mapeamento de Features do Sistema

- Montagem do ambiente de desenvolvimento (Docker e IDE)
  - **Descrição**
    - Lorem ipsum.

- Criar uma aplicação TypeScript
  - **Descrição**
    - Lorem ipsum.

- Criar entidade de Categoria
  - **Descrição**
    - Lorem ipsum.

- Criar testes
  - **Descrição**
    - Lorem ipsum.

- Criar Casos de Uso e Repositório
  - **Descrição**
    - Lorem ipsum.

- Criar testes
  - **Descrição**
    - Lorem ipsum.

- Repetir para as outras entidades Genre, Cast member Video
  - **Descrição**
    - Lorem ipsum.

- Nest.js - Criação de API Rest
  - **Descrição**
    - Lorem ipsum.
 
- Integração com RabbitMQ e Encoder de vídeo
  - **Descrição**
    - Lorem ipsum.

- Testes E2E (End-to-End)
  - **Descrição**
    - Lorem ipsum.

## Entidade Genre

- O que são agregados? Quais diferenças entre entidades e agregados
  - **Descrição**
    - Lorem ipsum.

- Relacionamentos entre agregados
  - **Descrição**
    - Lorem ipsum.

- Criação de entidade Genre
  - **Descrição**
    - Lorem ipsum.

- Personalização de IDs das entidades
  - **Descrição**
    - Lorem ipsum.

- Melhoria do padrão Either
  - **Descrição**
    - Lorem ipsum.

- Unit of work
  - **Descrição**
    - Lorem ipsum.

- Como lidar com repositórios e relacionamentos
  - **Descrição**
    - Lorem ipsum.

- Como lidar com use cases e relacionamentos
  - **Descrição**
    - Lorem ipsum.

- Criar testes
  - **Descrição**
    - Lorem ipsum.

## api-http

###
GET http://localhost:3000/categories

###
GET http://localhost:3000/categories/afc44bd5-c436-4e35-8b89-9481e7182969

###
POST http://localhost:3000/categories
Content-Type: application/json

{
    "name": "Movie"
}

###
PUT http://localhost:3000/categories/afc44bd5-c436-4e35-8b89-9481e7182969
Content-Type: application/json

{
    "name": "Movie111111"
}

###
DELETE  http://localhost:3000/categories/afc44bd5-c436-4e35-8b89-9481e7182969
Content-Type: application/json