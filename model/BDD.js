import mysql from "mysql2";
import { config } from 'dotenv';

config();


class BDD {
    constructor() {
        this.pool = mysql.createPool({
            connectionLimit: 100,
            host: process.env.DATABASE_HOST,
            port: process.env.DATABASE_PORT,
            user: process.env.DATABASE_USER, // identifiant BDD
            password: process.env.DATABASE_PASSWORD, // le password
            database: process.env.DATABASE_NAME, // nom de la base de donnée
        });
    }

    async asyncQuery(sql, params = []) {
        return new Promise((resolve, reject) => {
            this.pool.query(sql, params, (error, elements) => {
                if (error) {
                    return reject(error);
                }
                return resolve(elements);
            });
        });
    }
}



export default BDD
