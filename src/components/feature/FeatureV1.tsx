import { useState } from 'react';
import featureV1Data from '../../assets/jsonData/feature/featureV1Data.json'
import AnimatedText from '../animation/AnimatedText';
import SingleFeatureV1 from './SingleFeatureV1';

const FeatureV1 = () => {

    const [activeFeatureId, setActiveFeatureId] = useState(featureV1Data[0]?.id || null);

    const handleMouseEnter = (id: number) => {
        setActiveFeatureId(id);
    };

    const handleMouseLeave = () => {
        // Do nothing on mouse leave to keep the active item
    };

    return (
        <>
            <section className="features-section">
                <div className="shape-one bounce-y"></div>
                <div className="shape-two"></div>
                <div className="auto-container">
                    <div className="row">
                        <div className='col-12'>
                            <div className="sec-title text-center">
                                <span className="sub-title">Our Features</span>
                                <AnimatedText>
                                    Tailored Features for <br /> Your Events
                                </AnimatedText>
                            </div>
                        </div>

                        {featureV1Data.map((feature) =>
                            <div className="feature-block has-active col-lg-3 col-md-6 col-sm-6" key={feature.id} data-aos="fade-up" data-aos-delay={feature.delay}>
                                <div
                                    key={feature.id}
                                    className={`inner-box ${activeFeatureId === feature.id ? "active" : ""}`}
                                    onMouseEnter={() => handleMouseEnter(feature.id)}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <SingleFeatureV1 feature={feature} />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default FeatureV1;