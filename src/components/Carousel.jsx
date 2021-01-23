import React from 'react';
import '../assets/styles/components/Carousel.scss';

const Carousel = ({ children }) => (
  <div className='container-carousel'>
    <div className='container-carousel__itemleft'><img src='https://img.icons8.com/clouds/100/000000/left.png' alt='iamgenleft' /></div>
    <section className='carousel'>
      <div className='carousel__container'>
        {children}
      </div>
    </section>
    <div className='container-carousel__itemright'><img src='https://img.icons8.com/clouds/100/000000/right.png' alt='ImagenRight' /></div>
  </div>
);

export default Carousel;
