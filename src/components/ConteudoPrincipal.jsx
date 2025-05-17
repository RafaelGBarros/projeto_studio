'use client';

export default function conteudoPrincipal() {
  return (
    <div className="conteudo-principal">
      <div className="welcome-title">
        <h1>Bem vindos ao Studio RT!</h1>
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
            <a href="https://www.instagram.com/studiodedancart/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://wa.me/12982202593" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 