// armazenamento em memória
let produtos = [];
let nextId = 1;

// listar todos os produtos
function listar(req, res) {
    res.status(200).json(produtos);
}

// buscar produto por ID
function buscarPorId(req, res) {
}

// criar novo produto
function criar(req, res) {

}

// atualizar produto
function atualizar(req, res) {
}

// remover produto
function remover(req, res) {
}

module.exports = {
    listar,
    buscarPorId,
    criar,
    atualizar,
    remover
};