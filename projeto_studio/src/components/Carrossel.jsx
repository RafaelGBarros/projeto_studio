'use client';
import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import ItemCarrossel from './ItemCarrossel';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Carrossel() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  //  MOCK DE DADOS
  const dados = [
    {
      titulo: 'RT sobe a Serra! Eventos de Outubro',
      descricao: 'Tudo que rolou durante nossa participacao no evento CHRVT em campos de Jordão.',
      imagem: '/noticia1.png',
      texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      caminho: '/',
    },
    {
      titulo: 'Bem vindos, Novos integrantes!',
      descricao: 'Sai hoje, Resultado de nossa audição para novos integrantes 2025',
      imagem: '/noticia2.png',
      texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      caminho: '/',
    },
    {
      titulo: 'Ingressos a Venda! Favela Raizes',
      descricao: 'Abrimos as vendas para nosso espetaculo, garanta ja o seu!',
      imagem: '/noticia3.png',
      texto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      caminho: '/',
    }
  ];

  if (isMobile) {
    return (
      <div className="carrossel-container">
        {dados.map((item, index) => (
          <ItemCarrossel
            key={index}
            titulo={item.titulo}
            descricao={item.descricao}
          />
        ))}
      </div>
    );
  }

  return (
    <div className="carrossel">
      <Slider {...settings}>
        {dados.map((item, index) => (
          <ItemCarrossel
            key={index}
            titulo={item.titulo}
            descricao={item.descricao}
          />
        ))}
      </Slider>
    </div>
  );
}
