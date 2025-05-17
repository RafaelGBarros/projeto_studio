'use client'
import Header from '../../components/Header'
import { textoSobre } from '../../data/texto_sobre'
import './page.css'
import { noticiasEventos } from '@/data/noticiasEventos'
import Carrossel from '@/components/Carrossel'

export default function Sobre() {
  return (
    <section className="pagina_sobre">
      <main>
        <Header />
        <h1 className="titulo_sobre">O nosso Studio RT</h1>
        
        <div className="container_sobre">
          <p className="texto_sobre">{textoSobre}</p>
        </div>
        
        <div className="carrossel_sobre">
          <h2>Notícias e Eventos</h2>
          <Carrossel items={noticiasEventos} />
        </div>
      </main>
    </section>
  )
}