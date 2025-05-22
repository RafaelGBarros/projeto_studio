import SocialLinks from './SocialLinks';

export default function ConteudoPrincipal() {
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
          <SocialLinks />
        </div>
      </div>
    </div>
  );
} 