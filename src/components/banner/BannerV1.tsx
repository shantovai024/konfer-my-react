import { useMemo } from "react";
import bannerV1Data from "../../assets/jsonData/banner/bannerV1Data.json"
import TimeV1 from "../counter/TimeV1";
import SingleBannerV1 from "./SingleBannerV1";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

const BannerV1 = () => {

    const time = useMemo(() => new Date("Nov 07 2026"), []);

    return (
        <>
            <section className="banner-section style-two">
                <div className="banner-layer" />
                <Swiper className="banner-swiper"
                    slidesPerView={1}
                    spaceBetween={0}
                    loop={true}
                    pagination={{
                        el: ".swiper-pagination",
                        clickable: true,
                    }}
                    modules={[Pagination]}
                >
                    <div className="swiper-wrapper">
                        {bannerV1Data.map(banner =>
                            <SwiperSlide key={banner.id} className="banner-slide">
                                <SingleBannerV1 banner={banner} />
                            </SwiperSlide>
                        )}
                    </div>

                    <div className="time-counter" >
                        <TimeV1 expiryTimestamp={time} />
                    </div>
                </Swiper>
                <div className="swiper-pagination" />
            </section >
        </>
    );
};

export default BannerV1;