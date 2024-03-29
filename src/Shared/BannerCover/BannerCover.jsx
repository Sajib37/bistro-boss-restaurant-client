import React from 'react';

const BannerCover = ({image,subHeading,heading}) => {
    return (
        <div
            style={{ backgroundImage: `url(${image})`, backgroundSize: "cover" ,backgroundPosition:'center' ,backgroundRepeat:'no-repeat' }}
            className=" h-[60vh] md:h-[70vh] lg:h-[80vh] relative bg-fixed"
        >
            <div className="w-4/5 md:w-3/5  absolute top-[35%] left-[10%] md:left-[20%] h-2/5 bg-black opacity-70 "> </div>

            <div className="w-3/5 absolute top-[35%] z-30 left-[20%] h-2/5">
                <div className="absolute z-20 w-full h-full top-0 left-0 text-white flex flex-col justify-center items-center space-y-2">
                    <h1 className="md:text-5xl text-2xl text-center uppercase font-bold">{ heading}</h1>
                    <p className="text-center max-w-xl uppercase  md:text-base px-2">
                        {subHeading}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BannerCover;