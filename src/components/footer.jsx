import styling from "./footer.module.css";
import { IoMdMail } from "react-icons/io";
import {
  FaPhone,
  FaTwitter,
  FaFacebook,
  FaPinterest,
  FaSquareInstagram,
} from "react-icons/fa6";
// import { FaTwitter } from "react-icons/fa6";
// import { FaFacebook } from "react-icons/fa6";
// import { FaPinterest } from "react-icons/fa6";
// import { FaSquareInstagram } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer>
        <div className={styling.container}>
          <div className={styling.contentWrapper}>
            <div className={styling.column}>
              <div className={styling.image}>
                <img src="/images/footer-logo.webp" alt="logo-img" />
              </div>

              <p className={styling.text}>
                Nulla ultricies justo sit amet ante efficitur, eget pharetra
                augue efficitur. Vestibulum viverra, dolor sit amet ultricies.
              </p>

              <button className={styling.button}>
                {" "}
                <FaHeart /> Donate Now
              </button>
            </div>

            <div className={styling.column}>
              <h3 className={styling.h3}>Links</h3>
              <ul className={styling.ul}>
                <li>About Us</li>
                <li>Contact</li>
                <li>Latest News</li>
                <li>Recent Events</li>
                <li>Donations</li>
              </ul>
            </div>

            <div className={styling.column}>
              <h3 className={styling.h3}>Non Profit</h3>
              <ul className={styling.ul}>
                <li>Differently Abled Kids</li>
                <li>Help Child Cancer</li>
                <li>Clean Pure Water</li>
                <li>Give them Education</li>
                <li>Start a Fundraising</li>
              </ul>
            </div>

            <div className={styling.column}>
              <h3 className={styling.h3}>Contact</h3>

              <p className={`${styling.text} ${styling.address}`}>
                380 Street Kilda Broklyn Road Melbourne Australia
              </p>
              <ul className={styling.ul}>
                <li>
                  {" "}
                  <IoMdMail
                    style={{ color: "#fbd45a", fontSize: "1.2rem" }}
                  />{" "}
                  &nbsp; &nbsp;&nbsp; needhelp@company.com
                </li>
                <li>
                  {" "}
                  <FaPhone
                    style={{ color: "#fbd45a", fontSize: "1.2rem" }}
                  />{" "}
                  &nbsp; &nbsp; + 98 (000) - 9630
                </li>
              </ul>

              <div className={styling.SocialIcons}>
                <li>
                  <FaTwitter />
                </li>
                <li>
                  <FaFacebook />
                </li>
                <li>
                  <FaPinterest />
                </li>
                <li>
                  <FaSquareInstagram />
                </li>
              </div>
            </div>
          </div>
        </div>

        <div className={styling.lowerpart}>
          <p className={styling.text}>© All Copyright 2023 by Oxpins.com.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
