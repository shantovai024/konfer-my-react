interface FormEventHandler {
    (event: React.FormEvent<HTMLFormElement>): void;
}

const SearchWidget = () => {

    const handleForm: FormEventHandler = (event) => {
        event.preventDefault()
        const form = event.target as HTMLFormElement;
        form.reset()
    }

    return (
        <>
            <div className="sidebar-widget search-box">
                <h3 className="sidebar-title">Search</h3>
                <form onSubmit={handleForm}>
                    <div className="form-group">
                        <input type="search" name="search-field" placeholder="Search ......" required />
                        <button type="submit"><i className="icon flaticon-search" /></button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default SearchWidget;