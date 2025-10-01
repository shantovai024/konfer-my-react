import BreadCrumb from "../../components/breadCrumb/BreadCrumb";
import EventV1 from "../../components/event/EventV1";
import EventV2 from "../../components/event/EventV2";
import EventV3 from "../../components/event/EventV3";
import FooterV2 from "../../components/footer/FooterV2";
import GalleryV2 from "../../components/gallery/GalleryV2";
import HeaderV2 from "../../components/header/HeaderV2";
import MarqueeV1 from "../../components/marquee/MarqueeV1";

const EventsPage = () => {
    return (
        <>
            <div className="page-wrapper">
                <HeaderV2 />
                <BreadCrumb title="Events" subtitle="Events" />
                <EventV3 />
                <MarqueeV1 />
                <EventV2 />
                <EventV1 />
                <GalleryV2 />
                <FooterV2 />
            </div>
        </>
    );
};

export default EventsPage;