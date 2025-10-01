import { Link } from 'react-router-dom';
import { Item } from 'react-photoswipe-gallery';

interface DataType {
    fullThumb: string;
}

const SingleImageBox = ({ gallery }: { gallery: DataType }) => {
    const { fullThumb } = gallery

    return (
        <>
            <div className="inner-box">
                <figure className="image">
                    <img src={`/images/resource/${fullThumb}`} alt="image" />
                    <img src={`/images/resource/${fullThumb}`} alt="image" />
                </figure>
                <div className="overlay-box">
                    <Link className="lightbox-image" to="#">
                        <Item
                            original={`images/resource/${fullThumb}`}
                            thumbnail={`images/resource/${fullThumb}`}
                            width="480"
                            height="580"
                        >
                            {({ ref, open }) => (
                                <span ref={ref} onClick={open} className="icon fa fa-plus" />
                            )}
                        </Item>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default SingleImageBox;