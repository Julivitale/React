import { useState } from "react";
import { toast } from "react-toastify";


export const ItemCount = ({valInicial, vacantes, onAdd}) => {

    const [contador, setContador] = useState(valInicial)

    const sumar = () => (contador < vacantes) && setContador(contador + 1)
    const restar = () => (contador > valInicial) && setContador(contador - 1)
    const agregarCarrito = () => {
        onAdd(contador)
        toast(`Agregaste ${contador} productos al carrito`)}
    return (
        <>

            <button className="btn-count btn-dark" onClick={() => restar ()}>-</button>
            {contador}
            <button className="btn-count btn-dark" onClick={() => sumar() }>+</button>

            <button className="btn-count btn-dark" onClick={() => agregarCarrito()}>Agregar al carrito</button>
        </>
    );
}

export default ItemCount;
