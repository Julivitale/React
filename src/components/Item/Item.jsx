import { Link } from "react-router-dom";

//context
import { useDarkModeContext } from "../../Context/DarkModeContext";

export const Item = ({item}) => {
  const {darkMode} = useDarkModeContext()

    return (
        <div className={`card mb-3 cardProducto ${darkMode ? 'text-dark bg-secondary': 'border-light'} `}>
             <img src={`../img/${item.img}`} className="card-img-top" alt={item.nombre}/>
                 <div className={`card-body ${darkMode ? 'cardBody' : 'cardBodyDark'}`}>
                   <h5 className="card-title">{item.nombre}</h5>
                     <p className="card-text"> {`Duracion del curso: ${item.duracion}`}</p>
                     <p className="card-text">$ {new Intl.NumberFormat('de-DE').format (item.precio)}</p>
                     <button className={`btn ${darkMode ? 'btn-primary' : 'btn-secondary'}`}><Link className="nav-link" to={`/item/${item.id}`}>Ver producto</Link></button>
          </div>
      </div>
    );
}

export default Item;
