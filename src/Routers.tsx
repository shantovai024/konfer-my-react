import { Route, Routes } from "react-router-dom";
import Home1 from "./pages/homePages/Home1";
import Home2 from "./pages/homePages/Home2";
import Home3 from "./pages/homePages/Home3";

const Routers = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home1 />} />
                <Route path="/home-2" element={<Home2 />} />
                <Route path="/home-3" element={<Home3 />} />
            </Routes>
        </>
    );
};

export default Routers;