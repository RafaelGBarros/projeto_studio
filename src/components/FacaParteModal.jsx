'use client';
import { useState } from 'react';

export default function FacaParteModal({ onClose }) {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    modalidade: '',
    mensagem: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui será implementada a lógica de envio para o banco de dados
    console.log('Dados do formulário:', formData);
    onClose(); // Fecha o modal após o envio
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content faca-parte-modal" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        
        <div className="modal-header">
          <h2>Faça Parte do Nosso Studio</h2>
        </div>

        <div className="modal-body">
          <p>Preencha o formulário abaixo para iniciar sua jornada conosco</p>
          
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
              <label htmlFor="modalidade">Modalidade de Interesse</label>
              <select
                id="modalidade"
                name="modalidade"
                value={formData.modalidade}
                onChange={handleChange}
                required
              >
                <option value="">Selecione uma modalidade</option>
                <option value="ballet">Ballet</option>
                <option value="jazz">Jazz</option>
                <option value="contemporaneo">Contemporâneo</option>
                <option value="hiphop">Hip Hop</option>
                <option value="zumba">Zumba</option>
              </select>
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

            <button type="submit" className="botao-enviar">
              Enviar Pré-cadastro
            </button>
          </form>
        </div>
      </div>
    </div>
  );
} 