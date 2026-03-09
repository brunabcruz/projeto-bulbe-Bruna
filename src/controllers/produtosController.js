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
    const {nome, descricao, preco, categoria,estoque} = req.body;
    
    if(!nome){
        return res.status(400).json({erro: "O campo 'nome' eh obrigatorio", campo: "mome"});
    }
    if(!descricao){
        return res.status(400).json({erro: "O campo 'descricao eh obrigatorio", campo: "descricao"})
    }
    if(preco==undefined){
        return res.status(400).json({erro:"O campo 'preco eh obrigatorio", campo: "preco"})
    }
    if(!categoria){
        return res.status(400).json({erro:"O campo 'categoria' eh obrigatorio", campo:"categoria"})
    }
    if(estoque===undefined){
        return res.status(400).json({erro:"O campo 'estoque' eh obrigatorio", campo:"estoque"})
    }
    
    const novoProduto ={
        id: nextId++,
        nome,
        descricao,
        preco,
        categoria,
        estoque,
        ativo:true,
        criado_em: new Date().toISOString(),
        atualizado_em: new Date().toISOString()
    }
    produto.push(novoProduto);
    res.status(201).json(novoProduto);
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