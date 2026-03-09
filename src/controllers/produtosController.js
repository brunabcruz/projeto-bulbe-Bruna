// armazenamento em memória
let produtos = []; //armazena os produtos na memoria
let nextId = 1; // vai fazer os id serem criados

// listar todos os produtos
function listar(req, res) {
    res.status(200).json(produtos); //tods os produtos com status 200
}

// buscar produto por ID
function buscarPorId(req, res) {
    const id = parseInt(req.params.id);//pegar url e transformar em numero
    const produto = produtos.find(p=> p.id ===id); //buscar um id no array
    
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
    
    //vai fazer a validacao das propriedades do produto
    if(!nome){
        return res.status(400).json({erro: "O campo 'nome' eh obrigatorio", campo: "nome"});
    }
    if(!descricao){
        return res.status(400).json({erro: "O campo 'descricao' eh obrigatorio", campo: "descricao"})
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
        id: nextId++, //definir o id
        nome,
        descricao,
        preco,
        categoria,
        estoque,
        ativo:true,
        criado_em: new Date().toISOString(),
        atualizado_em: new Date().toISOString()
    }
    produtos.push(novoProduto); //adiciona o produto do array
    res.status(201).json(novoProduto); //retorna o profuto que acabou de ser criado
}

// atualizar produto
function atualizar(req, res) {
    const id= parseInt(req.params.id); //pega o id
    const produto=produtos.findIndex(p=>p.id === id); //procura o id

    if(!produtos){ //id nao existe
        return res.status(404).json({erro:"Produto nao encontrado"});
    }
    //dados que foram aviados coletados
    const {nome, descricao, preco, categoria, estoque}= req.body;
    //atualiza as propriedades quando elas sao enviadas
    if(nome!==undefined)produto.nome=nome;
    if(descricao!==undefined)produto.descricao=descricao;
    if(preco!==undefined)produto.preco=preco;
    if(categoria!==undefined)produto.categoria=categoria;
    if (estoque !== undefined) produto.estoque = estoque;

    produtos[index].atualizado_em = new Date().toISOString(); //data de alteracao eh modificada pra ultima alteracao
    res.status(200).json(produtos[index]); //atualiza o produto
}

// remover produto
function remover(req, res) {
    const id=parseInt(req.params.id); //pega o id
    const index =produtos.findIndex(p=>p.id===id); //procura o id

    if(index === -1){
        return res.status(404).json({erro:"Produto nao encontrado"});
    }
    produto.splice(index,1) //remove o produto da lista
    res.status(204).send(); //retorna com item removido
}

//lista as funcoes para usar
module.exports = {
    listar,
    buscarPorId,
    criar,
    atualizar,
    remover
};