import BreadCrumb from "../../components/breadCrumb/BreadCrumb";
import ClientV2 from "../../components/clients/ClientV2";
import FooterV1 from "../../components/footer/FooterV1";
import HeaderV3 from "../../components/header/HeaderV3";
import PriceV1 from "../../components/price/PriceV1";
import PriceV2 from "../../components/price/PriceV2";
import PriceV3 from "../../components/price/PriceV3";
import SubscribeV1 from "../../components/subscribe/SubscribeV1";
import PageSocial from "../../components/utilities/PageSocial";

const PricingPage = () => {
    return (
        <>
            <div className="page-wrapper">
                <HeaderV3 />
                <BreadCrumb title="Buy Tickets" subtitle="Buy Tickets" />
                <PriceV1 />
                <PriceV3 />
                <ClientV2 />
                <PriceV2 sectionClass="alternate" />
                <SubscribeV1 />
                <FooterV1 />
                <PageSocial />
            </div>
        </>
    );
};

export default PricingPage;