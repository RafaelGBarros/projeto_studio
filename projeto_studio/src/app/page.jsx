'use client'
import  Header from '../components/Header'
import Principal from '../components/Princial'
import Carrossel from '../components/Carrossel'
import React, { useState } from 'react'


export default function Home() {
  const [conteudoSelecionado, setConteudoSelecionado] = useState(null);

  return (
    <section className="home">
      <Header />
      <Principal conteudo={conteudoSelecionado} />
      <Carrossel onSelecionar={setConteudoSelecionado}/>
    </section>
  )
}