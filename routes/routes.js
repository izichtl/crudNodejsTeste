const {postgresDB} = require('../classes/postgres');

module.exports = function(app) {

    //RETORNA TODOS OS USUARIOS
    app.get('/user', (requisicao, resposta) =>{
        try{
            const postgres = new postgresDB();
            let response = postgres.getUsers(requisicao, resposta);
            return response;
        }
        catch(error){
            resposta.status(503).send(error);
        }
    });

    //CADASTRA USUARIO
    app.post('/user', (requisicao, resposta ) =>{ 
        try{
            const postgre = new postgresDB();
            const response = postgre.insertUser(requisicao, resposta);
            return response;     
        }
        catch(error){
            resposta.status(503).send(error);
        }
    })

    //ATUALIZA USUARIO
    app.put('/user/:user_id', (requisicao, resposta) => {
        try{
            const postgre = new postgresDB();
            const response = postgre.updateUser(requisicao, resposta);
            return response;

        }
        catch(error){
            resposta.status(503).send(error);
        }
    })

    //DELETE USUARIO
    app.delete('/user/:user_id', (requisicao, resposta) => {
        try{
            const postgre = new postgresDB();
            const response = postgre.deleteUser(requisicao, resposta);
            return response;
        }
        catch(error){
            resposta.status(503).send(error);
        }
    })
    
};