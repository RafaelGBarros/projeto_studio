'use client'
import { useState } from 'react'
import Header from '@/components/Header'
import ModalidadeCard from '@/components/ModalidadeCard'
import ModalidadeModal from '@/components/ModalidadeModal'
import { modalidades } from '@/data/modalidades'

export default function Modalidades() {
  const [modalidadeSelecionada, setModalidadeSelecionada] = useState(null);

  const abrirModal = (modalidade) => {
    setModalidadeSelecionada(modalidade);
  };

  const fecharModal = () => {
    setModalidadeSelecionada(null);
  };

  return (
    <section className="modalidades-page">
      <Header />
      <div className="modalidades-container">
        <h1>Nossas Modalidades</h1>
        <div className="modalidades-grid">
          {modalidades.map((modalidade) => (
            <ModalidadeCard
              key={modalidade.id}
              modalidade={modalidade}
              onOpenModal={abrirModal}
            />
          ))}
        </div>
      </div>
      {modalidadeSelecionada && (
        <ModalidadeModal
          modalidade={modalidadeSelecionada}
          onClose={fecharModal}
        />
      )}
    </section>
  );
}