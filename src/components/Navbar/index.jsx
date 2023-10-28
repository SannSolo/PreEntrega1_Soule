import "./style.css"
import CartWidget from "./CartWidget";

 
function Navbar() {
    return <nav className="navbar">
        <div className="NavDiv">
            <button className="btnNavA">Accesorios</button>
            <button className="btnNavA">Prendas superiores</button>
            <p className="brand">INCOMODO</p>
            <button className="btnNavB">Prendas inferiores</button>
            <button className="btnNavB">Contacto</button>
            
        </div>

        <CartWidget />
    </nav>;
}
  

export default Navbar

