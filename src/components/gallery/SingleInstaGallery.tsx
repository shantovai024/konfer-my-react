import { Item } from 'react-photoswipe-gallery';
import { Link } from 'react-router-dom';

interface DataType {
    id: number;
    image: string;
}

const SingleInstaGallery = ({ gallery }: { gallery: DataType }) => {
    const { image } = gallery

    return (
        <>
            <div className="insta-gallery swiper-wrapper">
                <figure className="image swiper-slide">
                    <img src={`/images/resource/${image}`} alt="image" />
                </figure>
                <div className="overlay-box">
                    <Link className='insta-image' to="#">
                        <Item
                            original={`/images/resource/${image}`}
                            thumbnail={`/images/resource/${image}`}
                            width="100"
                            height="100"
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

export default SingleInstaGallery;