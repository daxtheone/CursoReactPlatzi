import React from 'react';
import '../assets/styles/components/Search.scss';

const see = '¿Qué quieres ver hoy?';
const placeholderInput = 'Buscar...';
const Search = () => (
  <section className='main'>
    <h2 className='main__title'>{see}</h2>
    <input className='input' type='text' placeholder={placeholderInput} />
  </section>
);

export default Search;
