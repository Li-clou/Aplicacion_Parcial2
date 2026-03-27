import "./styles/pag2.css"; // Ruta corregida según tus carpetas
import { Link } from "react-router-dom"; // Solo dejamos Link

// Cambiamos a mayúscula inicial: Pagina2
function Pagina2() {
    return (
        <div className="container">
            <div className="card">
                <h1>Centro de descargas</h1>
                <p>Haz clic en los botones para obtener tus archivos PDF.</p>

                {/* Nota: Asegúrate de que estos PDF estén en la carpeta 'public' */}
                <a href="/comandos.pdf" download>
                    <button className="btn blue">COMANDOS BÁSICOS DE REACT</button>
                </a>

                <a href="/ieee.pdf" download>
                     <button className="btn green">ISO / ESTANDAR IEEE</button>
                </a>

                <a href="/requirements.pdf" download>
                 <button className="btn dark">REQUERIMIENTOS</button>
                </a>

                <a href="/sha_256.pdf" download>
                 <button className="btn dark">CÓDIGO PYTHON ALGORITMO SHA-256</button>
                </a>

                <Link to="/">
                   <button className="btn dark">REGRESAR AL PROYECTO PRINCIPAL</button>
                </Link>
            </div>
        </div>
    );
}

export default Pagina2;