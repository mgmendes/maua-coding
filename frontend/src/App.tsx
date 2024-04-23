import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Resumo from "./components/pages/Resumo";
import MainPage from "./components/pages/MainPage";
import Header from "./components/Header";
import Questionario from "./components/pages/Questionario";

function App() {
  return (
    <div>
      <Header />

      <div>
        <Router>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/questionario" element={<Questionario />} />
            <Route path="/resumo" element={<Resumo />} />
          </Routes>
        </Router>
      </div>
      <Footer />
    </div>
  );
}

export default App;
