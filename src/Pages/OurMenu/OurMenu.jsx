import React from 'react';

import menuBg from "../../assets/menu/menu-bg.png"
import bannerBg from "../../assets/menu/banner3.jpg"
import desertBg from "../../assets/menu/dessert-bg.jpeg"
import pizzaBg from "../../assets/menu/pizza-bg.jpg"
import saladBg from "../../assets/menu/salad-bg.jpg"
import soupBg from "../../assets/menu/soup-bg.jpg"
import { Helmet } from 'react-helmet-async';
import BannerCover from '../../Shared/BannerCover/BannerCover';
import useMenu from '../../hooks/useMenu';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import ShowItem from '../../Shared/ShowItem/ShowItem';
import Heropart from '../../Shared/Heropart/Heropart';

const OurMenu = () => {
    const [offered] = useMenu('offered')
    const [dessert] = useMenu('dessert')
    const [pizza] = useMenu('pizza')
    const [salad, loading] = useMenu('salad')
    
    return (
        <section  >
            <Helmet>
                <title>Bistro Boss || Our Menu </title>
            </Helmet>
            <BannerCover image={bannerBg} heading={'Our Menu'} subHeading={"Would like to try a dish?"}></BannerCover>

            <section className='my-10 md:my-16 lg:my-20'>
                <SectionTitle heading={'TODAYS OFFER'} subHeading={'Dont miss'}></SectionTitle>
                <ShowItem category={'offered'} btnText={'ORDER YOUR FAVOURITE FOOD'}></ShowItem>
            </section>

            <section className='my-10 md:my-16 lg:my-20'>
                <div className='mb-6 md:mb-10'>
                    <Heropart  image={desertBg} heading={'dessert'} subHeading={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></Heropart>
                </div>
                <ShowItem category={'dessert'} btnText={'ORDER YOUR FAVOURITE FOOD'}></ShowItem>
            </section>

            <section className='my-10 md:my-16 lg:my-20'>
                <div className='mb-6 md:mb-10'>
                    <Heropart  image={pizzaBg} heading={'pizza'} subHeading={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></Heropart>
                </div>
                <ShowItem category={'pizza'} btnText={'ORDER YOUR FAVOURITE FOOD'}></ShowItem>
            </section>
            <section className='my-10 md:my-16 lg:my-20'>
                <div className='mb-6 md:mb-10'>
                    <Heropart  image={saladBg} heading={'salad'} subHeading={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></Heropart>
                </div>
                <ShowItem category={'salad'} btnText={'ORDER YOUR FAVOURITE FOOD'}></ShowItem>
            </section>
            <section className='my-10 md:my-16 lg:my-20'>
                <div className='mb-6 md:mb-10'>
                    <Heropart  image={soupBg} heading={'soup'} subHeading={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}></Heropart>
                </div>
                <ShowItem category={'soup'} btnText={'ORDER YOUR FAVOURITE FOOD'}></ShowItem>
            </section>
            
        </section>
    );
};

export default OurMenu;