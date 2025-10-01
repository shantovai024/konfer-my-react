import BreadCrumb from "../../components/breadCrumb/BreadCrumb";
import ContactPageContent from "../../components/contact/ContactPageContent";
import FooterV3 from "../../components/footer/FooterV3";
import HeaderV2 from "../../components/header/HeaderV2";
import ColorsPalate from "../../components/utilities/ColorsPalate";
import PageSocial from "../../components/utilities/PageSocial";

const ContactUsPage = () => {
    return (
        <>
            <div className="page-wrapper">
                <HeaderV2 />
                <BreadCrumb title="Contact Us" subtitle="contact us" />
                <ContactPageContent />
                <ColorsPalate />
                <FooterV3 />
                <PageSocial />
            </div>
        </>
    );
};

export default ContactUsPage;