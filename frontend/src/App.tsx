import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Resumo from "./components/pages/Resumo";
import MainPage from "./components/pages/MainPage";
import Header from "./components/Header";
import Questionario from "./components/pages/Questionario";
import Contato from "./components/pages/Contato";

function App() {
  return (
    <Router>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/questionario" element={<Questionario />} />
          <Route path="/resumo" element={<Resumo />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
