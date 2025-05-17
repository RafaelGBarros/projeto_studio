'use client'

export default function ItemCarrossel({ item, onOpenModal }) {
  return (
    <div className="item_carrossel" onClick={() => onOpenModal(item)}>
      <div className="item_imagem">
        <img src={item.imagem} alt={item.titulo} />
      </div>
      <div className="item_conteudo">
        <h3 style={{fontWeight: 'normal'}}>{item.titulo}</h3>
        <p>{item.descricao}</p>
      </div>
    </div>
  )
} 