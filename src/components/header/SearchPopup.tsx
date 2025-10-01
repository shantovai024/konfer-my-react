interface DataType {
    openSearch: boolean;
    searchClose: () => void;
}

interface FormEventHandler {
    (event: React.FormEvent<HTMLFormElement>): void;
}

const SearchPopup = ({ openSearch, searchClose }: DataType) => {

    const handleSearch: FormEventHandler = (event) => {
        event.preventDefault()
        const form = event.target as HTMLFormElement;
        form.reset()
    }

    return (
        <>
            <div id="search-popup" className={`search-popup ${openSearch ? "popup-visible" : ""}`} >
                <span className="search-back-drop"></span>
                <button className="close-search" onClick={searchClose}>
                    <span className="fa fa-times"></span>
                </button>
                <div className="search-inner">
                    <form onSubmit={handleSearch}>
                        <div className="form-group">
                            <input type="search" name="search-field" value="" autoComplete='off' placeholder="Search..." required />
                            <button type="submit"><i className="fa fa-search"></i></button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default SearchPopup;