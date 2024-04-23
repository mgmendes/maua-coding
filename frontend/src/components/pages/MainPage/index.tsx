import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <div className="w-full bg-white">
      <div className="w-full min-h-[80vh] max-w-screen-lg mx-auto flex flex-col items-start justify-center gap-6 py-12">
        <h2 className="font-bold text-2xl">Gerador de Avaliações</h2>
        <p>Precisa formular uma prova para seus alunos, e está sem ideias?</p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus at
          quod impedit amet doloribus eligendi vel ipsa veritatis laborum
          necessitatibus earum accusantium ipsum voluptas, rerum odit, inventore
          consequuntur, aspernatur corporis voluptates placeat! Nam est
          recusandae voluptatibus fuga quisquam ad! Delectus, dolorum explicabo
          mollitia eveniet consequatur quo fugiat corporis voluptatum optio.
        </p>

        <Link to="/formulario" className="mt-12">
          <span className="bg-purple-700 text-white px-6 py-2 rounded-md hover:bg-purple-600 transition-all duration-300">
            COMEÇAR
          </span>
        </Link>
      </div>
    </div>
  );
};

export default MainPage;
