import { Link } from "react-router-dom";

import logo from "/logo-604x679.png";
import { FaFilePdf } from "react-icons/fa";

const MainPage = () => {
  return (
    <div className="w-full bg-white">
      <div className="w-full min-h-[80vh] max-w-screen-lg px-6 lg:px-0 mx-auto flex flex-col items-start justify-center gap-6 py-12">
        <div className="w-full flex items-center justify-center gap-6">
          <img src={logo} width={604 / 4} height={679 / 4} alt="logo" />
          <h2 className="font-bold text-2xl text-center">
            Gerador
            <br /> de
            <br /> Avaliações
          </h2>
        </div>
        <div className="w-full bg-yellow-100 p-2">
          A fazer:
          <ul>
            <li>Validar campos do formulário no front-end</li>
            <li>Gerar testes unitários para alguns itens do front-end</li>
            <li>Ajustar a página de contato</li>
            <li>Salvar a pesquisa e o retorno no banco de dados</li>
          </ul>
        </div>
        <p className="leading-7 mb-3">
          Apresentamos a nova ferramenta para educadores: o Gerador de
          Avaliações, uma aplicação desenhada para transformar a maneira como os
          professores preparam testes e provas.
        </p>
        <p className="leading-7 mb-3">
          Com uma interface amigável e recursos automatizados, nossa plataforma
          permite aos educadores criar avaliações personalizadas rapidamente,
          abrangendo uma ampla gama de disciplinas e níveis escolares. Não
          importa se você precisa de um teste rápido de matemática ou uma
          avaliação complexa de história, o Gerador de Avaliações oferece
          templates adaptáveis que garantem a qualidade e relevância dos
          conteúdos, otimizando o tempo e melhorando o desempenho dos alunos.
        </p>

        <div className="w-full bg-neutral-100 border border-neutral-300 p-4 rounded-md">
          <h2 className="mb-2">
            Abaixo você encontra alguns exemplos de avaliações geradas com esta
            ferramenta:
          </h2>
          <ul className="w-full flex flex-col items-start">
            <li>
              <a
                href="/exemplos/avaliacao-1.pdf"
                target="_blank"
                className="flex items-center gap-2 hover:underline"
              >
                <FaFilePdf className="fill-rose-700" />
                Exemplo 1
              </a>
            </li>
            <li>
              <a
                href="/exemplos/avaliacao-2.pdf"
                target="_blank"
                className="flex items-center gap-2 hover:underline"
              >
                <FaFilePdf className="fill-rose-700" /> Exemplo 2
              </a>
            </li>
            <li>
              <a
                href="/exemplos/avaliacao-3.pdf"
                target="_blank"
                className="flex items-center gap-2 hover:underline"
              >
                <FaFilePdf className="fill-rose-700" />
                Exemplo 3
              </a>
            </li>
            <li>
              <a
                href="/exemplos/avaliacao-4.pdf"
                target="_blank"
                className="flex items-center gap-2 hover:underline"
              >
                <FaFilePdf className="fill-rose-700" />
                Exemplo 4
              </a>
            </li>
            <li>
              <a
                href="/exemplos/avaliacao-5.pdf"
                target="_blank"
                className="flex items-center gap-2 hover:underline"
              >
                <FaFilePdf className="fill-rose-700" />
                Exemplo 5
              </a>
            </li>
          </ul>
        </div>

        <Link
          to="/questionario"
          className="w-full text-center mt-12 bg-emerald-700 text-white px-6 py-2 rounded-md hover:bg-emerald-600 transition-all duration-300"
        >
          COMEÇAR
        </Link>
      </div>
    </div>
  );
};

export default MainPage;
