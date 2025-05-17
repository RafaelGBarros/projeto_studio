'use client';
import { useState } from 'react';
import BotaoVoltar from './BotaoVoltar';

export default function FormCadastro() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    data_nascimento: '',
    mensagem: ''
  });

  const [status, setStatus] = useState({
    loading: false,
    error: null,
    success: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, error: null, success: false });

    try {
      const response = await fetch('http://localhost:3001/api/cadastros', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Erro ao enviar cadastro');
      }

      setStatus({ loading: false, error: null, success: true });
      setFormData({
        nome: '',
        email: '',
        telefone: '',
        data_nascimento: '',
        mensagem: ''
      });
    } catch (error) {
      setStatus({ loading: false, error: error.message, success: false });
    }
  };

  return (
    <div className="container-form">
      <BotaoVoltar />
      <h1>Faça Parte do Nosso Studio</h1>
      <p>Preencha o formulário abaixo para iniciar sua jornada conosco</p>
      
      {status.error && (
        <div className="error-message">
          {status.error}
        </div>
      )}

      {status.success && (
        <div className="success-message">
          Cadastro realizado com sucesso!
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="form-cadastro">
        <div className="campo-form">
          <label htmlFor="nome">Nome Completo</label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
            placeholder="Digite seu nome completo"
          />
        </div>

        <div className="campo-form">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Digite seu melhor e-mail"
          />
        </div>

        <div className="campo-form">
          <label htmlFor="telefone">Telefone</label>
          <input
            type="tel"
            id="telefone"
            name="telefone"
            value={formData.telefone}
            onChange={handleChange}
            required
            placeholder="(00) 00000-0000"
          />
        </div>

        <div className="campo-form">
          <label htmlFor="data_nascimento">Data de Nascimento</label>
          <input
            type="date"
            id="data_nascimento"
            name="data_nascimento"
            value={formData.data_nascimento}
            onChange={handleChange}
            required
          />
        </div>

        <div className="campo-form">
          <label htmlFor="mensagem">Mensagem (opcional)</label>
          <textarea
            id="mensagem"
            name="mensagem"
            value={formData.mensagem}
            onChange={handleChange}
            placeholder="Conte-nos um pouco sobre você e seus objetivos"
            rows="4"
          />
        </div>

        <button 
          type="submit" 
          className="botao-enviar"
          disabled={status.loading}
        >
          {status.loading ? 'Enviando...' : 'Enviar Pré-cadastro'}
        </button>
      </form>
    </div>
  );
} 