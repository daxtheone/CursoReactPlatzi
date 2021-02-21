import React from 'react';
import classNames from 'classnames';
import '../assets/styles/components/Search.scss';

const see = '¿Qué quieres ver hoy?';
const placeholderInput = 'Buscar...';
const Search = ({ isHome }) => {
  const inputStyle = classNames('input', {
    isHome,
  });
  return (
    <section className='main'>
      <h2 className='main__title'>{see}</h2>
      <input className={inputStyle} type='text' placeholder={placeholderInput} />
    </section>
  );
};

export default Search;
