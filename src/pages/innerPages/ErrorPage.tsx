import { Helmet } from "react-helmet-async";
import BreadCrumb from "../../components/breadCrumb/BreadCrumb";
import ErrorPageContent from "../../components/error/ErrorPageContent";
import FooterV1 from "../../components/footer/FooterV1";
import HeaderV3 from "../../components/header/HeaderV3";

const ErrorPage = () => {
    return (
        <>
            <Helmet>
                <title>Konfer - Error 404</title>
            </Helmet>

            <div className="page-wrapper">
                <HeaderV3 />
                <BreadCrumb title="Error 404" subtitle="Error 404" />
                <ErrorPageContent />
                <FooterV1 />
            </div>
        </>
    );
};

export default ErrorPage;