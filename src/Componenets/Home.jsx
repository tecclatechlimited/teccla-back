import Amenities from "./Amenities";
import Cards from "./Cards";
import Carousel from "./Carousel";
import Footer from "./Footer";
import Form from "./Form";
import Gallery from "./Gallery";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Offers from "./Offers";
import Rooms from "./Rooms";
import Sidebar from "./SidebarOLD";
import Slider from "./Slider";
import Updates from "./Updates";
import Landmarks from "./Landmarks";
import MapLocations from "./MapLocations";


function Home() {
  return (
    <div >
      <Hero />
      <Offers />
      <Slider />
      <Rooms />
      <Gallery />
      <Cards />
      <Carousel />
      <Amenities />
      {/* <Landmarks /> */}
      <MapLocations />
      <Updates />
      <Form />
      <Footer />
    </div>
  );
}

export default Home;
