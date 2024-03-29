import React from 'react';
import BannerCover from '../../Shared/BannerCover/BannerCover';
import shopBg from "../../assets/shop/banner2.jpg"
import { Helmet } from 'react-helmet-async';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ShowCategory from './ShowCategory/ShowCategory';

const OurShop = () => {
    return (
        <section>
            <Helmet>
                <title>Bistro Boss || Our Shop </title>
            </Helmet>
            <BannerCover image={shopBg} heading={'Our Shop'} subHeading={'Would you like to try a dish?'}></BannerCover>
            
             {/* Tabs */}
             <section className="my-8 md:my-12 lg:my-16 max-w-screen-xl mx-auto">
                
                <Tabs defaultIndex={1} onSelect={(index) => console.log(index)}>
                    <TabList>
                    <Tab ><p className="uppercase font-semibold text-sm md:text-xl">Salad</p></Tab>
                    <Tab ><p className="uppercase font-semibold text-sm md:text-xl">pizza</p></Tab>
                    <Tab ><p className="uppercase font-semibold text-sm md:text-xl">soup</p></Tab>
                    <Tab ><p className="uppercase font-semibold text-sm md:text-xl">dessert</p></Tab>
                    <Tab ><p className="uppercase font-semibold text-sm md:text-xl">drinks</p></Tab>
                    
                    </TabList>

                    <TabPanel>
                        <ShowCategory category={'salad'} title='salad'></ShowCategory>
                    </TabPanel>
                    <TabPanel>
                        <ShowCategory category={'pizza'} ></ShowCategory>
                    </TabPanel>
                    <TabPanel>
                        <ShowCategory category={'soup'} ></ShowCategory>
                    </TabPanel>
                    <TabPanel>
                        <ShowCategory category={'dessert'} ></ShowCategory>
                    </TabPanel>
                    <TabPanel>
                        <ShowCategory category={'drinks'} ></ShowCategory>
                    </TabPanel>

                </Tabs>
            </section>
            
        </section>
    );
};

export default OurShop;