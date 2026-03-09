const express = require('express'); //importa o express
const app = express(); //aplica o express
const produtosRoutes = require('./routes/produtos'); //importa as rotas e define os endpoits da API

//middleware para aceitar JSON
app.use(express.json()); //para requisicao de POST e PUT

//middleware de log, registra cada requisicao
app.use((req,res,next) => {
	const timestamp = new Date().toISOString(); //data e hora
	console.log(`${timestamp} - ${req.method} ${req.url}`); //printa horario,metodo,e url
	next();
});

app.use('/api/v1/produtos', produtosRoutes); //define a rota, o prefixo delas

//midleware de erro global, erro na aplicacao
app.use((err,req,res,next) =>{
	console.error(err.stack); //erro de tudo
	res.status(500).json({ //erro interno
		erro: err.message
	});
});

//iniciar servidor
app.listen(3000, () => {
	console.log("Servidor rodando na porta 3000"); //pra saber que ta tudo iniciado certo
});
