import React from 'react';

const LoginStatus = () => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#1e1e1e' 
  };

  const codeStyle = {
    backgroundColor: '#2d2d2d',
    color: '#6A9955', 
    padding: '1.5rem',
    borderRadius: '10px',
    fontFamily: 'monospace',
    fontSize: '1.2rem',
    border: '1px solid #404040',
    boxShadow: '0 4px 15px rgba(0,0,0,0.3)'
  };

  return (
    <div style={containerStyle}>
      <div style={codeStyle}>
        <code>// Estoy listo para realizar login con google</code>
      </div>
    </div>
  );
};

export default LoginStatus;