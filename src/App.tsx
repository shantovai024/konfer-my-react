import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import 'swiper/css'
import 'swiper/bundle'
import 'react-toastify/dist/ReactToastify.css'
import 'react-modal-video/css/modal-video.css'
import 'photoswipe/dist/photoswipe.css'

import '../src/assets/css/color-switcher.css'
import '../src/assets/css/flaticon.css'
import '../src/assets/css/elegent-icon.css'
import '../src/assets/css/linear.css'
import '../src/assets/css/fontawesome.css'
import '../src/assets/css/animate.css'
import '../src/assets/css/style.css'
import '../src/assets/css/responsive.css'

import Dependency from "./components/utilities/Dependency"
import Routers from "./Routers"
import RoutesScrollToTop from './components/utilities/RoutesScrollToTop'
import Preloader from './components/utilities/Preloader'
import { useEffect, useState } from 'react'

function App() {

  // Preloader
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    Promise.all([
      document.fonts.ready,
    ])
      .then(() => setIsLoading(false))
      .catch(() => setIsLoading(false))
  }, [])

  return isLoading ? <Preloader /> : (
    <>
      <Routers />
      <RoutesScrollToTop />
      <Dependency />
    </>
  )
}

export default App
