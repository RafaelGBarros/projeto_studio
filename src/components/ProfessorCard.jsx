'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function ProfessorCard({ professor, onOpenModal }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="professor-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onOpenModal(professor)}
    >
      <div className="professor-header">
        <div className="professor-avatar">
          <Image
            src={professor.foto}
            alt={professor.nome}
            width={100}
            height={100}
            className="avatar-image"
          />
        </div>
        <div className="professor-info">
          <h3>{professor.nome}</h3>
          <p className="professor-descricao">{professor.descricaoBreve}</p>
          <div className="professor-modalidades">
            {professor.modalidades.map((modalidade, index) => (
              <span key={index} className="modalidade-tag">{modalidade}</span>
            ))}
          </div>
        </div>
      </div>
      {isHovered && (
        <div className="professor-expandido">
          <div className="expandido-content">
            <div className="expandido-section">
              <h4>Modalidades</h4>
              <ul>
                {professor.modalidades.map((modalidade, index) => (
                  <li key={index}>{modalidade}</li>
                ))}
              </ul>
            </div>
            <div className="expandido-section">
              <h4>Horários de Aula</h4>
              <ul>
                {professor.horarios.map((horario, index) => (
                  <li key={index}>
                    {horario.dia}: {horario.hora}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 