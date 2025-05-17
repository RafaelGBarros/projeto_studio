const express = require('express');
const cors = require('cors');
const { query } = require('./config/database');
const errorHandler = require('./middlewares/errorHandler');
const { enviarEmailNovoCadastro } = require('./services/emailService');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Rotas
app.get('/api/modalidades', async (req, res, next) => {
  try {
    const modalidades = await query(`
      SELECT m.*, 
        GROUP_CONCAT(DISTINCT p.nome) as professores
      FROM modalidades m
      LEFT JOIN professores p ON p.modalidade_id = m.id
      GROUP BY m.id
    `);
    
    // Formata os professores em array
    const modalidadesFormatadas = modalidades.map(modalidade => ({
      ...modalidade,
      professores: modalidade.professores ? modalidade.professores.split(',') : []
    }));
    
    res.json(modalidadesFormatadas);
  } catch (error) {
    next(error);
  }
});

app.get('/api/professores', async (req, res, next) => {
  try {
    const professores = await query(`
      SELECT 
        p.*,
        m.nome as modalidade_nome,
        m.descricao as modalidade_descricao
      FROM professores p 
      LEFT JOIN modalidades m ON p.modalidade_id = m.id
    `);
    res.json(professores);
  } catch (error) {
    next(error);
  }
});

app.post('/api/cadastros', async (req, res, next) => {
  try {
    const { nome, email, telefone, data_nascimento } = req.body;
    
    // Insere o cadastro no banco
    const result = await query(
      'INSERT INTO cadastros (nome, email, telefone, data_nascimento) VALUES (?, ?, ?, ?)',
      [nome, email, telefone, data_nascimento]
    );

    // Busca o cadastro completo para enviar no email
    const [cadastro] = await query(
      'SELECT * FROM cadastros WHERE id = ?',
      [result.insertId]
    );

    // Envia o email de notificação
    await enviarEmailNovoCadastro(cadastro);

    res.status(201).json({ id: result.insertId, message: 'Cadastro realizado com sucesso' });
  } catch (error) {
    next(error);
  }
});

app.get('/api/noticias', async (req, res, next) => {
  try {
    const noticias = await query('SELECT * FROM noticias ORDER BY created_at DESC');
    res.json(noticias);
  } catch (error) {
    next(error);
  }
});

// Middleware de tratamento de erros
app.use(errorHandler);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
}); 