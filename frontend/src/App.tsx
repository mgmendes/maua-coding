import Footer from "./components/ui/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Resumo from "./components/pages/Resumo";
import MainPage from "./components/pages/MainPage";
import Header from "./components/ui/Header";
import Questionario from "./components/pages/Questionario";
import Contato from "./components/pages/Contato";
import DataProvider from "./context/DataContext";

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
        </Routes>

        <Footer />
      </Router>
    </DataProvider>
  );
}

export default App;
