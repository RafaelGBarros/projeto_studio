const nodemailer = require('nodemailer');

// Configuração do transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});

// Função para enviar email de novo cadastro
const enviarEmailNovoCadastro = async (cadastro) => {
  try {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECIPIENT, // Email que receberá as notificações
      subject: 'Novo Cadastro no Studio de Dança',
      html: `
        <h2>Novo Cadastro Realizado</h2>
        <p><strong>Nome:</strong> ${cadastro.nome}</p>
        <p><strong>Email:</strong> ${cadastro.email}</p>
        <p><strong>Telefone:</strong> ${cadastro.telefone}</p>
        <p><strong>Data de Nascimento:</strong> ${new Date(cadastro.data_nascimento).toLocaleDateString('pt-BR')}</p>
        <p><strong>Data do Cadastro:</strong> ${new Date(cadastro.created_at).toLocaleDateString('pt-BR')}</p>
      `
    };

    await transporter.sendMail(mailOptions);
    console.log('Email de notificação enviado com sucesso');
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    throw error;
  }
};

module.exports = {
  enviarEmailNovoCadastro
}; 