import React from 'react';
import { Parallax } from 'react-parallax';

const Heropart = ({image,subHeading,heading}) => {
    return (

        <Parallax
        blur={{ min: -50, max: 50 }}
        bgImage={image}
        bgImageAlt="the dog"
        
    >
        <div className=" h-[50vh] md:h-[60vh] lg:h-[70vh] relative ">
            <div className="w-4/5 absolute top-[25%] left-[10%] h-1/2 bg-black opacity-50 "> </div>

            <div className="w-4/5 absolute top-[25%] z-30 left-[10%] h-1/2">
                <div className="absolute z-20 w-full h-full top-0 left-0 text-white flex flex-col justify-center items-center space-y-2">
                    <h1 className="md:text-4xl text-2xl text-center font-bold uppercase">{ heading}</h1>
                    <p className="text-center max-w-3xl text-xs md:text-base px-2">
                        {subHeading}
                    </p>
                </div>
            </div>
        </div>
    </Parallax>
        
    );
};

export default Heropart;