import { useState } from "react";


export const ItemCount = ({valInicial, vacantes}) => {

    const [contador, setContador] = useState(valInicial)

    const sumar = () => (contador < vacantes) && setContador(contador + 1)
    const restar = () => (contador > valInicial) && setContador(contador - 1)

    return (
        <>
            <button className="btn-count btn-dark" onClick={() => sumar() }>+</button>
            {contador}
            <button className="btn-count btn-dark" onClick={() => restar ()}>-</button>
        </>
    );
}

export default ItemCount;
