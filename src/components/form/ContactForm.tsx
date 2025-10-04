import { toast } from "react-toastify";

interface FormEventHandler {
    (event: React.FormEvent<HTMLFormElement>): void;
}

const ContactForm = () => {

    const handleForm: FormEventHandler = (event) => {
        event.preventDefault()
        const form = event.target as HTMLFormElement;
        form.reset()
        toast.success("Thanks For Your Message")
    }

    return (
        <>
            <div className="form-column col-xl-7 col-lg-12 col-sm-12 col-sm-12">
                <div className="inner-column">
                    <div className="contact-form">
                        <form id="email-form" onSubmit={handleForm}>
                            <div className="row">
                                <div className="form-group col-lg-12">
                                    <div className="response" />
                                </div>
                                <div className="form-group col-sm-6">
                                    <input name="firstName" className="firstname" type="text" autoComplete="off" placeholder="First Name" required />
                                </div>
                                <div className="form-group col-sm-6">
                                    <input name="lastName" className="lastname" type="text" autoComplete="off" placeholder="Last Name" required />
                                </div>
                                <div className="form-group col-sm-6">
                                    <input name="email" className="email" type="email" autoComplete="off" placeholder="Enter Email" required />
                                </div>
                                <div className="form-group col-sm-6">
                                    <input name="phone" className="phone" type="text" autoComplete="off" placeholder="Enter Phone" required />
                                </div>
                                <div className="form-group col-sm-12">
                                    <textarea name="message" className="message" autoComplete="off" placeholder="Enter Message" required />
                                </div>
                                <div className="form-group col-sm-12">
                                    <button type="submit" id="submit" className="theme-btn btn-style-one hover-dark">
                                        <span className="btn-title">Send Message</span>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactForm;