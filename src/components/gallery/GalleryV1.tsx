import { Gallery } from "react-photoswipe-gallery";
import GalleryV1Data from '../../assets/jsonData/gallery/galleryV1Data.json'
import SingleImageBox from "./SingleImageBox";

const GalleryV1 = () => {
    return (
        <>
            <section className="gallery-section p-0">
                <div className="outer-box">
                    <div className="gallery one">
                        <Gallery withDownloadButton>
                            {GalleryV1Data.map(gallery =>
                                <div className="gallery-block" key={gallery.id}>
                                    <SingleImageBox gallery={gallery} />
                                </div>
                            )}
                        </Gallery>
                    </div>
                </div>

                <div className="outer-box">
                    <div className="gallery two">
                        <Gallery withDownloadButton>
                            {GalleryV1Data.map(gallery =>
                                <div className="gallery-block" key={gallery.id}>
                                    <SingleImageBox gallery={gallery} />
                                </div>
                            )}
                        </Gallery>
                    </div>
                </div>
            </section>
        </>
    );
};

export default GalleryV1;