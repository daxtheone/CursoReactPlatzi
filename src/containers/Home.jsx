/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
//import useInitialState from '../hooks/useInitialState';
import '../assets/styles/App.scss';

//const API = 'http://localhost:3000/initalState';
const Home = ({ mylist, trends, originals }) => {
  //const videos = useInitialState(API);
  return (
    <>
      <Search />
      {
        mylist !== undefined && mylist.length > 0 &&
        (
          <Categories title='Mi Lista'>
            <Carousel>
              <CarouselItem />
            </Carousel>
          </Categories>
        )
      }
      {
        trends !== undefined && trends.length > 0 &&
        (
          <Categories title='Tendencias'>
            <Carousel>
              {
                trends.map((item) => (
                  <CarouselItem key={item.id} {...item} />
                ))
              }
            </Carousel>
          </Categories>
        )
      }
      {
        originals !== undefined && originals.length > 0 &&
        (
          <Categories title='Originales'>
            <Carousel>
              {
                originals.map((item) => (
                  <CarouselItem key={item.id} {...item} />
                ))
              }
              <CarouselItem />
            </Carousel>
          </Categories>
        )
      }
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    mylist: state.mylist,
    trends: state.trends,
    originals: state.originals,
  };
};
export default connect(mapStateToProps, null)(Home);
