import React, { useState } from 'react';

function Header({ title, username, onLogin }) {
  const [inputName, setInputName] = useState('');
  const [showLoginForm, setShowLoginForm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputName.trim()) {
      onLogin(inputName);
      setShowLoginForm(false);
    }
  };

  return (
    <header style={headerStyle}>
      <h1>{title}</h1>
      
      {username ? (
        <div className="user-info">
          Welcome, <strong>{username}</strong>!
          <button 
            onClick={() => onLogin('')}
            style={{ marginLeft: '10px', backgroundColor: '#f44336' }}
          >
            Logout
          </button>
        </div>
      ) : (
        <div>
          {showLoginForm ? (
            <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '10px' }}>
              <input
                type="text"
                placeholder="Enter your name"
                value={inputName}
                onChange={(e) => setInputName(e.target.value)}
                style={{ width: '200px' }}
              />
              <button type="submit">Login</button>
              <button 
                type="button" 
                onClick={() => setShowLoginForm(false)}
                style={{ backgroundColor: '#f44336' }}
              >
                Cancel
              </button>
            </form>
          ) : (
            <button onClick={() => setShowLoginForm(true)}>Login</button>
          )}
        </div>
      )}
    </header>
  );
}

const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px 0',
  borderBottom: '1px solid #eaeaea',
  marginBottom: '20px',
};

export default Header;