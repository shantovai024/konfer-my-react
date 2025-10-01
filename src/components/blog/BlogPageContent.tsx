import CategoryWidget from "../widgets/CategoryWidget";
import PostWidget from "../widgets/PostWidget";
import SearchWidget from "../widgets/SearchWidget";
import TagsWidget from "../widgets/TagsWidget";
import blogData from "../../assets/jsonData/blog/blogData.json"
import SingleBlogContent from "./SingleBlogContent";
import { useEffect, useState } from 'react';
import Pagination from 'react-paginate';
import { useNavigate, useParams } from 'react-router-dom';

const BlogPageContent = () => {

    // Pagination 
    const navigate = useNavigate();
    const { page } = useParams<{ page?: string }>();

    // Set initial page from URL
    const currentPageNumber = Number(page) || 1;
    const [currentPage, setCurrentPage] = useState(currentPageNumber);
    const [itemsPerPage] = useState(4);

    useEffect(() => {
        setCurrentPage(currentPageNumber);
    }, [currentPageNumber]);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentBlogData = blogData.slice(startIndex, endIndex);

    const handlePageClick = (data: { selected: number }) => {
        const selectedPage = data.selected + 1;
        setCurrentPage(selectedPage);

        // Update the URL dynamically
        navigate(`/blogs?page=${selectedPage}`);

        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 200);
    };

    const totalPages = Math.ceil(blogData.length / itemsPerPage);

    return (
        <>
            <section className="blog-section">
                <div className="auto-container">
                    <div className="row">

                        {/* Content Column */}
                        <div className="content-column col-xl-8 col-lg-12 col-md-12 col-sm-12">
                            <div className="inner-column">

                                {currentBlogData.map(blog =>
                                    <SingleBlogContent blog={blog} key={blog.id} />
                                )}

                                <ul className="styled-pagination">
                                    <Pagination
                                        previousLabel={currentPage === 1 ? <i className='fas fa-ban'></i> : <i className='fa fa-angle-left'></i>}
                                        nextLabel={currentPage === totalPages ? <i className='fas fa-ban'></i> : <i className='fa fa-angle-right'></i>}
                                        breakLabel={'...'}
                                        pageCount={Math.ceil(blogData.length / itemsPerPage)}
                                        marginPagesDisplayed={2}
                                        pageRangeDisplayed={5}
                                        onPageChange={handlePageClick}
                                        containerClassName={'pagination text-center'}
                                        activeClassName={'active'}
                                        pageClassName={'page-item'}
                                        pageLinkClassName={'page-link'}
                                        previousLinkClassName={'page-link'}
                                        nextLinkClassName={'page-link'}
                                    />
                                </ul>
                            </div>
                        </div>

                        {/* Sidebar Side */}
                        <div className="sidebar-column col-xl-4 col-lg-12 col-md-12 col-sm-12">
                            <aside className="sidebar">
                                <SearchWidget />
                                <PostWidget />
                                <CategoryWidget />
                                <TagsWidget />
                            </aside>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BlogPageContent;