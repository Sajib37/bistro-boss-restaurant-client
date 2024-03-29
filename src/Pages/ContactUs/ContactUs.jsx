import { Helmet } from "react-helmet-async";
import contactBg from "../../assets/contact/banner.jpg"
import BannerCover from "../../Shared/BannerCover/BannerCover";

const ContactUs = () => {
    return (
        <section>
            <Helmet>
                <title>Bistro Boss || Contact</title>
            </Helmet>
            <BannerCover image={contactBg} heading={'Contact Us'} subHeading={'Would you like to try a dish?'}></BannerCover>

        </section>
    );
};

export default ContactUs;