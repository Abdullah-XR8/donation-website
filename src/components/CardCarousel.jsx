import styling from "./CardCarousel.module.css";
import CardsCarousel from "./Cards";
import CardsCarousel1 from "./OneCard";
import CardsCarousel2 from "./twocards";

const CardCarousel = () => {
  return (
    <>
      <div className={styling.Section}>
        <div className={styling.Flex}>
          <div className={styling.text}>
            <span className={styling.Title}>Upcoming events</span>
            <h2 className={styling.Heading}>Join our latest upcoming events</h2>
            <p className={styling.Paragraph}>
              There are many variations of passages of lorem ipsum available but
              the majority have suffered.
            </p>
            <button className={styling.button}>DISCOVER MORE</button>
          </div>

          <div className={styling.CardsContainer}>
            {" "}
            <CardsCarousel /> <CardsCarousel2 />
            <CardsCarousel1 />
          </div>
        </div>
      </div>
    </>
  );
};

export default CardCarousel;
