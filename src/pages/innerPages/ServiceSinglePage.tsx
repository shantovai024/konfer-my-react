import BreadCrumb from "../../components/breadCrumb/BreadCrumb";
import FooterV3 from "../../components/footer/FooterV3";
import HeaderV2 from "../../components/header/HeaderV2";
import ServiceSingleContent from "../../components/services/ServiceSingleContent";
import featureV3Data from "../../assets/jsonData/feature/featureV3Data.json"
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const ServiceSinglePage = () => {

    const { id } = useParams();
    const data = featureV3Data.find(feature => feature.id === parseInt(id || '0'));

    return (
        <>
            <Helmet>
                <title>Konfer - Service Single</title>
            </Helmet>

            <div className="page-wrapper">
                <HeaderV2 parentMenu="about" />
                <BreadCrumb title="Service Details" subtitle="Service Details" />
                {data && <ServiceSingleContent serviceInfo={data} />}
                <FooterV3 />
            </div>
        </>
    );
};

export default ServiceSinglePage;