import React from "react";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import ItemCard from "../../../Shared/ItemCard/ItemCard";

const PopularMenu = () => {
    const [offeredItem, loading] = useMenu("offered");
    if (loading) {
        return <p>Loading.......</p>;
    }
    return (
        <section className="mt-8 md:mt-16">
            <SectionTitle
                subHeading="Should Try"
                heading="CHEF RECOMMENDS"
            ></SectionTitle>
            <div className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3">
                {offeredItem &&
                    offeredItem
                        .slice(0, 3)
                        .map((item, idx) => (
                            <ItemCard key={idx} item={item}></ItemCard>
                        ))}
            </div>
        </section>
    );
};

export default PopularMenu;
