const Categorias = () => {
    return (
            <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
             <button className="btn btn-dark"> Cursos</button>
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Excel</a></li>
              <li><a className="dropdown-item" href="#">Gestion</a></li>
              <li><a className="dropdown-item" href="#">Ingenieria</a></li>
            </ul>
          </li>

    );
}

export default Categorias;
