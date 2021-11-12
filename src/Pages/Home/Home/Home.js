import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Products from '../Products/Products';
import Reviews from '../Review/Reviews/Reviews';
import Testimonials from '../Testimonials/Testimonials';
import Navigation from './../../Shared/Navigation/Navigation';
import Banner from './Banner/Banner';

const Home = () => {
     return (
          <div>
               {/* <Navigation></Navigation> */}
               <Banner></Banner>
               <Products></Products>
               <Testimonials></Testimonials>
               <Reviews></Reviews>
               <Footer></Footer>
          </div>
     );
};

export default Home;