import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginRequest } from '../actions';
import '../assets/styles/components/Login.scss';
import iconGoogle from '../assets/static/google-icon.jpg';
import iconTwitter from '../assets/static/twitter_icon.png';
import Header from '../components/Header';

const Login = (props) => {
  const [form, setValues] = useState({
    email: '',
  });
  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(form);
    props.loginRequest(form);
    props.history.push('/');
  };
  return (
    <>
      <Header isLogin />
      <section className='login'>
        <section className='login__container'>
          <h2>Inicia Sesión</h2>
          <form action='' className='login__container--form' onSubmit={handleSubmit}>
            <input
              className='input'
              name='email'
              type='text'
              placeholder='Correo'
              onChange={handleInput}
            />
            <input
              className='input'
              name='password'
              type='password'
              placeholder='Contraseña'
              onChange={handleInput}
            />
            <button className='button' type='submit'>
              Iniciar sesión
            </button>
            <div className='login__container--remember-me'>
              <label htmlFor='recuerdame'>
                <input type='checkbox' name='recuerdame' id='recuerdame' value='' />
                Recuérdame
              </label>
              <a href='/'>Olvidé mi contraseña</a>
            </div>
          </form>
          <section className='login__container--social-media'>
            <div>
              <img src={iconGoogle} alt='Logo google' />
              Inicia sesión con google
            </div>
            <div>
              <img src={iconTwitter} alt='Logo twitter' />
              Inicia sesión con twitter
            </div>
          </section>
          <p className='login__container--register'>
            No tienes ninguna cuenta
            {' '}
            <Link to='/register'>
              Regístrate
            </Link>
          </p>
        </section>
      </section>
    </>
  );
};

const mapDispatchToProps = {
  loginRequest,
};
export default connect(null, mapDispatchToProps)(Login);
