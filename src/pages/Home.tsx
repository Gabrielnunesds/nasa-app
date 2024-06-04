import React from 'react';
import Header from '../components/Header'; 
import './Home.css';
import Footer from '../components/Footer';

const Home: React.FC = () => (
  <div>
    <Header />
    <section className="section">
      <div className="section-content">
        <h2>Bem-vindo ao Explorador da NASA</h2>
        <p>Explore as maravilhas do espaço com as APIs oficiais da NASA. Tenha acesso a imagens, vídeos e dados de várias missões e projetos da NASA.</p>
        <a href="/images" className="button">Explorar Imagens</a>
      </div>
    </section>
    <section className="section">
      <div className="section-content">
        <h2>Missões Recentes</h2>
        <p>Descubra as informações mais recentes sobre as missões da NASA, incluindo exploração de Marte, telescópios espaciais e muito mais.</p>
      </div>
    </section>
    <section className="section">
      <div className="section-content">
        <h2>Você Sabia?</h2>
        <p>Expanda seu conhecimento sobre o espaço com esses fatos fascinantes:</p>
        <ul>
          <li>O Sol é tão grande que aproximadamente 1,3 milhão de Terras caberiam dentro dele.</li>
          <li>Há mais estrelas no universo do que grãos de areia em todas as praias da Terra.</li>
          <li>As estrelas de nêutrons são tão densas que uma colher de chá de material de uma estrela de nêutrons teria uma massa de cerca de um bilhão de toneladas.</li>
        </ul>
      </div>
    </section>
    <Footer />
  </div>
);

export default Home;



