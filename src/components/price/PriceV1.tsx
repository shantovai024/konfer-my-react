import priceV1Data from '../../assets/jsonData/price/priceV1Data.json'
import AnimatedText from '../animation/AnimatedText';
import SinglePriceV1 from './SinglePriceV1';

const PriceV1 = () => {
    return (
        <>
            <section className="pricing-section">
                <div className="icon-three bounce-y" />
                <div className="icon-four" />
                <div className="auto-container">
                    <div className="sec-title text-center">
                        <span className="sub-title">Conference Ticket Price</span>
                        <AnimatedText>
                            Get You a Conference <br /> Tickets Now
                        </AnimatedText>
                    </div>
                    <div className="row">
                        {priceV1Data.map(plan =>
                            <SinglePriceV1 plan={plan} key={plan.id} />
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default PriceV1;