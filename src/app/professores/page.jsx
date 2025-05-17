'use client'
import { useState } from 'react'
import Header from '@/components/Header'
import ProfessorCard from '@/components/ProfessorCard'
import ProfessorModal from '@/components/ProfessorModal'
import { professores } from '@/data/professores'

export default function Professores() {
  const [professorSelecionado, setProfessorSelecionado] = useState(null);

  const abrirModal = (professor) => {
    setProfessorSelecionado(professor);
  };

  const fecharModal = () => {
    setProfessorSelecionado(null);
  };

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