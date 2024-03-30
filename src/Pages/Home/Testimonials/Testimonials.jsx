import React, { useEffect, useState } from "react";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import revIcon from "../../../assets/home/Group.png";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://bistro-boss-server-six-psi.vercel.app/reviews")
            .then((res) => res.json())
            .then((data) => {
                setReviews(data);
                setLoading(false);
            });
    }, []);

    if (loading && !reviews) {
        return <p>Loading .......</p>;
    }

    return (
        <section className="mb-8 md:mb-12">
            <SectionTitle
                heading={"TESTIMONIALS"}
                subHeading={"What Our Clients Say"}
            ></SectionTitle>

            <div className="max-w-screen-xl mx-auto">
                <Swiper
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
                >
                    {reviews.map((review, idx) => (
                        <SwiperSlide key={review._id}>
                            <div className=" flex flex-col items-center gap-4 py-2 md:py-8  max-w-5xl mx-auto px-12">
                                <Rating
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                />
                                <img
                                    className="lg:w-16 md:w-12 w-8 "
                                    src={revIcon}
                                    alt=""
                                />
                                <p className="text-center"> {review.details}</p>
                                <h1 className="text-3xl text-[#CD9003]">
                                    {review.name}
                                </h1>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Testimonials;
