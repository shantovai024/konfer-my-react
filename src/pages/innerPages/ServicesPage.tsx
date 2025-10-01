import BreadCrumb from "../../components/breadCrumb/BreadCrumb";
import ClientV1 from "../../components/clients/ClientV1";
import FactV1 from "../../components/fact/FactV1";
import FaqV1 from "../../components/faq/FaqV1";
import FeatureV3 from "../../components/feature/FeatureV3";
import FooterV2 from "../../components/footer/FooterV2";
import GalleryV2 from "../../components/gallery/GalleryV2";
import HeaderV3 from "../../components/header/HeaderV3";
import TestimonialV2 from "../../components/testimonials/TestimonialV2";

const ServicesPage = () => {
    return (
        <>
            <div className="page-wrapper">
                <HeaderV3 />
                <BreadCrumb title="Services" subtitle="Services" />
                <FeatureV3 isFull={true} />
                <FactV1 />
                <ClientV1 />
                <TestimonialV2 />
                <FaqV1 />
                <GalleryV2 />
                <FooterV2 />
            </div>
        </>
    );
};

export default ServicesPage;