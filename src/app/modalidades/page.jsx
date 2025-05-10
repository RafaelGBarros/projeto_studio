'use client'
import { useState, useEffect } from 'react'
import CampoSobre from '../../components/CampoModalidades';
import Header from '../../components/Header'

export default function Home() {

  // MOCK DE DADOS
  const dados = [
    {
      titulo: 'Danças Urbanas',
      desc: 'Estilo de dança originado nas Ruas e sua cultura',
      texto: 'As danças urbanas são estilos de dança que surgiram em contextos urbanos, muitas vezes relacionados à cultura de rua e ao movimento hip-hop. Elas envolvem movimentos energéticos, criativos e expressivos, que misturam influências de diversas danças tradicionais com novas abordagens inovadoras. Esses estilos costumam refletir a identidade das comunidades de onde surgem, expressando emoções e histórias de vida por meio do corpo e do ritmo.',
    },
    {
      titulo: 'Estilo Livre',
      desc: 'Danças criativas e espontâneas sem regras fixas',
      texto: 'O estilo livre de dança é caracterizado pela improvisação e liberdade de expressão. Não há coreografia fixa ou regras rígidas, permitindo ao dançarino criar movimentos únicos, muitas vezes baseados em sua própria interpretação da música. Esse estilo é popular em diversas culturas urbanas e está diretamente ligado ao desejo de liberdade, sendo uma forma de conectar corpo e mente com a música de maneira orgânica e espontânea.',
    },
    {
      titulo: 'K-pop',
      desc: 'Dança coreografada do universo musical coreano',
      texto: 'O K-pop, originado na Coreia do Sul, é um gênero musical que também se destaca pelas suas coreografias elaboradas e sincronizadas. As danças de K-pop são meticulosamente planejadas, com movimentos complexos e enérgicos que complementam a música. A dança no K-pop envolve uma mistura de estilos, incluindo pop, hip-hop e até dança moderna, e é um componente essencial dos shows, videoclipes e performances ao vivo dos grupos. É conhecida por sua precisão e energia, cativando fãs de todo o mundo.',
    }
  ];

  return (
    <section>
      <Header />
      <CampoSobre
        titulo={dados[0].titulo}
        desc={dados[0].desc}
        texto={dados[0].texto}
      />
    </section>
  )
}