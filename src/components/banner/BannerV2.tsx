import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper/modules';
import bannerV2Data from "../../assets/jsonData/banner/bannerV2Data.json";
import SingleBannerV2 from "./SingleBannerV2";

const BannerV2 = () => {
    return (
        <>
            <section className="banner-section-two style-two">
                <Swiper
                    className="swiper banner-swiper-two"
                    slidesPerView={1}
                    spaceBetween={0}
                    loop={true}
                    pagination={{
                        el: ".swiper-pagination",
                        clickable: true,
                    }}
                    modules={[Pagination]}
                >
                    {bannerV2Data.map(banner =>
                        <SwiperSlide className="banner-slide" key={banner.id}>
                            <SingleBannerV2 banner={banner} />
                        </SwiperSlide>
                    )}

                </Swiper>
                <div className="swiper-pagination" />
            </section >
        </>
    );
};

export default BannerV2;