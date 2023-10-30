import React from 'react';
import { FaTimes } from 'react-icons/fa';

const CloseIcon = () => {
  return (
    <FaTimes />
  );
};

const Fechar = ({ onClick }) => {
  return (
    <button onClick={onClick}>
      <CloseIcon />
    </button>
  );
};

export default Fechar;
