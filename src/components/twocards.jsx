import { MdLocationPin } from "react-icons/md";
import { useState, useEffect } from "react";
import styling from "./twoCards.module.css";
import {
  FaLongArrowAltRight,
  FaLongArrowAltLeft,
  FaClock,
} from "react-icons/fa";

const CardsCarousel2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    {
      image: "/images/events-1-2.webp",
      li1: "8:00 PM",
      li2: "New York",
      p: "Countrary to Papular blief",
    },
    {
      image: "/images/events-1-3.webp",
      li1: "New York",
      li2: "New York",
      p: "There are many Variations of",
    },
    {
      image: "/images/events-1-1.webp",
      li1: "8:00 PM",
      li2: "New York",
      p: "Play for the world with us",
    },
    {
      image: "/images/events-1-1.webp",
      li1: "8:00 PM",
      li2: "New York",
      p: "Play for the world with us",
    },
    // Add more cards as needed
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [cards.length]);

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + cards.length) % cards.length
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  return (
    <>
      <div className={styling.carousel}>
        <div
          className={`${styling.cardsContainer} ${styling.cardsContainerTransform}`}
          style={{ "--translate-x": `-${currentIndex * 50}%` }}
        >
          {cards.map((card, index) => (
            <div key={index} className={styling.card}>
              <img
                src={card.image}
                alt={`Card ${index + 1}`}
                className={styling.cardImage}
              />
              <div className={styling.cardContent}>
                <ul className={styling.cardList}>
                  {card.li1 && (
                    <li>
                      <FaClock
                        style={{ color: "#FBD45A", fontSize: "1.3vw" }}
                      />{" "}
                      {card.li1}
                    </li>
                  )}

                  <li>
                    <MdLocationPin
                      style={{ color: "#FBD45A", fontSize: "1.5vw" }}
                    />{" "}
                    {card.li2}
                  </li>
                </ul>
                <p>{card.p}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styling.btn}>
        <button className={styling.arrow} onClick={handlePrev}>
          <FaLongArrowAltLeft />
        </button>
        <button className={styling.arrow} onClick={handleNext}>
          <FaLongArrowAltRight />
        </button>
      </div>
    </>
  );
};

export default CardsCarousel2;