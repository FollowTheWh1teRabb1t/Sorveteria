import { Link } from "react-router-dom";
import './style.css'

export default function Topo() {
  return(
    <header>
      <div className="limitar-secao">
        <img src="assets/logo.png" alt="logomarca"/>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/sabores">Sabores</Link>
          <Link to="/sobre">Sobre</Link>
        </nav>
      </div>
    </header>
  )
}
    
