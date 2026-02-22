import mysql, { Pool } from "mysql2"; 
import dotenv from "dotenv";

dotenv.config();

let pool: Pool | null = null;

export const getPool = (): Pool => {
  if (!pool) {
    pool = mysql.createPool({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      connectionLimit: 10,
    });
  }
  return pool;
};

export const execute = <T>(query: string, params?: any[]): Promise<T> => {
  return new Promise((resolve, reject) => {
    getPool().query(query, params || [], (err, results) => {
      if (err) reject(err);
      else resolve(results as T);
    });
  });
};