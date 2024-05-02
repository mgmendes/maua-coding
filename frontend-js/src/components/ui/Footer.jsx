const Footer = () => {
  return (
    <footer className="w-full bg-neutral-800 text-white py-12 min-h-[400px] print:hidden">
      <div className="w-full max-w-screen-lg px-4 lg:px-0 mx-auto flex items-center justify-between gap-6">
        <div className="flex flex-col items-start">
          <span className="text-base">
            Pós Graduação Instituto Mauá de Tecnologia
          </span>
          <span className="text-base">2024 - Fullstack Developer</span>
        </div>

        <div className="flex flex-col items-start">
          <span className="text-sm">Componentes</span>
          <ul>
            <li className="text-base">Brayan Oliveira da Silva</li>
            <li className="text-base">Márcio Guimarães Mendes</li>
            <li className="text-base">Vitor Giannaccini Tito da Silva</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
