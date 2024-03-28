import React from 'react';
import Banner from '../Banner/Banner';
import Category from './Category/Category';

const Home = () => {
    return (
        <section>
            <Banner></Banner>
            <div className="my-8 md:my-12">
                <Category></Category>
            </div>
        </section>
    );
};

export default Home;