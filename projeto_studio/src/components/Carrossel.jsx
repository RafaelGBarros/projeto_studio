'use client';

import Slider from 'react-slick';
import ItemCarrossel from './ItemCarrossel';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


export default function Carrossel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  //  MOCK DE DADOS
  const dados = [
    {
      titulo: 'Notícia 1',
      descricao: 'Descrição da notícia 1.',
      imagem: '/noticia1.png',
    },
    {
      titulo: 'Destaque 2',
      descricao: 'Destaque do mês.',
      imagem: '/noticia2.png',
    },
    {
      titulo: 'Evento 3',
      descricao: 'Detalhes do próximo evento.',
      imagem: '/noticia3.png',
    }
  ];

  return (
    <div className="carrossel">
      <Slider {...settings}>
        {dados.map((item, index) => (
          <ItemCarrossel
            key={index}
            titulo={item.titulo}
            descricao={item.descricao}
            imagem={item.imagem}
          />
        ))}
      </Slider>
    </div>
  );
}
