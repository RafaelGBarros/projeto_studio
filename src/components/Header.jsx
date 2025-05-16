'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import FacaParteModal from './FacaParteModal';

export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false);
  const [modalAberto, setModalAberto] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setMenuAberto(!menuAberto);
  };

  const navegarPara = (caminho) => {
    if (caminho === '/faca_parte') {
      setModalAberto(true);
    } else {
      router.push(caminho);
    }
    setMenuAberto(false);
  };

  return (
    <>
      <header>
        <div className="container">
          <div className="campo_logo" onClick={() => router.push('/')}>
            <Image
              className="logo_img"
              src="/logo_sem_fundo.png"
              alt="Logo Studio"
              width={80}
              height={80}
              priority
            />
            <div className="logo_texto desktop-only">
              <h1>Studio de Dança</h1>
              <p>arte em movimento</p>
            </div>
          </div>

          <nav>
            <button 
              className="menu-hamburguer"
              onClick={toggleMenu}
              aria-label="Abrir menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>

            <ul className={`menu-links ${menuAberto ? 'menu-links-aberto' : ''}`}>
              <li><a onClick={() => navegarPara('/modalidades')}>Modalidades</a></li>
              <li><a onClick={() => navegarPara('/professores')}>Professores</a></li>
              <li><a onClick={() => navegarPara('/sobre')}>Sobre</a></li>
              <li><a onClick={() => navegarPara('/faca_parte')}>Faça Parte</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {modalAberto && (
        <FacaParteModal onClose={() => setModalAberto(false)} />
      )}
    </>
  );
}