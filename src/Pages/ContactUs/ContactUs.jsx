import { Helmet } from "react-helmet-async";
import contactBg from "../../assets/contact/banner.jpg"
import BannerCover from "../../Shared/BannerCover/BannerCover";
import Location from "./Location/Location";
import Contact from "./Contact/Contact";

const ContactUs = () => {
    return (
        <section>
            <Helmet>
                <title>Bistro Boss || Contact</title>
            </Helmet>
            <BannerCover image={contactBg} heading={'Contact Us'} subHeading={'Would you like to try a dish?'}></BannerCover>
            <Location></Location>
            <Contact></Contact>
        </section>
    );
};

export default ContactUs;