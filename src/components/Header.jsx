import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import gravatar from '../utils/gravatar';
import { logoutRequest } from '../actions';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo-platzi.png';
import userIcon from '../assets/static/user-icon.png';

const Header = (props) => {
  const { user, isLogin, isRegister } = props;
  console.log(user);
  console.log(Object.keys(user).length);

  const hasUser = Object.keys(user).length > 0;

  const handleLogout = () => {
    props.logoutRequest({});
  };

  const headerClass = classNames('header', {
    isLogin,
    isRegister,
  });

  console.log(hasUser);
  return (
    <header className={headerClass}>
      <Link to='/'>
        <img className='header__img' src={logo} alt='logo-platzi' />
      </Link>
      <div className='header__menu'>
        <div className='header__menu--profile'>
          {
            hasUser ?
              <img src={gravatar(user.email)} alt={user.email} /> :
              <img src={userIcon} alt='Perfil' />
          }
          <p>Perfil</p>
        </div>
        <ul>
          {
            hasUser ?
              <li><Link to='/'>{user.name}</Link></li> :
              null
          }
          {
            hasUser ?
              <li><Link to='#logout' onClick={handleLogout}>Cerrar Sesión</Link></li> :
              <li><Link to='/login'>Iniciar Sesión</Link></li>
          }
        </ul>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
const mapDispachToProps = {
  logoutRequest,
};

export default connect(mapStateToProps, mapDispachToProps)(Header);
