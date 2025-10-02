import { Helmet } from "react-helmet-async";
import BreadCrumb from "../../components/breadCrumb/BreadCrumb";
import ErrorPageContent from "../../components/error/ErrorPageContent";
import HeaderV3 from "../../components/header/HeaderV3";
import FooterV3 from "../../components/footer/FooterV3";

const ErrorPage = () => {
    return (
        <>
            <Helmet>
                <title>Konfer - Error 404</title>
            </Helmet>

            <div className="page-wrapper">
                <HeaderV3 parentMenu="about" />
                <BreadCrumb title="Error 404" subtitle="Error 404" />
                <ErrorPageContent />
                <FooterV3 />
            </div>
        </>
    );
};

export default ErrorPage;