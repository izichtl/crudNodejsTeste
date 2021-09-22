


const {postgresDB} = require('../classes/postgres');

module.exports = function(app) {

    //GET USERS
    app.get('/users', (requisicao, resposta) =>{
        try{
            const postgres = new postgresDB();
            let response = postgres.getUsers(requisicao, resposta);
            return response
            
        }
        catch(error){
            resposta.status(503).send(error);
        }
    });

    //GET CONSULTAS
    app.get('/consultas/:user_id', (requisicao, resposta) =>{
        try{
            const postgres = new postgresDB();
            let response = postgres.getConsultas(requisicao, resposta);
            return response
            
        }
        catch(error){
            resposta.status(503).send(error);
        }
    });

    //POST USER
    app.post('/insertUser', (requisicao, resposta ) =>{ 
        
        try{
            const postgre = new postgresDB();
            const response = postgre.insertUser(requisicao, resposta);
            return response
            
        }
        catch(error){
            resposta.status(503).send(error);
        }
    })

    //POST CONSULTA
    app.post('/consulta/:user_id', (requisicao, resposta) => {
        try{
            const postgre = new postgresDB();
            const response = postgre.insertConsulta(requisicao, resposta);
            return response

        }
        catch(error){
            resposta.status(503).send(error);
        }
    })

    //UPDATE CONSULTA
    app.patch('/consulta/:user_id/:consulta_id', (requisicao, resposta) => {
        try{
            const postgre = new postgresDB();
            const response = postgre.updateConsulta(requisicao, resposta);
            return response

        }
        catch(error){
            resposta.status(503).send(error);
        }
    })

    //DELETE CONSULTA
    app.delete('/consulta/:user_id/:consulta_id', (requisicao, resposta) => {
        try{
            const postgre = new postgresDB();
            const response = postgre.deleteConsulta(requisicao, resposta);
            return response
        }
        catch(error){
            resposta.status(503).send(error);
        }
    })
    
};