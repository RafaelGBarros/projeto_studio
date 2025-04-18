export default function Header() {
    return(

    <header className=" text-white p-4 fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold hover:text-green-400">Studio RT</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:text-green-400">Sobre Nós</a></li>
            <li><a href="#" className="hover:text-green-400">Galeria</a></li>
            <li><a href="#" className="hover:text-green-400">Professores</a></li>
            <li><a href="#" className="hover:text-green-400">Fale Conosco!</a></li>
          </ul>
        </nav>
      </div>
      </header>

      
    )
  }