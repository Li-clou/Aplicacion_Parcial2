import { Routes, Route, Link } from "react-router-dom";
// Corregimos la ruta al CSS que está dentro de la carpeta styles
import "./styles/App.css"; 
import profile from "./pic/foto.png";
import Pagina2 from "./pag2";
import Parcial2 from "./parcial2";
function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="App">
            <header className="App-header">
              <img src={profile} className="App-logo" alt="logo" />

              <p>Evaluación parcial 1</p>

              <p>Alumno: Eli Gabriel Gomez Aguirre</p>

              <a
                className="App-link"
                href="https://www.linkedin.com/in/eli-gabriel-gomez-aguirre-896778313"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn de mi perfil
              </a>

              {/* Navegación a la página 2 */}
              <Link to="/pagina2" className="App-link-nav">
                DOCUMENTACIÓN PARCIAL 1
              </Link>

              {/* Agregamos una ruta temporal para que no marque error */}
              <Link to="/parcial2" className="App-link-nav">
                DOCUMENTACIÓN PARCIAL 2
              </Link>
            </header>
          </div>
        }
      />

      <Route path="/pagina2" element={<Pagina2 />} />
      <Route path="/parcial2" element={<Parcial2 />} />

    </Routes>
  );
}

export default App;