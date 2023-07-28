import mysql from "mysql";
require('dotenv').config();


export let pool  = mysql.createPool({
  connectionLimit : 10000,
    host:process.env.DATABASE_HOST,// on rentre l'hôte, l'adresse url où se trouve la bdd
    user:process.env.DATABASE_USER, // identifiant BDD
    password:process.env.DATABASE_PASSWORD, // le password
    database:process.env.DATABASE_NAME, // nom de la base de donnée
});

// permet d'obtenir le resultat des requete sql async
export const asyncQuery = async (sql, params = []) => {
    return new Promise((resolve, reject)=>{
        pool.query(sql,params, (error, result)=>{
            if(error){
                return reject(error);
            }
            return resolve(result);
        });
    });
}
