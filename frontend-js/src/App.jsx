import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import DataProvider from "./context/DataContext";

import Header from "./components/ui/Header";
import Footer from "./components/ui/Footer";

import Resumo from "./components/pages/Resumo";
import MainPage from "./components/pages/MainPage";
import Questionario from "./components/pages/Questionario";
import Resultado from "./components/pages/Resultado";
import Logs from "./components/pages/Logs";

function App() {
  return (
    <DataProvider>
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/questionario" element={<Questionario />} />
          <Route path="/resumo" element={<Resumo />} />
          <Route path="/resultado" element={<Resultado />} />
          <Route path="/logs" element={<Logs />} />
        </Routes>

        <Footer />
      </Router>
    </DataProvider>
  );
}

export default App;
