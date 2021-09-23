const { response } = require("express");
const { Pool } = require("pg");

function postgresDB(){
    this.postGresUrl = {
        connectionString: process.env.POSTGRES_URL
    }

}

//RETORNA TODOS OS USERS
postgresDB.prototype.getUsers = async function(requisicao, resposta){
    const pool = new Pool(this.postGresUrl);
    try{
        const allUsers = await pool.query("SELECT * from users WHERE user_id IS NOT NULL");
        resposta.status(200).send(allUsers.rows)

    }
    catch(error){
        resposta.status(400).send(error)
    }
    pool.end();
    
}

//RETORNA TODAS AS CONSULTAS
postgresDB.prototype.getConsultas = async function(requisicao, resposta){
    const pool = new Pool(this.postGresUrl);
    const { user_id } = requisicao.params;
    try{
        const allConsultas = await pool.query("SELECT * from consultas WHERE user_id = ($1)", [user_id]);
        resposta.status(200).send(allConsultas.rows)

    }
    catch(error){
        resposta.status(400).send(error)
    }
    pool.end();
    
}

//INSERI USUARIO
postgresDB.prototype.insertUser = async function(requisicao, resposta){
    const pool = new Pool(this.postGresUrl);
    const { user_name , user_email } = requisicao.body
    
    try{
        const insertUser = await pool.query("INSERT INTO users ( user_name, user_email) VALUES ($1, $2) RETURNING *", [user_name, user_email]);
        resposta.status(200).send(insertUser.rows);
    }
    catch(error){
        resposta.status(400).send(error.detail);
    }   
    pool.end();
}

//INSERI CONSULTA
postgresDB.prototype.insertConsulta = async function(requisicao, resposta){
    const pool = new Pool(this.postGresUrl);
    const { consulta_especialista , consulta_done } = requisicao.body
    const { user_id } = requisicao.params
    
    try{
        const insertConsulta = await pool.query("INSERT INTO consultas ( consulta_especialista, consulta_done, user_id) VALUES ($1, $2, $3) RETURNING *", [consulta_especialista, consulta_done, user_id]);
        resposta.status(200).send(insertConsulta.rows);
    }
    catch(error){
        resposta.status(400).send(error);
    }
    pool.end();
}

//ATUALIZA USER
postgresDB.prototype.updateUser = async function(requisicao, resposta){
    const pool = new Pool(this.postGresUrl);
    const { user_id, user_name, user_email } = requisicao.body;
    
    try{
        const updateUser = await pool.query("UPDATE users SET user_name = ($1), user_email = ($2) WHERE user_id = ($3) RETURNING *", 
        [user_name, user_email, user_id]);
        resposta.status(200).send(updateUser.rows);
    }
    catch(error){
        
        resposta.status(400).send(error);
    }
    pool.end();
}



//DELETA USUÁRIO
postgresDB.prototype.deleteUser = async function (requisicao, resposta){
    const pool = new Pool(this.postGresUrl);
    const {user_id} = requisicao.params;
    console.log(user_id)
    try{
        const deleteUser = await pool.query("DELETE FROM users WHERE user_id = ($1) RETURNING *", 
        [user_id]);
        resposta.status(200).send(deleteUser.rows);
    }
    catch(error){
        resposta.status(400).send(error);
    }
    pool.end();
    
}






module.exports = {
    postgresDB: postgresDB
}