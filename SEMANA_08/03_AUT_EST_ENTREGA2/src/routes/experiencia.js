const express = require('express'); 
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const sqlite3 = require('sqlite3').verbose();

const router = express.Router();

var db = new sqlite3.Database('../data/database.db');

router.all("/", (req, res) => {
	res.render("../views/index");
});

router.get('/experiencia', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*');
	var sql = 'SELECT * FROM experiencia ORDER BY nome_da_empresa';
	db.all(sql, [],  (err, rows ) => {
			if (err) {
				throw err;
			}
			res.json(rows);
		});
});

router.post('/insereexperiencia', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 
	sql = "INSERT INTO experiencia (nome_da_empresa, cargo, resumo) VALUES ('" + req.body.nome_da_empresa + "', '" + req.body.cargo + "', '" + req.body.resumo + "')";
	console.log(sql);

	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}	
	});
	res.write('<p>Inserido!</p><a href="/">VOLTAR</a>');
});

router.get('/atualizaexperiencia1', (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 
	sql = "SELECT * FROM experiencia WHERE nome_da_empresa ="+ req.query.nome_da_empresa;
	console.log(sql);
	db.all(sql, [],  (err, rows ) => {
		if (err) {
			throw err;
		}
		res.json(rows);
	});
});

router.post('/atualizaexperiencia', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 
	sql = "UPDATE experiencia SET  cargo = '" + req.body.cargo + "', resumo='" + req.body.resumo + "' WHERE nome_da_empresa ='" + req.body.nome_da_empresa + "'";
	console.log(sql);
	
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}
		res.end();
	});
	res.write('<p>Atualizado!</p><a href="/">VOLTAR</a>');
});

router.get('/removeexperiencia', urlencodedParser, (req, res) => {
	res.statusCode = 200;
	res.setHeader('Access-Control-Allow-Origin', '*'); 
	sql = "DELETE FROM experiencia WHERE nome_da_empresa ='" + req.query.nome_da_empresa + "'";
	console.log(sql);
	db.run(sql, [],  err => {
		if (err) {
		    throw err;
		}
		res.write('<p>Removido!</p><a href="/">VOLTAR</a>');
		res.end();
	});
});

module.exports = router;



