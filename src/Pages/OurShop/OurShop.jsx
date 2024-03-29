import React from 'react';
import BannerCover from '../../Shared/BannerCover/BannerCover';
import shopBg from "../../assets/shop/banner2.jpg"
import { Helmet } from 'react-helmet-async';

const OurShop = () => {
    return (
        <section>
            <Helmet>
                <title>Bistro Boss || Our Shop </title>
            </Helmet>
            <BannerCover image={shopBg} heading={'Our Shop'} subHeading={'Would you like to try a dish?'}></BannerCover>
        </section>
    );
};

export default OurShop;