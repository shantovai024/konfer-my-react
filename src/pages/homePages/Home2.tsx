import AboutV2 from "../../components/about/AboutV2";
import BannerV2 from "../../components/banner/BannerV2";
import BlogV2 from "../../components/blog/BlogV2";
import ClientV2 from "../../components/clients/ClientV2";
import CountdownV1 from "../../components/counter/CountdownV1";
import FaqV1 from "../../components/faq/FaqV1";
import FeatureV2 from "../../components/feature/FeatureV2";
import PriceV2 from "../../components/price/PriceV2";
import SpeakerV2 from "../../components/speakers/SpeakerV2";
import TestimonialV2 from "../../components/testimonials/TestimonialV2";
import VideoV2 from "../../components/videos/VideoV2";
import GalleryV2 from "../../components/gallery/GalleryV2";
import FooterV2 from "../../components/footer/FooterV2";
import PageSocial from "../../components/utilities/PageSocial";

const Home2 = () => {
    return (
        <>
            <div className="page-wrapper">
                <BannerV2 />
                <AboutV2 />
                <CountdownV1 />
                <FeatureV2 />
                <SpeakerV2 />
                <ClientV2 />
                <PriceV2 />
                <TestimonialV2 />
                <FaqV1 />
                <VideoV2 />
                <BlogV2 />
                <GalleryV2 />
                <FooterV2 />
                <PageSocial />
            </div>
        </>
    );
};

export default Home2;