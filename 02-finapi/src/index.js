const express = require('express');
const app = express();

/**
 * cpf			- string
 * name 		- string
 * id 			- uuid
 * statement	- array 
 */

app.post("/account", (req, res) => {
	const {cpf, name} = req.body;
	

})

app.listen(3333)