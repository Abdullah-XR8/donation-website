import CardCarousel from "./components/CardCarousel";
import Details from "./components/details";
import Header from "./components/Header";
import ImageSlider from "./components/imagesSlider";
// import ImageSlider from "./components/imagesSlider";
import OurGallery from "./components/OurGallery";
import OxpinCharity from "./components/Oxpins-Charity";
import Papolar from "./components/Papulor";
import Volunture from "./components/volenture";
import Footer from "./components/footer";
import MyAccordion from "./components/Accordion";

function App() {
  return (
    <>
      <Header></Header>
      <OxpinCharity />

      <Papolar />

      <Volunture />

      <CardCarousel />

      <Details />

      <ImageSlider />

      <OurGallery />

      <MyAccordion />

      <Footer />
    </>
  );
}

export default App;
