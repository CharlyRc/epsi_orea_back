// import mysql from "mysql2";
// import { config } from "dotenv";

// config();

// export let pool = mysql.createPool({
//     connectionLimit: 100,
//     host: process.env.DATABASE_HOST,
//     port: process.env.DATABASE_PORT,
//     user: process.env.DATABASE_USER, // identifiant BDD
//     password: process.env.DATABASE_PASSWORD, // le password
//     database: process.env.DATABASE_NAME, // nom de la base de donnée
// });

// // permet d'obtenir le resultat des requete sql async
// export const asyncQuery = async (sql, params = []) => {
//     return new Promise((resolve, reject) => {
//         pool.query(sql, params, (error, result) => {
//             if (error) {
//                 return reject(error);
//             }
//             return resolve(result);
//         });
//     });
// };
