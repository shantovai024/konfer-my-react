import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'swiper/css';
import 'swiper/bundle';
import 'react-toastify/dist/ReactToastify.css';
import 'react-modal-video/css/modal-video.css';
import 'photoswipe/dist/photoswipe.css'

import '../src/assets/css/color-switcher.css'
import '../src/assets/css/flaticon.css'
import '../src/assets/css/elegent-icon.css'
import '../src/assets/css/fontawesome.css'
import '../src/assets/css/animate.css'
import '../src/assets/css/style.css'
import '../src/assets/css/responsive.css'

import Dependency from "./components/utilities/Dependency"
import RoutesScrollToTop from "./components/utilities/RoutesScrollToTop"
import Routers from "./Routers"

function App() {
  return (
    <>
      <Routers />
      <RoutesScrollToTop />
      <Dependency />
    </>
  )
}

export default App
