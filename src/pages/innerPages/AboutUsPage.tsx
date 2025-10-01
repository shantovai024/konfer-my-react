import AboutV1 from "../../components/about/AboutV1";
import BreadCrumb from "../../components/breadCrumb/BreadCrumb";
import ClientV2 from "../../components/clients/ClientV2";
import CountdownV1 from "../../components/counter/CountdownV1";
import FactV1 from "../../components/fact/FactV1";
import FaqV1 from "../../components/faq/FaqV1";
import FeatureV2 from "../../components/feature/FeatureV2";
import FooterV3 from "../../components/footer/FooterV3";
import HeaderV3 from "../../components/header/HeaderV3";
import MarqueeV1 from "../../components/marquee/MarqueeV1";
import SpeakerV4 from "../../components/speakers/SpeakerV4";
import TestimonialV3 from "../../components/testimonials/TestimonialV3";
import PageSocial from "../../components/utilities/PageSocial";

const AboutUsPage = () => {
    return (
        <>
            <div className="page-wrapper">
                <HeaderV3 />
                <BreadCrumb title="About Us" subtitle="About Us" />
                <AboutV1 />
                <MarqueeV1 />
                <CountdownV1 />
                <FeatureV2 />
                <SpeakerV4 />
                <FactV1 />
                <ClientV2 />
                <TestimonialV3 />
                <FaqV1 />
                <FooterV3 />
                <PageSocial />
            </div>
        </>
    );
};

export default AboutUsPage;