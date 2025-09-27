import { Item } from 'react-photoswipe-gallery';
import { Link } from 'react-router-dom';

interface DataType {
    image: string
}

const SingleGalleryV2 = ({ gallery }: { gallery: DataType }) => {
    const { image } = gallery;

    return (
        <>
            <div className="inner-box">
                <img src={`/images/resource/${image}`} alt="Image" />

                <div className="overlay-box">
                    <Link className='insta-image' to="#">
                        <Item
                            original={`/images/resource/${image}`}
                            thumbnail={`/images/resource/${image}`}
                            width="370"
                            height="370"
                        >
                            {({ ref, open }) => (
                                <span ref={ref} onClick={open} className='fa-solid fa-up-down-left-right' />
                            )}
                        </Item>
                    </Link>
                </div>

            </div>
        </>
    );
};

export default SingleGalleryV2;