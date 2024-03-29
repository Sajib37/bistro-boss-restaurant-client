import React from 'react';
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../Shared/SectionTitle/SectionTitle';
import ShowItem from '../../../Shared/ShowItem/ShowItem';

const PopularMenu = () => {

    const [popularItem, loading] = useMenu('popular')
    return (
        <section className='mt-8 md:mt-16'>
            <SectionTitle subHeading='Check it Out' heading='FROM OUR MENU'></SectionTitle>
            <ShowItem items={popularItem} btnText={'view Full Menu'}></ShowItem>
        </section>
    );
};

export default PopularMenu;