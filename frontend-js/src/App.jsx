import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import DataProvider from "./context/DataContext";

import Header from "./components/ui/Header";
import Footer from "./components/ui/Footer";

import Resumo from "./components/pages/Resumo";
import MainPage from "./components/pages/MainPage";
import Questionario from "./components/pages/Questionario";
import Contato from "./components/pages/Contato";
import Resultado from "./components/pages/Resultado";

function App() {
  return (
    <DataProvider>
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/questionario" element={<Questionario />} />
          <Route path="/resumo" element={<Resumo />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/resultado" element={<Resultado />} />
        </Routes>

        <Footer />
      </Router>
    </DataProvider>
  );
}

export default App;
