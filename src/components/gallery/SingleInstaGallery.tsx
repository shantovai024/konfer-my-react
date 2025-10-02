import { Item } from 'react-photoswipe-gallery';
import { Link } from 'react-router-dom';

interface DataType {
    id: number;
    image: string;
    imageFull: string;
}

const SingleInstaGallery = ({ gallery }: { gallery: DataType }) => {
    const { image, imageFull } = gallery

    return (
        <>
            <div className="insta-gallery swiper-wrapper">
                <figure className="image swiper-slide">
                    <img src={`/images/resource/${image}`} alt="image" />
                </figure>
                <div className="overlay-box">
                    <Link className='insta-image' to="#">
                        <Item
                            original={`/images/resource/${imageFull}`}
                            thumbnail={`/images/resource/${image}`}
                            width="480"
                            height="580"
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