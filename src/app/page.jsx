'use client'
import Header from '@/components/Header'
import Image from 'next/image'
import React from 'react'

export default function Home() {
  return (
    <section className="home">
      <Header />
      <div className="green-strip">
        <div className="welcome-title">
          <h1>Bem vindos ao nosso Studio!</h1>
        </div>
        <div className="home-content">
          <div className="presentation-text">
            <p>
              Nosso studio nasceu da paixão pela dança e da vontade de criar um espaço 
              acolhedor onde todos possam expressar sua arte. Nossa missão é inspirar e 
              transformar vidas através da dança, oferecendo um ambiente profissional e 
              familiar para todos os amantes da arte do movimento.
            </p>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://wa.me/seunumero" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="home-image">
        <Image
          src="/rogeria_home.png"
          alt="Rogéria Tome"
          width={350}
          height={350}
          priority
        />
      </div>
    </section>
  )
}