import FooterV3 from "../footer/FooterV3";
import HeaderV3 from "../header/HeaderV3"
import PageSocial from "../utilities/PageSocial";

interface LayoutProps {
    children?: React.ReactNode;
}

const LayoutV3 = ({ children }: LayoutProps) => {
    return (
        <>
            <div className="page-wrapper">
                <HeaderV3 />
                {children}
                <FooterV3 />
                <PageSocial />
            </div>
        </>
    );
};

export default LayoutV3;