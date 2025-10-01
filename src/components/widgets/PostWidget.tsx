import postWidgetData from "../../assets/jsonData/widgets/postWidgetData.json"
import SinglePostWidget from "./SinglePostWidget";

const PostWidget = () => {
    return (
        <>
            <div className="sidebar-widget latest-news">
                <h3 className="sidebar-title">Popular Posts</h3>
                <div className="widget-content">
                    {postWidgetData.map(post =>
                        <SinglePostWidget post={post} key={post.id} />
                    )}
                </div>
            </div>
        </>
    );
};

export default PostWidget;