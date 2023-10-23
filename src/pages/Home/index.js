import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Bem vindo a pagina home!</h1>
      <span>Sujeito programador</span> <br />
      <br />
      <Link to="/sobre">Sobre</Link> <br />
      <Link to="/contato">Contato</Link>
      <hr />
      <Link to="/produto/123">Acessar produto 123</Link>
    </div>
  );
}

export default App;
