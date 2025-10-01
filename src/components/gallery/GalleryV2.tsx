import AnimatedText from "../animation/AnimatedText";
import { galleryV2Data, GalleryV2Item } from "../../assets/jsonData/gallery/galleryV2Data";
import SingleGalleryV2 from "./SingleGalleryV2";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { Link } from "react-router-dom";
import { Gallery } from "react-photoswipe-gallery";

const GalleryV2 = () => {
    return (
        <>
            <section className="gallery-section-two pb-0 pull-down parallax-section">
                <div className="parallax-bg bg bg-image"
                    style={{ backgroundImage: 'url(/images/background/6.jpg)' }} />
                <div className="bg bg-pattern-11" />
                <div className="large-container">
                    <div className="outer-box">
                        <div className="title-box">
                            <div className="sec-title light text-center">
                                <span className="sub-title">About The Event</span>
                                <AnimatedText>
                                    Haven't booked your seat yet <br /> Get ticket now
                                </AnimatedText>
                            </div>
                            <div className="btn-box text-center">
                                <Link to="/pricing" className="theme-btn btn-style-one bg-orange">
                                    <span className="btn-title">Purchase Ticket</span>
                                </Link>
                            </div>
                        </div>
                        <Gallery withDownloadButton>
                            <Swiper
                                className="gallery-box gallery-swiper-two"
                                slidesPerView={6}
                                loop={true}
                                autoplay={{
                                    delay: 2000,
                                    disableOnInteraction: false,
                                }}
                                speed={1000}
                                breakpoints={{
                                    1200: {
                                        slidesPerView: 6,
                                    },
                                    1100: {
                                        slidesPerView: 6,
                                    },
                                    768: {
                                        slidesPerView: 5,
                                    },
                                    400: {
                                        slidesPerView: 3,
                                    },
                                    0: {
                                        slidesPerView: 2,
                                    },
                                }}
                                modules={[Autoplay]}
                            >
                                {galleryV2Data.map((gallery: GalleryV2Item) =>
                                    <SwiperSlide className="gallery-block-two" key={gallery.id}>
                                        <SingleGalleryV2 gallery={gallery} />
                                    </SwiperSlide>
                                )}
                            </Swiper>
                        </Gallery>
                    </div>
                </div>
            </section >
        </>
    );
};

export default GalleryV2;