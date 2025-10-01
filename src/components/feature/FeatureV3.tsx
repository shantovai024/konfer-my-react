import { useState } from "react";
import featureV3Data from "../../assets/jsonData/feature/featureV3Data.json"
import SingleFeatureV3 from "./SingleFeatureV3";

interface DataType {
    isFull?: boolean
}

const FeatureV3 = ({ isFull }: DataType) => {

    const [activeFeatureId, setActiveFeatureId] = useState(featureV3Data[0]?.id || null);

    const handleMouseEnter = (id: number) => {
        setActiveFeatureId(id);
    };

    const handleMouseLeave = () => {
        // Do nothing on mouse leave to keep the active item
    };

    return (
        <>
            <section className="feature-section-three">
                <div className="large-container">
                    <div className="row">

                        {isFull ?
                            <>
                                {
                                    featureV3Data.map(feature =>
                                        <div className="feature-block-three has-active col-xl-3 col-lg-6 col-md-6 col-sm-6" data-aos="fade-up" data-aos-delay={feature.delay} key={feature.id}>
                                            <div
                                                className={`inner-box ${activeFeatureId === feature.id ? "active" : ""}`}
                                                onMouseEnter={() => handleMouseEnter(feature.id)}
                                                onMouseLeave={handleMouseLeave}
                                            >
                                                <SingleFeatureV3 feature={feature} />
                                            </div>
                                        </div>
                                    )
                                }
                            </>
                            :
                            <>
                                {
                                    featureV3Data.slice(0, 4).map(feature =>
                                        <div className="feature-block-three has-active col-xl-3 col-lg-6 col-md-6 col-sm-6" data-aos="fade-up" data-aos-delay={feature.delay} key={feature.id}>
                                            <div
                                                className={`inner-box ${activeFeatureId === feature.id ? "active" : ""}`}
                                                onMouseEnter={() => handleMouseEnter(feature.id)}
                                                onMouseLeave={handleMouseLeave}
                                            >
                                                <SingleFeatureV3 feature={feature} />
                                            </div>
                                        </div>
                                    )
                                }
                            </>
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default FeatureV3;