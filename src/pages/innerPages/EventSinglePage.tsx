import BreadCrumb from "../../components/breadCrumb/BreadCrumb";
import EventSingleContent from "../../components/event/EventSingleContent";
import FooterV3 from "../../components/footer/FooterV3";
import HeaderV2 from "../../components/header/HeaderV2";
import eventV2Data from "../../assets/jsonData/event/eventV2Data.json"
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const EventSinglePage = () => {

    const { id } = useParams();
    const tabDataId = parseInt(id || "0");

    // Flatten all tabData into a single array
    const allTabData = eventV2Data.flatMap(event => event.tabData);

    // Find the tabData item by id
    const data = allTabData.find(item => item.id === tabDataId);

    return (
        <>
            <Helmet>
                <title>Konfer - Event Single</title>
            </Helmet>

            <div className="page-wrapper">
                <HeaderV2 />
                <BreadCrumb title="Event Single" subtitle="Event Single" />
                {data && <EventSingleContent eventInfo={data} />}
                <FooterV3 />
            </div>
        </>
    );
};

export default EventSinglePage;