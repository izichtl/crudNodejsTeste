# Api Rest - NodeJs
### Stack: Vue, Bootstrap, Express, Postgres
### Host: Heroku | Database: ElephantSQL

---
### Instalação

- Código fonte:
>git clone https://github.com/izichtl/crudNodejsTeste.git

- Instale as dependências:
>npm install

- Rode a aplicação:
> npm run dev / npm start
---
### Database - ElephantSQL

- Cadastre-se ==> www.elephantsql.com

- Crie uma database ==> /Instance

- Crie a tablela users ==> /SQLBrowser

>CREATE TABLE users ( user_id serial PRIMARY KEY, user_name VARCHAR(255) NOT NULL, user_email VARCHAR(255) UNIQUE NOT NULL);

- Copie URL de conexão do Postgres e subistitua no arquivo .env

---
### Rotas

- GET /user Retorna todos os usuários.

- POST /user Cadastra usuário.

- PUT /user/:user_id Atualiza usuário

- DELETE /user/:user_id Remove usuário pelo id.
---
### Padrão JSON

>{
"user_name": "Nome do Usuário",
"user_email": "Email do Usuário"
}
---

#### Falta fazer
- Tratar retorno Front-end. 
- Tratar erros de cadastro. 
---
Desenvolvido por izichtl@gmail.com 