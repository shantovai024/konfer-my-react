import BlogSingleContent from "../../components/blog/BlogSingleContent";
import BreadCrumb from "../../components/breadCrumb/BreadCrumb";
import FooterV3 from "../../components/footer/FooterV3";
import HeaderV2 from "../../components/header/HeaderV2";
import blogData from "../../assets/jsonData/blog/blogData.json"
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const BlogSinglePage = () => {

    const { id } = useParams();
    const data = blogData.find(blog => blog.id === parseInt(id || '0'));

    return (
        <>
            <Helmet>
                <title>Konfer - Blog Single</title>
            </Helmet>

            <div className="page-wrapper">
                <HeaderV2 parentMenu="blogs" />
                <BreadCrumb title="Blog Single" subtitle="Blog Single" />
                {data && <BlogSingleContent blogInfo={data} />}
                <FooterV3 />
            </div>
        </>
    );
};

export default BlogSinglePage;