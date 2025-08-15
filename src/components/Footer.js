import React from 'react';

function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer style={footerStyle}>
      <p>Basic React App - {year}</p>
      <p>
        <a 
          href="https://reactjs.org" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ color: '#61dafb' }}
        >
          Learn more about React
        </a>
      </p>
    </footer>
  );
}

const footerStyle = {
  marginTop: '30px',
  padding: '20px 0',
  borderTop: '1px solid #eaeaea',
  textAlign: 'center',
  color: '#666',
};

export default Footer;