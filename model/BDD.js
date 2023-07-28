import mysql from "mysql";
require('dotenv').config();


class BDD {
    constructor(){
        this.pool = mysql.createPool({
            connectionLimit : 10000,
            host:process.env.DATABASE_HOST,// on rentre l'hôte, l'adresse url où se trouve la bdd
            user:process.env.DATABASE_USER, // identifiant BDD
            password:process.env.DATABASE_PASSWORD, // le password
            database:process.env.DATABASE_NAME, // nom de la base de donnée
        });
    }
    
    async asyncQuery(sql, params = []){
        return new Promise((resolve, reject)=>{
            this.pool.query(sql,params, (error, elements)=>{
                if(error){
                    return reject(error);
                }
                return resolve(elements);
            });
        });
    }
}

export default BDD