import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import TopList from "./components/TopList/TopList"
import Banner from "./components/Banner/Banner";
import OurServices from "./components/OurServices/OurServices";
import BgImage from "./assets/2.png";

const BgStyle = {
  backgroundImage : `url(${BgImage})`,
  backgroundRepeat : "no-repeat",
  backgroundSize : "cover",
  backgroundPosition : "center",
  }
function App() {
  return (
    <div style={BgStyle} className="overflow-hidden">
        <div className="min-h-screen bg-white/50 backdrop-blur-3xl">
        <Navbar/>
        <Hero/>
        <TopList/>
        <Banner/>
        <OurServices/>
        </div>
    </div>
  )
}

export default App