/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import useInitialState from '../hooks/useInitialState';
import '../assets/styles/App.scss';

const API = 'http://localhost:3000/initalState';
const App = () => {
  const videos = useInitialState(API);
  return (
    <div className='App'>
      <Header />
      <Search />
      {
        videos.mylist !== undefined && videos.mylist.length > 0 &&
        (
          <Categories title='Mi Lista'>
            <Carousel>
              <CarouselItem />
            </Carousel>
          </Categories>
        )
      }
      {
        videos.trends !== undefined && videos.trends.length > 0 &&
        (
          <Categories title='Tendencias'>
            <Carousel>
              {
                videos.trends.map((item) => (
                  <CarouselItem key={item.id} {...item} />
                ))
              }
            </Carousel>
          </Categories>
        )
      }
      {
        videos.originals !== undefined && videos.originals.length > 0 &&
        (
          <Categories title='Originales'>
            <Carousel>
              {
                videos.originals.map((item) => (
                  <CarouselItem key={item.id} {...item} />
                ))
              }
              <CarouselItem />
            </Carousel>
          </Categories>
        )
      }
      <Footer />
    </div>
  );
};

export default App;
