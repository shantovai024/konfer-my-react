import AboutV3 from "../../components/about/AboutV3";
import BannerV3 from "../../components/banner/BannerV3";
import BlogV3 from "../../components/blog/BlogV3";
import CountdownV2 from "../../components/counter/CountdownV2";
import FactV1 from "../../components/fact/FactV1";
import FeatureV3 from "../../components/feature/FeatureV3";
import FooterV3 from "../../components/footer/FooterV3";
import MarqueeV2 from "../../components/marquee/MarqueeV2";
import MarqueeV3 from "../../components/marquee/MarqueeV3";
import PriceV3 from "../../components/price/PriceV3";
import ScheduleV1 from "../../components/schedule/ScheduleV1";
import SpeakerV3 from "../../components/speakers/SpeakerV3";
import TestimonialV3 from "../../components/testimonials/TestimonialV3";
import PageSocial from "../../components/utilities/PageSocial";

const Home3 = () => {
    return (
        <>
            <div className="page-wrapper">
                <BannerV3 />
                <CountdownV2 />
                <FeatureV3 />
                <AboutV3 />
                <SpeakerV3 />
                <FactV1 />
                <ScheduleV1 />
                <MarqueeV2 />
                <PriceV3 />
                <TestimonialV3 />
                <MarqueeV3 />
                <BlogV3 />
                <FooterV3 />
                <PageSocial />
            </div>
        </>
    );
};

export default Home3;
