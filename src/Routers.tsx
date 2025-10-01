import { Route, Routes } from "react-router-dom";
import Home1 from "./pages/homePages/Home1";
import Home2 from "./pages/homePages/Home2";
import Home3 from "./pages/homePages/Home3";
import AboutUsPage from "./pages/innerPages/AboutUsPage";
import FaqPage from "./pages/innerPages/FaqPage";
import PricingPage from "./pages/innerPages/PricingPage";
import TestimonialPage from "./pages/innerPages/TestimonialPage";
import ContactUsPage from "./pages/innerPages/ContactUsPage";
import ComingSoonPage from "./pages/innerPages/ComingSoonPage";
import ServicesPage from "./pages/innerPages/ServicesPage";
import ServiceSinglePage from "./pages/innerPages/ServiceSinglePage";
import SpeakersPage from "./pages/innerPages/SpeakersPage";
import SpeakerSinglePage from "./pages/innerPages/SpeakerSinglePage";
import EventsPage from "./pages/innerPages/EventsPage";
import EventSinglePage from "./pages/innerPages/EventSinglePage";
import BlogPage from "./pages/innerPages/BlogPage";
import BlogSinglePage from "./pages/innerPages/BlogSinglePage";
import ErrorPage from "./pages/innerPages/ErrorPage";

const Routers = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home1 />} />
                <Route path="/home-2" element={<Home2 />} />
                <Route path="/home-3" element={<Home3 />} />
                <Route path="/about-us" element={<AboutUsPage />} />
                <Route path="/faqs" element={<FaqPage />} />
                <Route path="/pricing" element={<PricingPage />} />
                <Route path='/testimonials' element={<TestimonialPage />}></Route>
                <Route path='/contact' element={<ContactUsPage />}></Route>
                <Route path='/coming-soon' element={<ComingSoonPage />}></Route>

                <Route path='/services' element={<ServicesPage />}></Route>
                <Route path='/service-single/:id' element={<ServiceSinglePage />}></Route>

                <Route path='/speakers' element={<SpeakersPage />}></Route>
                <Route path='/speaker-single/:id' element={<SpeakerSinglePage />}></Route>

                <Route path='/events' element={<EventsPage />}></Route>
                <Route path='/event-single/:id' element={<EventSinglePage />}></Route>

                <Route path='/blogs' element={<BlogPage />}></Route>
                <Route path='/blog-single/:id' element={<BlogSinglePage />}></Route>

                <Route path='/blog-single/:id' element={<BlogSinglePage />}></Route>

                <Route path='*' element={<ErrorPage />}></Route>
            </Routes>
        </>
    );
};

export default Routers;