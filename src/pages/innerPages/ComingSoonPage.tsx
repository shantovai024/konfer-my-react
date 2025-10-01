import BreadCrumb from "../../components/breadCrumb/BreadCrumb";
import ComingSoonContent from "../../components/comingSoon/ComingSoonContent";
import FooterV3 from "../../components/footer/FooterV3";
import HeaderV2 from "../../components/header/HeaderV2";


const ComingSoonPage = () => {
    return (
        <>
            <div className="page-wrapper">
                <HeaderV2 />
                <BreadCrumb title="Coming Soon" subtitle="Coming Soon" />
                <ComingSoonContent />
                <FooterV3 />
            </div>
        </>
    );
};

export default ComingSoonPage;