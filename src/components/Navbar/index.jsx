import "./style.css"
import CartWidget from "./CartWidget";

 
function Navbar() {
    return <nav className="navbar">
        <div className="btnNav">
            <p className="brand">INCOMODO</p>
            <button>Inicio</button>
            <button>Accesorios</button>
            <button>Prendas superiores</button>
            <button>Prendas inferiores</button>
            <button>Contacto</button>
            
        </div>

        <CartWidget />
    </nav>;
}

export default Navbar
