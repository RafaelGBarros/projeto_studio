'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function ModalidadeCard({ modalidade, onOpenModal }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="modalidade-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onOpenModal(modalidade)}
    >
      <div className="card-image">
        <Image
          src={modalidade.imagem}
          alt={modalidade.nome}
          width={400}
          height={300}
          objectFit="cover"
        />
      </div>
      <div className="card-content">
        <h3>{modalidade.nome}</h3>
        {isHovered && (
          <div className="card-description">
            <p>{modalidade.descricao}</p>
          </div>
        )}
      </div>
    </div>
  );
} 