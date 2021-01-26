import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Login.scss';
import iconGoogle from '../assets/static/google-icon.jpg';
import iconTwitter from '../assets/static/twitter_icon.png';

const Login = () => (
  <section className='login'>
    <section className='login__container'>
      <h2>Inicia Sesión</h2>
      <form action='' className='login__container--form'>
        <input className='input' type='text' placeholder='Correo' />
        <input className='input' type='password' placeholder='Contraseña' />
        <button className='button' type='button'>
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
        <Link to='/register'>
          Regístrate
        </Link>
      </p>
    </section>
  </section>
);

export default Login;
