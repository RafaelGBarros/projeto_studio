'use client';
import Image from 'next/image';

export default function ProfessorModal({ professor, onClose }) {
  if (!professor) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content professor-modal" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        
        <div className="modal-header">
          <h2>{professor.nome}</h2>
        </div>

        <div className="modal-body">
          <div className="professor-modal-content">
            <div className="professor-modal-avatar">
              <Image
                src={professor.foto}
                alt={professor.nome}
                width={200}
                height={200}
                className="avatar-image"
              />
            </div>

            <div className="professor-modal-info">
              <div className="info-section">
                <h3>Biografia</h3>
                <p>{professor.biografia}</p>
              </div>

              <div className="info-section">
                <h3>Modalidades</h3>
                <ul>
                  {professor.modalidades.map((modalidade, index) => (
                    <li key={index}>{modalidade}</li>
                  ))}
                </ul>
              </div>

              <div className="info-section">
                <h3>Horários de Aula</h3>
                <ul>
                  {professor.horarios.map((horario, index) => (
                    <li key={index}>
                      {horario.dia}: {horario.hora}
                    </li>
                  ))}
                </ul>
              </div>

              {professor.formacao && (
                <div className="info-section">
                  <h3>Formação</h3>
                  <ul>
                    {professor.formacao.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 