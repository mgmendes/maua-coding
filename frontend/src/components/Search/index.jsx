import { useState } from "react";

import "./styles.css";

const Search = () => {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="search-container">
      <form className="form-container">
        <input
          type="text"
          onChange={handleChange}
          value={search}
          placeholder="Cole aqui a url da noticia..."
        />

        <button type="submit">Pesquisar</button>
      </form>
    </div>
  );
};

export default Search;
