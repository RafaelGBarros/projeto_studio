import Link from 'next/link'

export default function Header() {
  return (

    <header className=" text-white p-4 fixed w-full z-10">
      <div className="container">

        <div className="campo_logo" >
          
          <Link href="/">
            <img src="/logo_sem_fundo.png" alt="Logo" style={{ cursor: 'pointer' }} />
          </Link>

          <div className="logo_texto">
            <h1>Studio RT</h1>
            <p>Escola de Dança</p>
          </div>
        </div>

        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/sobre">Sobre Nós</Link></li>
            <li><Link href="/modalidades">Modalidaes</Link></li>
            <li><Link href="professores">Professores</Link></li>
            <li><Link href="/pre_cadastro">Pre-Cadastro</Link></li>
          </ul>
        </nav>
      </div>
    </header>


  )
}