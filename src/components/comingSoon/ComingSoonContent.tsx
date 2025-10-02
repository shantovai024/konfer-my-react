import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import TimeV2 from '../counter/TimeV2';
import { useMemo } from 'react';

interface FormEventHandler {
    (event: React.FormEvent<HTMLFormElement>): void;
}

const ComingSoonContent = () => {

    const time = useMemo(() => new Date("Nov 07 2026"), []);

    const handleForm: FormEventHandler = (event) => {
        event.preventDefault()
        const form = event.target as HTMLFormElement;
        form.reset()
        toast.success("Thanks For Your Mail")
    }

    return (
        <>
            <section className="comming-soon">
                <div className="auto-container">
                    <div className="content">

                        {/* Logo Box */}
                        <div className="logo-box">
                            <div className="logo light">
                                <Link to="/">
                                    <img src="/images/logo-2.svg" alt="Image" />
                                </Link>
                            </div>
                            <div className="logo dark">
                                <Link to="/">
                                    <img src="/images/logo.svg" alt="Image" />
                                </Link>
                            </div>
                        </div>

                        {/* Clock */}
                        <div className="clock-wrapper">
                            <div className="clock-base">
                                <div className="click-indicator">
                                    <div><span /></div>
                                    <div><span /></div>
                                    <div><span /></div>
                                    <div><span /></div>
                                    <div><span /></div>
                                    <div><span /></div>
                                    <div><span /></div>
                                    <div><span /></div>
                                    <div><span /></div>
                                    <div><span /></div>
                                    <div><span /></div>
                                    <div><span /></div>
                                </div>
                                <div className="clock-hour" />
                                <div className="clock-minute" />
                                <div className="clock-second" />
                                <div className="clock-center" />
                            </div>
                        </div>

                        <TimeV2 expiryTimestamp={time} />

                        {/* Title Box */}
                        <div className="title-box">
                            <h2 className="title">Our Website is under construction.</h2>
                            <div className="text">stay tuned for something amazing! Subscribe to be notified</div>
                        </div>

                        {/* Form Box */}
                        <div className="emailed-form">
                            <form onSubmit={handleForm}>
                                <div className="form-group">
                                    <input type="email" name="email" placeholder="Enter Your Email ......" required />
                                    <button type="submit" className="form-btn"><i className="fa fa-envelope" /></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ComingSoonContent;