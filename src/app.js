const express = require('express');
const app = express();
const produtosRoutes = require('./routes/produtos');

//middleware para aceitar JSON
app.use(express.json());

//middleware de log 
app.use((req,res,next) => {
	const timestamp = new Date().toISOString();
	console.log(`${timestamp} - ${req.method} ${req.url}`);
	next();
});

app.use('/api/v1/produtos', produtosRoutes);

//midleware de erro global
app.use((err,req,res,next) =>{
	console.error(err.stack);
	res.status(500).json({
		erro: err.message
	});
});

//iniciar servidor
app.listen(3000, () => {
	console.log("Servidor rodando na porta 3000");
});
