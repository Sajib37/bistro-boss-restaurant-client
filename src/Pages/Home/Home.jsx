import React from 'react';
import Banner from '../Banner/Banner';
import Category from './Category/Category';
import Heropart from '../../Shared/Heropart/Heropart';
import chef from "../../assets/home/chef-service.jpg"
import { Helmet } from 'react-helmet-async';
import PopularMenu from './PopularMenu/PopularMenu';
import CallUs from './CallUs/CallUs';

const Home = () => {
    return (
        <section>
            <Helmet>
                <title>Bistro-boss || Home</title>
            </Helmet>

            <Banner></Banner>
            <div className="mt-8 md:mt-12">
                <Category></Category>
            </div>
            <div className="max-w-screen-2xl mx-auto mt-10 md:mt-16">
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
        </section>
    );
};

export default Home;