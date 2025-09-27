import { toast } from 'react-toastify';

const NewsLetterForm = () => {

    const handleSubscribe = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        event.currentTarget.reset();
        toast.success("Thanks for Subscription!")
    }

    return (
        <>
            <form onSubmit={handleSubscribe}>
                <div className="form-group">
                    <input type="email" name="field-name" placeholder="Enter Your Email" autoComplete='off' required />
                    <button type="submit" className="theme-btn btn-style-one bg-yellow"><span className="btn-title">Subscribe</span></button>
                </div>
            </form>
        </>
    );
};

export default NewsLetterForm;