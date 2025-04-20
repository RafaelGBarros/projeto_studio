export default function ItemCarrossel({ titulo, descricao, imagem }) {
    return (
      <div className="item-carrossel">
        <img src={imagem} alt={titulo} className="imagem-carrossel" />
        <h3>{titulo}</h3>
        <p>{descricao}</p>
      </div>
    );
  }