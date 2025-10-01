import BreadCrumb from "../../components/breadCrumb/BreadCrumb";
import FooterV2 from "../../components/footer/FooterV2";
import GalleryV2 from "../../components/gallery/GalleryV2";
import HeaderV1 from "../../components/header/HeaderV1";
import SpeakerV1 from "../../components/speakers/SpeakerV1";
import SpeakerV2 from "../../components/speakers/SpeakerV2";
import SpeakerV3 from "../../components/speakers/SpeakerV3";
import SpeakerV4 from "../../components/speakers/SpeakerV4";
import TestimonialV1 from "../../components/testimonials/TestimonialV1";

const SpeakersPage = () => {
    return (
        <>
            <div className="page-wrapper">
                <HeaderV1 />
                <BreadCrumb title="Speakers" subtitle="Speakers" />
                <SpeakerV3 />
                <SpeakerV1 />
                <SpeakerV4 />
                <SpeakerV2 />
                <TestimonialV1 />
                <GalleryV2 />
                <FooterV2 />
            </div>
        </>
    );
};

export default SpeakersPage;