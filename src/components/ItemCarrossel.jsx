

export default function ItemCarrossel({ titulo, descricao, imagem, onClick }) {
  const estilo = {
    backgroundImage: `url(${imagem})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    cursor: 'pointer'
  };

  return (
    <div className="item-carrossel" style={estilo} onClick={onClick}>
      <div className="conteudo">
        <h3>{titulo}</h3>
        <p>{descricao}</p>
      </div>
    </div>
  );
}