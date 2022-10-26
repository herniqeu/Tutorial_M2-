const express = require('express'); 
    const app = express();

    const hostname = '127.0.0.1';
    const port = 3000;
    const sqlite3 = require('sqlite3').verbose();
    const DBPATH = 'database.db'; //use o nome que você achar melhor para o banco de dados

    app.use(express.json());
    app.get('/dados_pessoais', (req, res) => {
        res.statusCode = 200;
        res.setHeader('Access-Control-Allow-Origin', '*'); 
        var db = new sqlite3.Database(DBPATH); // Abre o banco
        //console.log(db)
        var sql = 'SELECT * FROM dados_pessoais';
        db.all(sql, [],  (err, rows ) => {
            if (err) {
                throw err;
            }
            res.json(rows);
        });
        db.close(); // Fecha o banco
    });
    app.get('/experiencia', (req, res) => {
        res.statusCode = 200;
        res.setHeader('Access-Control-Allow-Origin', '*'); 
        var db = new sqlite3.Database(DBPATH); // Abre o banco
        //teste de git
        var sql = 'SELECT * FROM experiencia';
        db.all(sql, [],  (err, rows ) => {
            if (err) {
                throw err;
            }
            res.json(rows);
        });
        db.close(); // Fecha o banco
    });
    app.get('/formacao', (req, res) => {
        res.statusCode = 200;
        res.setHeader('Access-Control-Allow-Origin', '*'); 
        var db = new sqlite3.Database(DBPATH); // Abre o banco
        console.log(db)
        var sql = 'SELECT * FROM formacao';
        db.all(sql, [],  (err, rows ) => {
            if (err) {
                throw err;
            }
            res.json(rows);
        });
        db.close(); // Fecha o banco
    });
    app.get('/habilidade', (req, res) => {
        res.statusCode = 200;
        res.setHeader('Access-Control-Allow-Origin', '*'); 
        var db = new sqlite3.Database(DBPATH); // Abre o banco
        console.log(db)
        var sql = 'SELECT * FROM habilidade';
        db.all(sql, [],  (err, rows ) => {
            if (err) {
                throw err;
            }
            res.json(rows);
        });
        db.close(); // Fecha o banco
    });
    app.get('/realizacoes', (req, res) => {
        res.statusCode = 200;
        res.setHeader('Access-Control-Allow-Origin', '*'); 
        var db = new sqlite3.Database(DBPATH); // Abre o banco
        console.log(db)
        var sql = 'SELECT * FROM realizacoes';
        db.all(sql, [],  (err, rows ) => {
            if (err) {
                throw err;
            }
            res.json(rows);
        });
        db.close(); // Fecha o banco
    });

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});