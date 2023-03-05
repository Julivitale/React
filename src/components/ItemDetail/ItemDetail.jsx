 import {ItemCount} from '../ItemCount/itemCount'

 //context
 import { useDarkModeContext } from "../../Context/DarkModeContext";
export const ItemDetail = ({item}) => {
     const {darkMode} = useDarkModeContext()

    const onAdd = (contador) => {
        console.log(contador)
        console.log(item)

    }
    return (
        <div className='row g-0'>
            <div className='col-md-4'>
                <img src={`../img/${item.img}`} className="img-fluid rounded-start" alt={item.nombre} />
            </div>
            <div className='col-md-8'>
                <div className='card-body'>
                    <h5 className="card-title">{item.nombre}</h5>
                    <p className='card-text'>{`Duracion del curso: ${item.duracion}`}</p>
                    <p className='card-text'>$ {new Intl.NumberFormat('de-DE').format (item.precio)}</p>
                    <p className='card-text'>{`Vacantes libres: ${item.vacantes}`}</p>
                    <ItemCount valInicial={1} vacantes={item.vacantes} onAdd={onAdd}/>
                  <div><button className='btn btn-secondary'>Finalizar compra</button></div>
                </div>

            </div>
        </div>
    );
}

export default ItemDetail;
