import React, { useState } from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import profile from './pic/foto.png';
import './styles/App.css';
import Pagina2 from './pag2';
import Parcial2 from './parcial2';

const clientId = "816256944490-mtf6ilgnbvcrsad7476kjg6pq1jdecm8.apps.googleusercontent.com";

// ─── Dashboard (después de login) ───────────────────────────────────────────
const Dashboard = ({ user, onLogout }) => (
  <div className="App-header">
    <img
      src={user.picture || profile}
      width="12%"
      style={{ borderRadius: '50%', marginBottom: '10px' }}
      alt="perfil"
    />
    <h2 style={{ margin: '5px 0' }}>{user.name}</h2>
    <p style={{ margin: '0 0 10px 0', color: '#aaa', fontSize: '0.9rem' }}>{user.email}</p>

    <h1>EVALUACIÓN PARCIAL 3</h1>
    <h3 style={{ color: '#aaa' }}>Velvet Buffer — E-commerce & Gestión de Inventarios</h3>

    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', alignItems: 'center', marginTop: '20px' }}>

      <a
        href="/ERS_VelvetBuffer.pdf"
        download="ERS_VelvetBuffer.pdf"
        className="App-link"
      >
        📄 DESCARGAR DOCUMENTO ERS
      </a>

      <a
        href="https://anglooo.atlassian.net/jira/software/projects/SCRUM/boards/1"
        target="_blank"
        rel="noopener noreferrer"
        className="App-link"
      >
        📋 TABLERO JIRA — PROYECTO VELVET BUFFER
      </a>

    </div>

    <button onClick={onLogout} style={{ marginTop: '30px' }}>
      CERRAR SESIÓN
    </button>
  </div>
);

// ─── Pantalla de Login ───────────────────────────────────────────────────────
const LoginScreen = ({ onSuccess, onError }) => (
  <header className="App-header">
    <img src={profile} width="22%" alt="foto" style={{ borderRadius: '50%' }} />
    <h1>ANÁLISIS Y DISEÑO DE SOFTWARE</h1>
    <h2>Alumno(a): Gomez Aguirre Eli Gabriel</h2>

    <a
      className="App-link"
      href="https://www.linkedin.com/in/eli-gabriel-gomez-aguirre-896778313/"
      target="_blank"
      rel="noopener noreferrer"
    >
      LINKED IN DE MI PROFILE
    </a>

    <Link className="App-link" to="/pagina2">
      DOCUMENTACION PARCIAL 1
    </Link>

    <Link className="App-link" to="/parcial2">
      DOCUMENTACION PARCIAL 2
    </Link>

    <div style={{ margin: '20px' }}>
      <GoogleLogin onSuccess={onSuccess} onError={onError} />
    </div>
  </header>
);

// ─── App principal ───────────────────────────────────────────────────────────
function AppContent() {
  const [user, setUser] = useState(null);

  const onSuccess = (response) => {
    const decoded = jwtDecode(response.credential);
    setUser(decoded);
  };

  const onError = () => {
    console.log("Login fallido");
  };

  const onLogout = () => {
    setUser(null);
  };

  return (
    <div className="App">
      <Routes>
        {user ? (
          <>
            <Route path="/" element={<Dashboard user={user} onLogout={onLogout} />} />
            <Route path="/pagina2" element={<Pagina2 />} />
            <Route path="/parcial2" element={<Parcial2 />} />
          </>
        ) : (
          <>
            <Route path="/" element={<LoginScreen onSuccess={onSuccess} onError={onError} />} />
            <Route path="/pagina2" element={<Pagina2 />} />
            <Route path="/parcial2" element={<Parcial2 />} />
          </>
        )}
      </Routes>
    </div>
  );
}

function App() {
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
}

export default App;
