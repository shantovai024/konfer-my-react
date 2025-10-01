import { Link } from "react-router-dom";
import tagsWidgetData from "../../assets/jsonData/widgets/tagsWidgetData.json"
import handleSmoothScroll from "../utilities/handleSmoothScroll";

const TagsWidget = () => {
    return (
        <>
            <div className="sidebar-widget tags">
                <h3 className="sidebar-title">Tags</h3>
                <ul className="popular-tags clearfix">
                    {tagsWidgetData.map(tag =>
                        <li key={tag.id}>
                            <Link to="#" onClick={handleSmoothScroll}>{tag.name}</Link>
                        </li>
                    )}
                </ul>
            </div>
        </>
    );
};

export default TagsWidget;