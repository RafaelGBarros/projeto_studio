'use client'

export default function ExibeItem({ item, onClose }) {
  return (
    <div className="modal_overlay" onClick={onClose}>
      <div className="modal_content" onClick={e => e.stopPropagation()}>
        <button className="modal_close" onClick={onClose}>×</button>
        
        <div className="modal_header">
          <h2>{item.titulo}</h2>
        </div>

        <div className="modal_body">
          <div className="modal_imagem">
            <img src={item.imagem} alt={item.titulo} />
          </div>

          <div className="modal_info">
            <div className="info_section">
              <h3>Descrição</h3>
              <p>{item.descricao}</p>
            </div>

            {item.data && (
              <div className="info_section">
                <h3>Data</h3>
                <p>{item.data}</p>
              </div>
            )}

            {item.local && (
              <div className="info_section">
                <h3>Local</h3>
                <p>{item.local}</p>
              </div>
            )}

            {item.detalhes && (
              <div className="info_section">
                <h3>Detalhes</h3>
                <p>{item.detalhes}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
} 