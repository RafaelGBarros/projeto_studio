'use client'
import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import ProfessorCard from '@/components/ProfessorCard'
import ProfessorModal from '@/components/ProfessorModal'
import { professores as professoresImagens } from '@/data/professores'

export default function Professores() {
  const [professores, setProfessores] = useState([]);
  const [professorSelecionado, setProfessorSelecionado] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfessores = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/professores');
        if (!response.ok) {
          throw new Error('Erro ao carregar professores');
        }
        const data = await response.json();
        
        // Combina os dados do banco com as imagens da pasta data
        const professoresCombinados = data.map(professor => {
          const professorImagem = professoresImagens.find(p => 
            p.nome.toLowerCase() === professor.nome.toLowerCase()
          );
          
          return {
            ...professor,
            foto: professorImagem?.foto || '/default.jpg',
            modalidades: [professor.modalidade_nome], // Converte para array para manter compatibilidade
            horarios: professorImagem?.horarios || [] // Usa os horários da pasta data se disponível
          };
        });
        
        setProfessores(professoresCombinados);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProfessores();
  }, []);

  const abrirModal = (professor) => {
    setProfessorSelecionado(professor);
  };

  const fecharModal = () => {
    setProfessorSelecionado(null);
  };

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>Erro: {error}</div>;

  return (
    <section className="professores-page">
      <Header />
      <div className="professores-container">
        <h1>Nossos Professores</h1>
        <div className="professores-grid">
          {professores.map((professor) => (
            <ProfessorCard
              key={professor.id}
              professor={professor}
              onOpenModal={abrirModal}
            />
          ))}
        </div>
      </div>
      {professorSelecionado && (
        <ProfessorModal
          professor={professorSelecionado}
          onClose={fecharModal}
        />
      )}
    </section>
  );
}