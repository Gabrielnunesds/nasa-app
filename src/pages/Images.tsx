import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import './Images.css';
import Footer from '../components/Footer';

interface ImageData {
  url: string;
  title: string;
  explanation: string;
}

const Images: React.FC = () => {
  const [images, setImages] = useState<ImageData[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get('https://api.nasa.gov/planetary/apod?api_key=vAWX02t91DBbNhNNaIcdL275SUFaAyDU9n5yWWae&count=5');
        setImages(response.data.map((image: any) => ({
          url: image.url,
          title: image.title,
          explanation: image.explanation
        })));
      } catch (error) {
        console.error('Erro ao buscar imagens:', error);
      }
    };

    fetchImages();
  }, []);

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="page-container">
      <Header />
      <div className="images-container">
        {images.length > 0 && (
          <div className="image-card">
            <img src={images[currentImageIndex].url} alt={images[currentImageIndex].title} />
            <div className="image-info">
              <h2>{images[currentImageIndex].title}</h2>
              <p>{images[currentImageIndex].explanation}</p>
              <div className="button-container">
                <button onClick={handlePrevImage}>Anterior</button>
                <button onClick={handleNextImage}>Próxima</button>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
    
  );
};

export default Images;




