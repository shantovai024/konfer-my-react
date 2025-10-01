import { useState } from 'react';
import ModalVideo from "react-modal-video";
import { Link } from "react-router-dom";
import useExpandAnimation from '../../hooks/useExpandAnimation';

const VideoV2 = () => {

    const [isOpen, setOpen] = useState(false);

    useExpandAnimation(".expand-section");

    return (
        <>
            <section className="video-section-two pt-0">
                <div className="outer-box expand-section">
                    <div className="bg bg-image bg-reveal" style={{ backgroundImage: 'url(/images/background/5.jpg)' }} />
                    <div className="auto-container">
                        <div className="icon-ten" />
                        <div className="icon-eleven" />
                        <div className="btn-box hide-sm">
                            <Link to="#" className="play-now" onClick={() => setOpen(true)}>
                                <div className="play-icon" />
                                <span className="ripple" />
                            </Link>
                        </div>
                        <div className="content-box">
                            <h4 className="sub-title">Ready to start With Us?</h4>
                            <h2 className="title">Explore The Popular <br /> Venues?</h2>
                        </div>
                        <div className="btn-box show-sm">
                            <Link to="#" className="play-now" onClick={() => setOpen(true)}>
                                <div className="play-icon" />
                                <span className="ripple" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <ModalVideo channel='youtube' isOpen={isOpen} videoId="Fvae8nxzVz4" onClose={() => setOpen(false)} />
        </>
    );
};

export default VideoV2;