import BlogSingleContent from "../../components/blog/BlogSingleContent";
import BreadCrumb from "../../components/breadCrumb/BreadCrumb";
import FooterV3 from "../../components/footer/FooterV3";
import HeaderV2 from "../../components/header/HeaderV2";
import blogData from "../../assets/jsonData/blog/blogData.json"
import { useParams } from "react-router-dom";

const BlogSinglePage = () => {

    const { id } = useParams();
    const data = blogData.find(blog => blog.id === parseInt(id || '0'));

    return (
        <>
            <div className="page-wrapper">
                <HeaderV2 />
                <BreadCrumb title="Blog Single" subtitle="Blog Single" />
                {data && <BlogSingleContent blogInfo={data} />}
                <FooterV3 />
            </div>
        </>
    );
};

export default BlogSinglePage;