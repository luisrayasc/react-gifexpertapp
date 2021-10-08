import React from 'react'; // Libreria de react
import PropTypes from 'prop-types'; // define reglas para los props de cada componente

import { useFetchGifs } from '../hooks/useFetchGifs'; // custom hook

import { GifGridItem } from './GifGridItem'; // Componente para renderizar cada imagen

export const GifGrid = function ({ category }) {
  const { loading, data: images } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>

      {loading && <p> Cargando... 🤖 </p>}

      <div className="card-grid">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};

// Reglas para cada prop
GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};
