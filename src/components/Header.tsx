import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const Header: React.FC = () => (
  <header className="header">
    <nav>
      <Link to="/"><FontAwesomeIcon icon={faHome} /></Link>
      <Link to="/apod">APOD</Link>
      <Link to="/images">Images</Link>
    </nav>
  </header>
);

export default Header;


