# API de Produtos

Aluno: Bruna da Cruz Bento
Matricula: 202501007511

##Descricao

API REST desenvolvida em Node.js ultilizando Express para gerenciamento de produtos.

A API permite:
- Criar produtos
- Listar produtos
- Buscar produtos por ID
- Atualizar produtos
- Remover produtos 

Dados armazenados em memoria.

## Método	Endpoint	Descrição
GET	/api/v1/produtos	Lista todos os produtos
GET	/api/v1/produtos/:id	Busca um produto pelo ID
POST	/api/v1/produtos	Cria um novo produto
PUT	/api/v1/produtos/:id	Atualiza um produto existente
DELETE	/api/v1/produtos/:id	Remove (desativa) um produto


## Estrutura do Projeot
projeto-bulbe-Bruna
│
├── src
│   │
│   ├── controllers
│   │   └── produtosController.js
│   │
│   ├── routes
│   │   └── produtosRoutes.js
│   │
│   └── server.js
│
├── node_modules
│
├── package.json
├── package-lock.json
├── .gitignore
└── README.md

## Como executar o projeto

1. Instalar dependencias:
npm instal

2. Rodar o servido em mode desenvolvimento:
npm run dev

3. A API estara disponivel em:
http://localhost:3000

## Tecnologias Usadas 
- Node.js
- Express
- Git
- GitHub