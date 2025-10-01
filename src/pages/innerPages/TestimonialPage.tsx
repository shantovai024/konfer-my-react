import BreadCrumb from "../../components/breadCrumb/BreadCrumb";
import FooterV2 from "../../components/footer/FooterV2";
import GalleryV2 from "../../components/gallery/GalleryV2";
import HeaderV2 from "../../components/header/HeaderV2";
import TestimonialV1 from "../../components/testimonials/TestimonialV1";
import TestimonialV2 from "../../components/testimonials/TestimonialV2";
import TestimonialV3 from "../../components/testimonials/TestimonialV3";

const TestimonialPage = () => {
    return (
        <>
            <div className="page-wrapper">
                <HeaderV2 />
                <BreadCrumb title="testimonials" subtitle="testimonials" />
                <TestimonialV3 />
                <TestimonialV2 />
                <TestimonialV1 sectionClass="pt-0" />
                <GalleryV2 />
                <FooterV2 />
            </div>
        </>
    );
};

export default TestimonialPage;