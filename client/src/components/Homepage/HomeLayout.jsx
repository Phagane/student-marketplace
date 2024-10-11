import React from 'react'
import HeroBanner from './HeroBanner';
import Categories from './Categories';
import FeaturedProducts from './FeaturdProducts';
import Recommendations from './Recommendations';
import Testimonials from './Testimonials';
import Deals from './Deals';

const HomeLayout = () => {
  return (
    <div>

        <Categories/>
        <HeroBanner/>
        <FeaturedProducts/>
        <Recommendations/>
        <Testimonials/>
        <Deals/>

    </div>
  )
}
export default HomeLayout;