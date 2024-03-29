import React from 'react';
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../Shared/SectionTitle/SectionTitle';
import ShowItem from '../../../Shared/ShowItem/ShowItem';

const PopularMenu = () => {

    
    return (
        <section className='mt-8 md:mt-16'>
            <SectionTitle subHeading='Check it Out' heading='FROM OUR MENU'></SectionTitle>
            <ShowItem category={'popular'} btnText={'view Full Menu'}></ShowItem>           
        </section>
    );
};

export default PopularMenu;