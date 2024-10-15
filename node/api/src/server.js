require("express-async-errors");

const migrationsRun = require("./database/sqlite/migrations"); //chama o banco de dados
const AppError = require("./utils/AppError");

const express = require('express'); //importa o express 
const routes = require("./routes");

migrationsRun();

const app = express(); //inicializa o express
app.use(express.json());

app.use(routes);

app.use(( error, request, response, next ) => {

    if(error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: "error",
        message: error.message
      });
    }

    console.error(error);

    return response.status(500).json({
     status: "error",
      message: "Internal server error"
  
    });

  });

//endereco da porta onde o node fica observando onde o servidor esta rodando
const PORT = 3333;
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));



//utilizando o get 

/* 
app.get("/message/:id/:user", (request, response) => {
  const { id, user } = request.params;
  
  response.send(`
  Mensagem ID: ${id}.
  Para o usuário: ${user}.
  `);
});

app.get("/users", (request, response) =>{
  const { page, limit } = request.query;

  response.send(`Página: ${page}. Mostrar: ${limit}`)
});

const PORT = 3333;

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
*/