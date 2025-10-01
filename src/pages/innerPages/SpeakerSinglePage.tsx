import BreadCrumb from "../../components/breadCrumb/BreadCrumb";
import FooterV3 from "../../components/footer/FooterV3";
import HeaderV1 from "../../components/header/HeaderV1";
import SpeakerInfoContent from "../../components/speakers/SpeakerInfoContent";
import speakersV1Data from '../../assets/jsonData/speakers/speakersV1Data.json'
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const SpeakerSinglePage = () => {

    const { id } = useParams();
    const data = speakersV1Data.find(speaker => speaker.id === parseInt(id || '0'));

    return (
        <>
            <Helmet>
                <title>Konfer - Speaker Single</title>
            </Helmet>

            <div className="page-wrapper">
                <HeaderV1 />
                <BreadCrumb title="Speaker's Detail" subtitle="Speaker's Detail" />
                {data && <SpeakerInfoContent speakerInfo={data} />}
                <FooterV3 />
            </div>
        </>
    );
};

export default SpeakerSinglePage;