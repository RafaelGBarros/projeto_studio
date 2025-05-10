import { useEffect } from 'react';

export default function Principal({ conteudo }) {

  //LOGICA PARA RODAR OS VIDEOS NA PASTA
  useEffect(() => {
    const videoElement = document.getElementById('video-player');

    const videos = [
      '/videos/001.mp4',
      '/videos/002.mp4',
      '/videos/003.mp4',
    ];

    let currentIndex = 0;

    const playNextVideo = () => {
      currentIndex = (currentIndex + 1) % videos.length;
      videoElement.src = videos[currentIndex];
      videoElement.play();
    };

    videoElement.src = videos[currentIndex];
    videoElement.addEventListener('ended', playNextVideo);

    return () => {
      videoElement.removeEventListener('ended', playNextVideo);
    };
  }, []);



  //RETORNO CONDICIONAL - NO PRIMEIRO ACESSO A PAGINA APRESENTRARA OS
  if (!conteudo) {
    return (
      <section className="area_central">
        <main>
        <video id="video-player" width="800" autoPlay muted playsInline loop/>
        </main>
      </section>
    )
  }

  //definicao do estlo
  const estilo = {
    backgroundImage: `url(${conteudo.imagem})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white',
    padding: '40px',
    textShadow: '1px 1px 3px rgba(0,0,0,0.7)'
  };

  return (
    <div className="area_central" style={estilo}>
      <h2>{conteudo.titulo}</h2>
      <p>{conteudo.texto}</p>
      {conteudo.caminho && (
        <a href={conteudo.caminho} target="_blank" rel="noopener noreferrer">
          Saiba mais
        </a>
      )}
    </div>
  )


}
