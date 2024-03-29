import React from 'react';

const SectionTitle = ({subHeading, heading}) => {
    return (
        <div className="md:w-1/2 w-3/4 lg:w-2/5 mx-auto mb-6 md:mb-10">
            <h1 className="text-[#D99904] text-center italic mb-1 md:mb-2"> ---{subHeading}--- </h1>
            <h1 className="md:text-4xl text-2xl font-semibold text-center py-1 md:py-2 border-y-2 uppercase">{ heading}</h1>
        </div>
    );
};

export default SectionTitle;