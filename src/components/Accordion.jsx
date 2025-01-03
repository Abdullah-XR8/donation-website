import { useState } from "react";
import styling from "./Accordion.module.css";
import { IoIosArrowDropdownCircle } from "react-icons/io";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [delayedIndex, setDelayedIndex] = useState(null);

  const toggleFAQ = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
      setDelayedIndex(null);
    } else {
      setActiveIndex(index);
      setDelayedIndex(null);
      setTimeout(() => {
        setDelayedIndex(index);
      }, 300); // 0.3 seconds delay
    }
  };

  const faqs = [
    {
      question: "Nulla eu purus scelerisque, dignissim diam.",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      question: "Quisque non diam porta, ullamcorper dolor sit amet.",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      question: "How can I make a change to my application?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      question: "Sed mattis neque sed commodo efficitur.",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      question: "Sed mattis neque sed commodo efficitur.",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <div className={styling.FAQSection}>
      {faqs.map((faq, index) => (
        <div key={index} className={styling.faq}>
          <h4 onClick={() => toggleFAQ(index)}>
            {faq.question}
            <IoIosArrowDropdownCircle />
          </h4>
          <p
            className={`${
              delayedIndex === index ? styling.show : styling.hide
            }`}
            style={{ display: activeIndex === index ? "block" : "none" }}
            onTransitionEnd={(e) => {
              if (activeIndex !== index) {
                e.target.style.display = "none";
              } else {
                e.target.style.display = "block";
              }
            }}
          >
            {faq.answer}
          </p>
        </div>
      ))}
    </div>
  );
};

const MyAccordion = () => {
  return (
    <>
      <div className={styling.main}>
        <div className={styling.contentWrapper}>
          <div className={styling.hero}>
            <div className={styling.TextSection}>
              <span>Recently asked questions</span>
              <h2>People are frequently asking some questions from us</h2>
              <p>
                Proactively procrastinate cross-platform results via extensive
                ideas distinctively underwhelm enterprise. Compellingly
                plagiarize value-added sources with inexpensive schemas.
              </p>
              <button className={styling.button}>Learn How to Get Help</button>
            </div>
            <FAQSection />
          </div>
        </div>
      </div>
    </>
  );
};

export default MyAccordion;
