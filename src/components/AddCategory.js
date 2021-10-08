import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {
  // State inicial
  const [inputValue, setInputValue] = useState('Ingrese una serie o película');

  // Handler functions
  const handleClear = () => {
    setInputValue('');
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length > 2) {
      setCategories((cats) => [inputValue, ...cats]);
      setInputValue('');
    }
  };

  // Output for rendering
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onClick={handleClear}
        value={inputValue}
        onChange={handleInputChange}
      ></input>
    </form>
  );
};

// Reglas para las propiedades que se le pasarán al componente
AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired,
};
