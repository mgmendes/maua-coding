import { Link } from "react-router-dom";
import logo from "/logo-604x679.png";

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
        <p className="leading-7 mb-4">
          Apresentamos a nova ferramenta essencial para educadores: o Gerador de
          Avaliações, uma aplicação inovadora desenhada para transformar a
          maneira como os professores preparam testes e provas. Com uma
          interface amigável e recursos automatizados, nossa plataforma permite
          aos educadores criar avaliações personalizadas rapidamente, abrangendo
          uma ampla gama de disciplinas e níveis escolares. Não importa se você
          precisa de um teste rápido de matemática ou uma avaliação complexa de
          história, o Gerador de Avaliações oferece templates adaptáveis que
          garantem a qualidade e relevância dos conteúdos, otimizando o tempo e
          melhorando o desempenho dos alunos.
        </p>
        <p className="leading-7">
          A eficiência é a chave com o Gerador de Avaliações: basta selecionar o
          tipo de prova, o conteúdo específico e o nível de dificuldade, e nossa
          tecnologia cuida do resto. A plataforma também inclui funcionalidades
          de análise que ajudam os professores a entender as áreas onde os
          alunos podem precisar de mais apoio. Além disso, nossa aplicação é
          segura e fácil de integrar com sistemas de gestão de aprendizado já
          existentes, facilitando a incorporação em qualquer ambiente
          educacional. Libere o potencial completo de sua prática docente com o
          Gerador de Avaliações, a ferramenta que está redefinindo a preparação
          de testes no ambiente educacional moderno.
        </p>

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
