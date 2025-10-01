import BlogPageContent from "../../components/blog/BlogPageContent";
import BreadCrumb from "../../components/breadCrumb/BreadCrumb";
import FooterV3 from "../../components/footer/FooterV3";
import HeaderV1 from "../../components/header/HeaderV1";

const BlogPage = () => {
    return (
        <>
            <div className="page-wrapper">
                <HeaderV1 />
                <BreadCrumb title="Latest News" subtitle="Latest News" />
                <BlogPageContent />
                <FooterV3 />
            </div>
        </>
    );
};

export default BlogPage;