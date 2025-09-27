import { useState } from "react";
import featureV2Data from "../../assets/jsonData/feature/featureV2Data.json";
import AnimatedText from "../animation/AnimatedText";
import SingleFeatureV2 from "./SingleFeatureV2";

const FeatureV2 = () => {

    const [activeFeatureId, setActiveFeatureId] = useState(featureV2Data[0]?.id || null);

    const handleMouseEnter = (id: number) => {
        setActiveFeatureId(id);
    };

    const handleMouseLeave = () => {
        // Do nothing on mouse leave to keep the active item
    };

    return (
        <>
            <section className="feature-section-two">
                <div className="auto-container">
                    <div className="row">
                        <div className="blocks-box col-xl-6 col-lg-12 col-md-12 col-sm-12">
                            <div className="sec-title orange">
                                <span className="sub-title">Our Features</span>
                                <AnimatedText>
                                    Tailored Features <br /> for Your Events
                                </AnimatedText>
                            </div>

                            {featureV2Data.slice(0, 2).map(feature =>
                                <div className="feature-block-two has-active" data-aos="fade-up" data-aos-delay={feature.delay}>
                                    <div className={`inner-box ${activeFeatureId === feature.id ? 'active' : ''}`}
                                        onMouseEnter={() => handleMouseEnter(feature.id)}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        <SingleFeatureV2 feature={feature} key={feature.id} />
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="blocks-box col-xl-6 col-lg-12 col-md-12 col-sm-12">
                            {featureV2Data.slice(2, 5).map(feature =>
                                <div className="feature-block-two has-active" data-aos="fade-up" data-aos-delay={feature.delay}>
                                    <div className={`inner-box ${activeFeatureId === feature.id ? 'active' : ''}`}
                                        onMouseEnter={() => handleMouseEnter(feature.id)}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        <SingleFeatureV2 feature={feature} key={feature.id} />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default FeatureV2;