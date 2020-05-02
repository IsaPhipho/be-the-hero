const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

/**
 *  Rota / Recurso
 */

/**
 *  Métodos HTTP:
 * 
 * GET: buscar / listar informação do backend
 * POST: criar
 * PUT: alterar
 * DELETE: deletar
 */

 /**
 *  Tipos de Parâmetros:
 * 
 * Query Params: parâmetros nomeados enviados na rota após "?" (filtors, paginação)
 * Route params: utilizados para identificar recursos
 * Request Body: corpo da requisição, utilizado para criar ou alterar recursos
 */

 /**
 *  SQL: MySQL, SQLite, PostgreeSQL, Oracle, Microsoft SQL Server
 * NoSQL: Mongo DB, CouchDB, etc.
 */

 /**
 *  Driver: SELECT * FROM users
 * Query Builder: tablet('users').select('*').where()
 * usaremos o query builder knex.js
 */



module.exports = app;