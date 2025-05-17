const errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  // Erro de validação
  if (err.name === 'ValidationError') {
    return res.status(400).json({
      error: 'Erro de validação',
      details: err.message
    });
  }

  // Erros do MySQL
  if (err.code) {
    switch (err.code) {
      case 'ER_DUP_ENTRY':
        return res.status(409).json({
          error: 'Conflito',
          details: 'Registro já existe'
        });
      case 'ER_NO_REFERENCED_ROW':
        return res.status(400).json({
          error: 'Erro de referência',
          details: 'Registro referenciado não existe'
        });
      case 'ER_DATA_TOO_LONG':
        return res.status(400).json({
          error: 'Dados inválidos',
          details: 'Dados excedem o tamanho máximo permitido'
        });
      case 'ER_BAD_NULL_ERROR':
        return res.status(400).json({
          error: 'Dados inválidos',
          details: 'Campo obrigatório não preenchido'
        });
    }
  }

  // Erro padrão
  res.status(500).json({
    error: 'Erro interno do servidor',
    details: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
};

module.exports = errorHandler; 