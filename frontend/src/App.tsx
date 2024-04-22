import Header from "./components/Header";
import Card from "./components/Card";
import Formulario from "./components/Formulario";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-emerald-500 from-25% to-neutral-200 to-25%">
      <Header />

      <main className="pb-16">
        <Card>
          <h2 className="text-xl mb-8">Informações da Avaliação</h2>

          <Formulario />
        </Card>
      </main>

      <Footer />
    </div>
  );
}

export default App;
