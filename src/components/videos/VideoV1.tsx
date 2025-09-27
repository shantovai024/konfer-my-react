import { useState } from 'react';
import ModalVideo from 'react-modal-video';
import { Link } from "react-router-dom";
import AnimatedText from '../animation/AnimatedText';

const VideoV1 = () => {

    const [isOpen, setOpen] = useState(false);

    return (
        <>
            <section className="video-section parallax-section">
                <div className="outer-box">
                    <div className="icon-two bounce-y" />
                    <div className="parallax-bg bg bg-image" data-speed="0.5" style={{ backgroundImage: 'url("images/background/2.jpg")' }} />
                    <div className="image-box">
                        <div className="image-outer">
                            <figure className="image">
                                <img src="/images/resource/video1-1.png" alt="Image" />
                            </figure>
                        </div>
                        <div className="video-box">
                            <svg viewBox="0 0 100 100" width={100} height={100} className="circular-text">
                                <defs><path id="circle" d="M 50, 50m -37, 0a 37,37 0 1,1 74,0a 37,37 0 1,1 -74,0" /></defs>
                                <text><textPath xlinkHref="#circle">Watch the video for conference </textPath></text>
                            </svg>
                            <Link className="play-now" onClick={() => setOpen(true)} to="#">
                                <i className="flaticon-remote-control-fast-forward-button" aria-hidden="true"></i>
                                <span className="ripple"></span>
                            </Link>
                        </div>
                    </div>

                    <div className="auto-container">
                        <div className="row">
                            <div className="empty-column col-lg-6 col-md-12 col-sm-12" />
                            <div className="content-column col-lg-6 col-md-12 col-sm-12">
                                <div className="inner-column">
                                    <div className="sec-title yellow light">
                                        <span className="sub-title">Let’s do it hurry</span>
                                        <AnimatedText>
                                            Haven’t Booked Your Seat Yet?
                                        </AnimatedText>
                                    </div>
                                    <div className="btn-box">
                                        <Link to="/pricing" className="theme-btn btn-style-one">
                                            <span className="btn-title">Buy Ticket</span>
                                        </Link>
                                    </div>
                                    <div className="video-box show-lg">
                                        <svg viewBox="0 0 100 100" width={100} height={100} className="circular-text">
                                            <defs><path id="circle" d="M 50, 50m -37, 0a 37,37 0 1,1 74,0a 37,37 0 1,1 -74,0" /></defs>
                                            <text><textPath xlinkHref="#circle">Watch the video for cenference </textPath></text>
                                        </svg>
                                        <Link className="play-now" onClick={() => setOpen(true)} to="#">
                                            <i className="flaticon-remote-control-fast-forward-button" aria-hidden="true"></i>
                                            <span className="ripple"></span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <ModalVideo channel='youtube' isOpen={isOpen} videoId="Fvae8nxzVz4" onClose={() => setOpen(false)} />
            </section>
        </>
    );
};

export default VideoV1;