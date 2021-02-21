import React, { useState } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { setSearch } from '../actions';
import '../assets/styles/components/Search.scss';

const see = '¿Qué quieres ver hoy?';
const placeholderInput = 'Buscar...';
//const Search = ({ isHome }, props) => {
const Search = (props) => {
  const { isHome } = props;
  console.log(props);
  const [inputsearch, setInputsearch] = useState({
    inputsearch: '',
  });
  const handleInput = (event) => {
    let value = '';
    if (event.target.value.length > 2) {
      // eslint-disable-next-line no-unused-vars
      value = event.target.value;
    }
    setInputsearch({
      ...inputsearch,
      inputsearch: value,
    });
    props.setSearch(inputsearch);
  };
  const inputStyle = classNames('input', {
    isHome,
  });
  return (
    <section className='main'>
      <h2 className='main__title'>{see}</h2>
      <input className={inputStyle} type='text' placeholder={placeholderInput} onChange={handleInput} />
    </section>
  );
};

const mapDispachToProps = {
  setSearch,
};
export default connect(null, mapDispachToProps)(Search);
