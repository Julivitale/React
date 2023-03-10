import {useState,useEffect} from "react";
import { useParams } from "react-router-dom";

//componentes
import { ItemList } from '../ItemList/ItemList';

//context
import { useDarkModeContext } from '../../Context/DarkModeContext';

export const ItemListContainer = () => {
  const [productos, setProductos] = useState([])
  const {idCategoria} = useParams()
  const {darkMode} = useDarkModeContext()
  console.log(darkMode)

  useEffect (() => {
    if(idCategoria) {
      fetch('../json/productos.json')
      .then(response => response.json())
      .then(items => {
         const products = items.filter(prod => prod.idCategoria === (idCategoria))
         const productsList = ItemList ({products})
         console.log(productsList)
         setProductos(productsList)
    })
  } else {
    fetch('./json/productos.json')
    .then(response => response.json())
    .then(products => {
      console.log(products)
      const productList = ItemList ({products})
      console.log(productList)
      setProductos(productList)
  })

  }

  }, [idCategoria])
  return (
    <div className='cardProductos'>
        {productos}
    </div>
  );
}

export default ItemListContainer;
