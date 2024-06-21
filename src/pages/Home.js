import React from 'react';
import Banner from '../components/Banner';
import Categories from '../components/Categories';
import LatestProducts from '../components/LatestProducts';
import FooterBanner from '../components/FooterBanner';


const Home = () => {
    return (
        <div>
            <Banner />
            <Categories />
            <LatestProducts />
            <FooterBanner />
        </div>
    )
}

export default Home;
