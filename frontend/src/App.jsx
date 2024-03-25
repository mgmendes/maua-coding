import "./App.css";
import Header from "./components/Header";
import Logo from "./components/Logo";
import Search from "./components/Search";

function App() {
  return (
    <div className="container">
      <Logo />

      <main>
        <Header />
        <Search />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
