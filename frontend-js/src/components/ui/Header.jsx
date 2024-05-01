import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full h-20 bg-neutral-800">
      <div className="w-full h-full max-w-screen-lg px-4 lg:px-0 mx-auto flex items-center justify-between">
        <h1 className="text-white">Projeto ChatGPT - IMT</h1>

        <nav>
          <ul className="w-full flex items-center justify-center gap-8">
            <li className="text-neutral-300 hover:text-neutral-200 transition-all duration-300">
              <Link to="/">Início</Link>
            </li>
            <li className="text-neutral-300 hover:text-neutral-200 transition-all duration-300">
              <Link to="/questionario">Gerador de Avaliações</Link>
            </li>
            <li className="text-neutral-300 hover:text-neutral-200 transition-all duration-300">
              <Link to="/contato">Contato</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
