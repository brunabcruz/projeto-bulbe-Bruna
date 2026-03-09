// armazenamento em memória
let produtos = [];
let nextId = 1;

// listar todos os produtos
function listar(req, res) {
    res.status(200).json(produtos);
}

// buscar produto por ID
function buscarPorId(req, res) {
    const id = parseInt(res.params.id); //pegar url e transformar em numero
    const produto = produtos.find(p=> p.id ===id);
    
    if(!produto){ //se nao existir
        return res.status(404).json({
            erro: "Produto nao encontrado"
        });
    }
    res.status(200).json(produto); //quando produto encontrado
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