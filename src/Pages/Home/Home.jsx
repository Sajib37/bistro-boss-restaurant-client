import React from 'react';
import Banner from '../Banner/Banner';
import Category from './Category/Category';
import Heropart from '../../Shared/Heropart/Heropart';
import chef from "../../assets/home/chef-service.jpg"
import { Helmet } from 'react-helmet-async';
import PopularMenu from './PopularMenu/PopularMenu';
import CallUs from './CallUs/CallUs';
import ChefRecommended from './ChefRecommended/ChefRecommended';
import Featured from './Featured/Featured';
import Testimonials from './Testimonials/Testimonials';

const Home = () => {
    return (
        <section>
            <Helmet>
                <title>Bistro-boss || Home</title>
            </Helmet>

            <Banner></Banner>
            <div className="mt-12 md:mt-16">
                <Category></Category>
            </div>
            <div className="max-w-screen-2xl mx-auto mt-16 md:mt-24">
                <Heropart
                    image={chef}
                    heading={"Bistro Boss"}
                    subHeading={
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo."
                    }
                ></Heropart>
            </div>

            <PopularMenu></PopularMenu>
            <CallUs></CallUs>
            <ChefRecommended></ChefRecommended>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </section>
    );
};

export default Home;