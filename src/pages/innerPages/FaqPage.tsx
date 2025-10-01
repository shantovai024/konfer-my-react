import { Helmet } from "react-helmet-async";
import BreadCrumb from "../../components/breadCrumb/BreadCrumb";
import ClientV2 from "../../components/clients/ClientV2";
import FaqV1 from "../../components/faq/FaqV1";
import FooterV2 from "../../components/footer/FooterV2";
import GalleryV2 from "../../components/gallery/GalleryV2";
import HeaderV2 from "../../components/header/HeaderV2";
import TestimonialV1 from "../../components/testimonials/TestimonialV1";
import PageSocial from "../../components/utilities/PageSocial";

const FaqPage = () => {
    return (
        <>
            <Helmet>
                <title>Konfer - Faq's</title>
            </Helmet>

            <div className="page-wrapper">
                <HeaderV2 />
                <BreadCrumb title="Faq's" />
                <FaqV1 sectionClass="two" />
                <ClientV2 />
                <TestimonialV1 />
                <GalleryV2 />
                <FooterV2 />
                <PageSocial />
            </div>
        </>
    );
};

export default FaqPage;