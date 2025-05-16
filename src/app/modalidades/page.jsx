'use client'
import { useState } from 'react'
import Header from '@/components/Header'
import ModalidadeCard from '@/components/ModalidadeCard'
import ModalidadeModal from '@/components/ModalidadeModal'

// Mock de dados
const modalidades = [
  {
    id: 1,
    nome: 'Ballet Infantil',
    imagem: '/balletKids.jpg',
    descricao: 'O Ballet Clássico é a base de todas as danças. Desenvolve postura, equilíbrio, força e graciosidade através de movimentos precisos e elegantes.',
    horarios: [
      { dia: 'Segunda e Quarta', hora: '09:00 - 10:30' },
      { dia: 'Terça e Quinta', hora: '16:00 - 17:30' }
    ],
    professores: ['Maria Silva', 'Ana Paula Santos']
  },
  {
    id: 2,
    nome: 'Dancas Urbanas - Adulto',
    imagem: '/DuAdulto.jpg',
    descricao: 'O Jazz é uma dança dinâmica e expressiva que combina elementos técnicos com movimentos mais soltos e interpretação musical.',
    horarios: [
      { dia: 'Segunda e Quarta', hora: '14:00 - 15:30' },
      { dia: 'Sábado', hora: '10:00 - 11:30' }
    ],
    professores: ['Carlos Oliveira', 'Patricia Lima']
  },
  {
    id: 3,
    nome: 'Dança Contemporânea',
    imagem: '/DuMisto.jpg',
    descricao: 'A Dança Contemporânea explora movimentos livres e criativos, mesclando diferentes técnicas e permitindo maior expressão corporal.',
    horarios: [
      { dia: 'Terça e Quinta', hora: '19:00 - 20:30' },
      { dia: 'Sábado', hora: '14:00 - 15:30' }
    ],
    professores: ['Roberto Mendes', 'Juliana Costa']
  },
  {
    id: 4,
    nome: 'DU Kids',
    imagem: '/DuKids.jpg',
    descricao: 'O Hip Hop é um estilo urbano que trabalha ritmo, coordenação e atitude através de movimentos marcantes e coreografias dinâmicas.',
    horarios: [
      { dia: 'Segunda e Quarta', hora: '18:00 - 19:30' },
      { dia: 'Sábado', hora: '16:00 - 17:30' }
    ],
    professores: ['Diego Santos', 'Bruna Oliveira']
  }
];

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