// Exemplo de configuração do banco de dados
// Você pode usar MongoDB, PostgreSQL, MySQL, etc.

const mysql = require('mysql2/promise');
require('dotenv').config();

// Configuração do pool de conexões
const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 3306,
  database: process.env.DB_NAME || 'studio_db',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Teste de conexão
const testConnection = async () => {
  try {
    const connection = await pool.getConnection();
    console.log('Conectado ao banco de dados MySQL com sucesso!');
    connection.release();
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados:', error);
  }
};

testConnection();

// Função para executar queries
const query = async (sql, params) => {
  try {
    const [results] = await pool.execute(sql, params);
    return results;
  } catch (error) {
    console.error('Erro na execução da query:', error);
    throw error;
  }
};

module.exports = {
  query,
  pool
}; 