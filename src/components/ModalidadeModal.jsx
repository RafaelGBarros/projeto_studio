'use client';

export default function ModalidadeModal({ modalidade, onClose }) {
  if (!modalidade) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        
        <div className="modal-header">
          <h2>{modalidade.nome}</h2>
        </div>

        <div className="modal-body">
          <div className="modal-image">
            <img src={modalidade.imagem} alt={modalidade.nome} />
          </div>

          <div className="modal-info">
            <div className="info-section">
              <h3>Descrição</h3>
              <p>{modalidade.descricao}</p>
            </div>

            <div className="info-section">
              <h3>Horários</h3>
              <ul>
                {modalidade.horarios.map((horario, index) => (
                  <li key={index}>
                    {horario.dia}: {horario.hora}
                  </li>
                ))}
              </ul>
            </div>

            <div className="info-section">
              <h3>Professores</h3>
              <ul>
                {modalidade.professores.map((professor, index) => (
                  <li key={index}>{professor}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 