import { toast } from "react-toastify";

interface FormEventHandler {
    (event: React.FormEvent<HTMLFormElement>): void;
}

const BlogForm = () => {

    const handleForm: FormEventHandler = (event) => {
        event.preventDefault()
        const form = event.target as HTMLFormElement;
        form.reset()
        toast.success("Thanks For Your Comment")
    }

    return (
        <>
            <form onSubmit={handleForm}>
                <div className="row clearfix">
                    <div className="col-lg-6 col-md-12 col-sm-12 form-group">
                        <input type="text" name="username" placeholder="Name" required />
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 form-group">
                        <input type="email" name="email" placeholder="Email" required />
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                        <textarea name="message" placeholder="Write a Message" required />
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                        <button className="theme-btn btn-style-one bg-orange" type="submit" name="submit-form" >
                            <span className="btn-title">Submit Review</span>
                            <i className="fa fa-arrow-right" />
                        </button>
                    </div>
                </div>
            </form>
        </>
    );
};

export default BlogForm;