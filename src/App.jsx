import Footer from "./Footer";

function App() {
  let nombre = "pepe";

  const sumar = () => {
    console.log(2 + 2);
  };

  return (
    <div>
      <h1>Hola {nombre}</h1>
      <h2>Como estas?</h2>
      <button onClick={sumar}>sumar</button>
      <Footer />
    </div>
  );
}

export default App;
