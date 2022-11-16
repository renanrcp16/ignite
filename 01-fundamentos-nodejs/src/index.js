const express = require('express');
const app = express();

app.use(express.json())

/**
 * GET - Buscar uma informação dentro do servidor
 * POST - Inserir uma informação no servidor
 * PUT - Alterar uma informação no servidor
 * DELETE - Deletar uma informação no servidor
*/

/**
 * Tipos de parâmetros
 * 
 * Route Params => Identificar um recurso editar/deletar/buscar
 * Query Params => Paginação/Filtro
 * Body Params  => Objetos para inserção/alteração (JSON)
*/

app.get('/courses', (req, res) => {
	const query = req.query;
	// console.log(query);

	return res.json([
		"Curso 1",
		"Curso 2",
		"Curso 3",
	])
})

app.post('/courses', (req, res) => {
	const body = req.body;
	// console.log(body);

	return res.json([
		"Curso 1",
		"Curso 2",
		"Curso 3",
		"Curso 4",
	])
})

app.put('/courses/:id', (req, res) => {
	const { id } = req.params;
	// console.log(id);

	return res.json([
		"Curso 1",
		"Curso 2",
		"Curso 3",
		"Curso 4 Alterado com Put",
	])
})

app.patch('/courses/:id', (req, res) => {
	return res.json([
		"Curso 1",
		"Curso 2 Alterado com Patch",
		"Curso 3",
		"Curso 4 Alterado com Put",
	])
})

app.delete('/courses/:id', (req, res) => {
	return res.json([
		"Curso 1",
		"Curso 2 Alterado com Patch",
		"Curso 4 Alterado com Put",
	])
})

app.listen(3333)