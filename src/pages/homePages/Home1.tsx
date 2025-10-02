import { Helmet } from "react-helmet-async";
import AboutV1 from "../../components/about/AboutV1";
import BannerV1 from "../../components/banner/BannerV1";
import BlogV1 from "../../components/blog/BlogV1";
import ClientV1 from "../../components/clients/ClientV1";
import FeatureV1 from "../../components/feature/FeatureV1";
import FooterV1 from "../../components/footer/FooterV1";
import GalleryV1 from "../../components/gallery/GalleryV1";
import HeaderV1 from "../../components/header/HeaderV1";
import MarqueeV1 from "../../components/marquee/MarqueeV1";
import PriceV1 from "../../components/price/PriceV1";
import ScheduleV1 from "../../components/schedule/ScheduleV1";
import SpeakerV1 from "../../components/speakers/SpeakerV1";
import SubscribeV1 from "../../components/subscribe/SubscribeV1";
import TestimonialV1 from "../../components/testimonials/TestimonialV1";
import PageSocial from "../../components/utilities/PageSocial";
import VideoV1 from "../../components/videos/VideoV1";

const Home1 = () => {
  return (
    <>
      <Helmet>
        <title>Konfer - Home</title>
      </Helmet>

      <div className="page-wrapper">
        <HeaderV1 parentMenu='home' />
        <BannerV1 />
        <AboutV1 />
        <MarqueeV1 />
        <FeatureV1 />
        <SpeakerV1 />
        <ScheduleV1 />
        <GalleryV1 />
        <PriceV1 />
        <ClientV1 sectionClass="pt-0" />
        <VideoV1 />
        <TestimonialV1 />
        <BlogV1 />
        <SubscribeV1 />
        <FooterV1 />
        <PageSocial />
      </div>
    </>
  );
};

export default Home1;
