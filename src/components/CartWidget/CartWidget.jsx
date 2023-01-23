import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";

const CartWidget = ({cantCarrito}) => {
    return (
        <>
<div className="App"style={{fontSize:"25px" , color:"white" , paddingRight:"50px"}}>
<FontAwesomeIcon icon={faCartShopping}/>
<p style={{fontSize:"10px" , color:"white"}}>{cantCarrito}</p>

            </div>
            </>

    );
}

export default CartWidget;

