import "./styles.css";
import logo from "./fact-check-logo.png";

const Logo = () => {
  return (
    <header className="logo-container">
      <img src={logo} alt="Fact Check Logo" />
    </header>
  );
};

export default Logo;
