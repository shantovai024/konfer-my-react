import { Helmet } from "react-helmet-async";
import BlogPageContent from "../../components/blog/BlogPageContent";
import BreadCrumb from "../../components/breadCrumb/BreadCrumb";
import FooterV3 from "../../components/footer/FooterV3";
import HeaderV1 from "../../components/header/HeaderV1";

const BlogPage = () => {
    return (
        <>
            <Helmet>
                <title>Konfer - Blogs</title>
            </Helmet>

            <div className="page-wrapper">
                <HeaderV1 parentMenu="blogs" />
                <BreadCrumb title="Latest News" subtitle="Latest News" />
                <BlogPageContent />
                <FooterV3 />
            </div>
        </>
    );
};

export default BlogPage;