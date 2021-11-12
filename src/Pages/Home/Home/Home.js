import React from 'react';
import Products from '../Products/Products';
import Reviews from '../Review/Reviews/Reviews';
import Navigation from './../../Shared/Navigation/Navigation';
import Banner from './Banner/Banner';

const Home = () => {
     return (
          <div>
               {/* <Navigation></Navigation> */}
               <Banner></Banner>
               <Products></Products>
               <Reviews></Reviews>
          </div>
     );
};

export default Home;