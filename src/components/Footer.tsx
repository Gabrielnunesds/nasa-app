import React from 'react';
import './Footer.css'; 

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} NASA API</p>
        <p>Desenvolvido por [<a href="https://github.com/Gabrielnunesds">Gabriel Nunes,</a> <a href="https://github.com/DMAraujo">Diego Moura, </a> <a href="https://github.com/Kerplunky">Italo Ricardo, </a>
        <a href="https://github.com/Dianapep">Roberto Figueiredo, </a> <a href="https://github.com/urtiga">Ryan Urtiga</a>]</p>
      </div>
    </footer>
  );
};

export default Footer;
