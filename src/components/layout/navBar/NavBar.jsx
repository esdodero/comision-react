import { useState } from "react";
import CartWidget from "../../common/cartWidget/CartWidget";

const NavBar = () => {
  const [categoria, setCategoria] = useState("1");

  return (
    <div>
      <h3>Logo de la Empresa</h3>
      <h2>{categoria}</h2>
      <ul>
        <li onClick={() => setCategoria("1")}>Categoria 1</li>
        <li onClick={() => setCategoria("2")}>Categoria 2</li>
        <li onClick={() => setCategoria("3")}>Categoria 3</li>
      </ul>
      <CartWidget />
    </div>
  );
};

export default NavBar;
