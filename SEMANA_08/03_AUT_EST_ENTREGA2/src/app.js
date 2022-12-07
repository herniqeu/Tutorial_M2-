const path = require("path");
const express = require("express");
const app = express();

const hostname = '127.0.0.1';
const port = 3050;

const ejs = require("ejs");
const LRU = require("lru-cache");
ejs.cache = new LRU({
	max: 200
});

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../views"));

app.use("/public", express.static(path.join(__dirname, "../public"), {
	// Aqui estamos configurando o cache dos arquivos estáticos... Muito
	// útil em ambientes de produção, mas deve-se ter cuidado durante a
	// fase de desenvolvimento.
	cacheControl: false,
	etag: false,
	maxAge: "30d"
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
	res.header("Cache-Control", "private, no-cache, no-store, must-revalidate");
	res.header("Expires", "-1");
	res.header("Pragma", "no-cache");
	next();
});

app.use("/",require("./routes/experiencia.js"));

app.listen(port, hostname, () => {
    console.log(`Servidor rodando em http://${hostname}:${port}/`);
  });
