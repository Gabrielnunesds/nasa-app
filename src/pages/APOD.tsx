import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Card from '../components/Card';
import './Apod.css';
import Footer from '../components/Footer';


const APOD: React.FC = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=vAWX02t91DBbNhNNaIcdL275SUFaAyDU9n5yWWae')
      .then(response => setData(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <Header />
      {data ? (
        <Card
          title={data.title}
          description={data.explanation}
          imageUrl={data.url}
        />
      ) : (
        <p>Loading...</p>
      )}
      <Footer />
    </div>
  );
};

export default APOD;
