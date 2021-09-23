const {postgresDB} = require('../model/postgres');
const ApiError = require('../error/apiError');

class userController {
    get(requisicao, resposta, next){
        try{
            const postgres = new postgresDB();
            let response = postgres.getUsers(requisicao, resposta);
            return response;
        }
        catch(error){
            resposta.status(503).send(error);
        }
    }
    post(requisicao, resposta, next){




        const {user_name, user_email } = requisicao.body;


        
        //no body filter
        if(JSON.stringify(requisicao.body)===JSON.stringify({})){
            next(ApiError.badRequest({
                "erro": true,
                "detail": 'Request body not found'
                }));
            return;
        }
        //no name or email filter
        if(!user_name || !user_email){
            next(ApiError.badRequest({
                "erro": true,
                "detail": 'User_name or user_email not found'
                }));
            return;
        }
        try{
            const postgre = new postgresDB();
            const response = postgre.insertUser(requisicao, resposta, next);

            return response;     
        }
        catch(error){
            resposta.status(503).send(error);
        }
    }
    put(requisicao, resposta, next){
        const { user_id, user_name, user_email } = requisicao.body;
        //no body filter
        if(JSON.stringify(requisicao.body)===JSON.stringify({})){
            next(ApiError.badRequest({
                "erro": true,
                "detail": 'Request body not found'
                }));
            return;
        }
        //no name, email or id filter
        if(!user_name || !user_email || !user_id){
            next(ApiError.badRequest({
                "erro": true,
                "detail": 'User_name, user_email or user_id not found'
                }));
            return;
        }
        try{
            const postgre = new postgresDB();
            const response = postgre.updateUser(requisicao, resposta, next);
            return response;

        }
        catch(error){
            resposta.status(503).send(error);
        }

    }

    //envia requisicao de delete ao model
    delete(requisicao, resposta, next){
        try{
            const postgre = new postgresDB();
            const response = postgre.deleteUser(requisicao, resposta, next);
            return response;
        }
        catch(error){
            resposta.status(503).send(error);
        }
    }
}

module.exports = new userController();