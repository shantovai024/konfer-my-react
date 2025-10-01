import { Link } from "react-router-dom";
import categoryWidgetData from "../../assets/jsonData/widgets/categoryWidgetData.json"
import handleSmoothScroll from "../utilities/handleSmoothScroll";

const CategoryWidget = () => {
    return (
        <>
            <div className="sidebar-widget category-list">
                <h3 className="sidebar-title">Categories</h3>
                <ul className="cat-list">
                    {categoryWidgetData.map(data =>
                        <li key={data.id}>
                            <Link to="#" onClick={handleSmoothScroll}>{data.name}</Link>
                        </li>
                    )}
                </ul>
            </div>
        </>
    );
};

export default CategoryWidget;