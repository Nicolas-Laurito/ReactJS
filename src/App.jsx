
import './App.css';

function App() {
  return (
    <div>
     <nav className="navbar navbar-expand-lg navFondo">
  <div className="container-fluid">
       <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            Inicio
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Tipo de Producto1
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
          Tipo de Producto2
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
          Tipo de Producto3
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  );
}

export default App;
