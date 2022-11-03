const express = require('express'); 
    const app = express();

    const hostname = '127.0.0.1';
    const port = 3000; 
    const sqlite3 = require('sqlite3').verbose();
    const DBPATH = 'database.db'; 

    app.use(express.json());
    app.get('/dados_pessoais', (req, res) => {
        res.statusCode = 200;
        res.setHeader('Access-Control-Allow-Origin', '*'); 
        var db = new sqlite3.Database(DBPATH); 
        //console.log(db)
        var sql = 'SELECT * FROM dados_pessoais';
        db.all(sql, [],  (err, rows ) => {
            if (err) {
                throw err;
            }
            res.json(rows);
        });
        db.close(); 
    });
    app.get('/experiencia', (req, res) => {
        res.statusCode = 200;
        res.setHeader('Access-Control-Allow-Origin', '*'); 
        var db = new sqlite3.Database(DBPATH); 
        var sql = 'SELECT * FROM experiencia';
        db.all(sql, [],  (err, rows ) => {
            if (err) {
                throw err;
            }
            res.json(rows);
        });
        db.close(); 
    });
    app.get('/formacao', (req, res) => {
        res.statusCode = 200;
        res.setHeader('Access-Control-Allow-Origin', '*'); 
        var db = new sqlite3.Database(DBPATH); 
        console.log(db)
        var sql = 'SELECT * FROM formacao';
        db.all(sql, [],  (err, rows ) => {
            if (err) {
                throw err;
            }
            res.json(rows);
        });
        db.close(); 
    });
    app.get('/habilidade', (req, res) => {
        res.statusCode = 200;
        res.setHeader('Access-Control-Allow-Origin', '*'); 
        var db = new sqlite3.Database(DBPATH); 
        console.log(db)
        var sql = 'SELECT * FROM habilidade';
        db.all(sql, [],  (err, rows ) => {
            if (err) {
                throw err;
            }
            res.json(rows);
        });
        db.close(); 
    });
    app.get('/realizacoes', (req, res) => {
        res.statusCode = 200;
        res.setHeader('Access-Control-Allow-Origin', '*'); 
        var db = new sqlite3.Database(DBPATH); 
        console.log(db)
        var sql = 'SELECT * FROM realizacoes';
        db.all(sql, [],  (err, rows ) => {
            if (err) {
                throw err;
            }
            res.json(rows);
        });
        db.close(); 
    });

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

//------------------------

app.get('/dados_pessoais', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    var sql = 'SELECT * FROM dados_pessoais';
    db.all(sql, [],  (err, rows ) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
    db.close(); // Fecha o banco
  });

// INSERT experiências
app.post('/inseredados_pessoais', urlencodedParser, (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    sql = "INSERT INTO experiências (nome, endereco, telefone, email) VALUES ('" + req.body.nome + "', '" + req.body.endereco + "', " + req.body.telefone + "', " + req.body.email + "')";
    console.log(sql);
    db.run(sql, [],  err => {
        if (err) {
            throw err;
        }	
    });
    db.close(); // Fecha o banco
    res.end();
});

// SELECT experiência conforme o cargo
   app.get('/selectdados_pessoais', (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    sql = "SELECT * FROM dados_pessoais WHERE cod_dados_pessoais="+ req.body.cod_dados_pessoais;
    console.log(sql);
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    db.all(sql, [],  (err, rows ) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
    db.close(); // Fecha o banco
});

// UDPATE experiências
app.put('/atualizadados_pessoais', urlencodedParser, (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    sql = "UPDATE OR IGNORE dados_pessoais  SET cod_dados_pessoais='" + req.body.cod_dados_pessoais + "',nome='" + req.body.nome + "', endereco = '" + req.body.endereco + "' , telefone='" + req.body.telefone + "' , email='" + req.body.email + "'" ;
    console.log(sql);
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    db.run(sql, [],  err => {
        if (err) {
            throw err;
        }
        res.end();
    });
    db.close(); // Fecha o banco
});

// DELETE experiência
app.delete('/removedados_pessoais', urlencodedParser, (req, res) => {
    res.statusCode = 200;
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    sql = "DELETE FROM dados_pessoais WHERE cod_dados_pessoais="+ req.body.cod_dados_pessoais;
    console.log(sql);
    var db = new sqlite3.Database(DBPATH); // Abre o banco
    db.run(sql, [],  err => {
        if (err) {
            throw err;
        }
        res.end();
    });
    db.close(); // Fecha o banco
});