'use client'
import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import ModalidadeCard from '@/components/ModalidadeCard'
import ModalidadeModal from '@/components/ModalidadeModal'
import { modalidades as modalidadesImagens } from '@/data/modalidades'

export default function Modalidades() {
  const [modalidades, setModalidades] = useState([]);
  const [modalidadeSelecionada, setModalidadeSelecionada] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchModalidades = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/modalidades`);
        if (!response.ok) {
          throw new Error('Erro ao carregar modalidades');
        }
        const data = await response.json();
        
        // Combina os dados do banco com as imagens da pasta data
        const modalidadesCombinadas = data.map(modalidade => {
          const modalidadeImagem = modalidadesImagens.find(m => 
            m.nome.toLowerCase() === modalidade.nome.toLowerCase()
          );
          
          return {
            ...modalidade,
            imagem: modalidadeImagem?.imagem || '/default.jpg'
          };
        });
        
        setModalidades(modalidadesCombinadas);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchModalidades();
  }, []);

  const abrirModal = (modalidade) => {
    setModalidadeSelecionada(modalidade);
  };

  const fecharModal = () => {
    setModalidadeSelecionada(null);
  };

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>Erro: {error}</div>;

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