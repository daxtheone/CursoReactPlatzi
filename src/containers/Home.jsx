/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { connect } from 'react-redux';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Header from '../components/Header';
//import useInitialState from '../hooks/useInitialState';
import '../assets/styles/App.scss';

//const API = 'http://localhost:3000/initalState';
const Home = ({ mylist, trends, originals, mylistSearch, trendsSearch, originalsSearch, search }) => {
  let trends1 = trends;
  let originals1 = originals;
  let mylist1 = mylist;
  if (mylistSearch !== undefined && search.length > 2) {
    mylist1 = mylistSearch;
  };
  if (trendsSearch !== undefined && search.length > 2) {
    trends1 = trendsSearch;
  };
  if (originalsSearch !== undefined && search.length > 2) {
    originals1 = originalsSearch;
  };
  console.log(originals1);
  //const videos = useInitialState(API);
  return (
    <>
      <Header />
      <Search isHome />
      {
        mylist1 !== undefined && mylist1.length > 0 &&
        (
          <Categories title='Mi Lista'>
            <Carousel>
              {
                mylist1.map((item) => (
                  <CarouselItem
                    key={item.id}
                    {...item}
                    isList
                  />
                ))
              }
            </Carousel>
          </Categories>
        )
      }
      {
        trends1 !== undefined && trends1.length > 0 &&
        (
          <Categories title='Tendencias'>
            <Carousel>
              {
                trends1.map((item) => (
                  <CarouselItem key={item.id} {...item} />
                ))
              }
            </Carousel>
          </Categories>
        )
      }
      {
        originals1 !== undefined && originals1.length > 0 &&
        (
          <Categories title='Originales'>
            <Carousel>
              {
                originals1.map((item) => (
                  <CarouselItem key={item.id} {...item} />
                ))
              }
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
    mylistSearch: state.mylistSearch,
    trendsSearch: state.trendsSearch,
    originalsSearch: state.originalsSearch,
    search: state.search,
  };
};

export default connect(mapStateToProps, null)(Home);
