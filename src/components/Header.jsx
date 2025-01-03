import styling from "./Header.module.css";
import { FaPhoneVolume } from "react-icons/fa6";
import { HiOutlineMailOpen } from "react-icons/hi";
import { ImLocation2 } from "react-icons/im";
import { FaHeart } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <header>
        <div className={styling.logo}>
          <img src="/images/logo-1.webp" alt="Logo" />{" "}
          <img src="/images/main-menu-shape-1.webp" alt="arrow" />
        </div>

        <div className={styling.right}>
          <div className={styling.Contact}>
            <div className={styling.volunteers}>
              <img src="/images/main-menu-heart-icon.webp" alt="heart" />
              &nbsp; <p>Become a Volunteers</p>
            </div>

            <div className={styling.helpline}>
              <span className={styling.phone}>
                <FaPhoneVolume />
              </span>{" "}
              <div className={styling.contact}>
                {" "}
                <p>Helpline</p>{" "}
                <div className={styling.Number}>
                  <li>+ 98 (000) - 9630</li>
                </div>
              </div>
            </div>

            <div className={styling.email}>
              <span className={styling.emailicon}>
                {" "}
                <HiOutlineMailOpen />{" "}
              </span>{" "}
              <div className={styling.mailAddress}>
                {" "}
                <p>send Email</p>{" "}
                <div className={styling.emailAddress}>
                  {" "}
                  <li> needhelp@company.com </li>
                </div>
              </div>
            </div>

            <div className={styling.address}>
              <span className={styling.addressicon}>
                {" "}
                <ImLocation2 />{" "}
              </span>{" "}
              <div className={styling.location}>
                {" "}
                <p>380 St Kilda Road</p>{" "}
                <div className={styling.addlocation}>
                  {" "}
                  <li> Melbourne, Australia </li>
                </div>
              </div>
            </div>

            <div className={styling.SocialmediaIcons}>
              <FaTwitter />
              <FaFacebook />
              <FaPinterest />
              <FaInstagram />
            </div>
          </div>

          <div className={styling.NavButton}>
            <div className={styling.navbar}>
              <ul>
                <li>Home</li>
                <li className={styling.dropdown}>
                  Pages{" "}
                  <ul className={styling.dropdownContent}>
                    <li>
                      About &nbsp; <FaLongArrowAltRight />
                    </li>
                    <li>
                      Volunteer &nbsp;
                      <FaLongArrowAltRight />
                    </li>
                    <li>
                      Become a Volunteer &nbsp; <FaLongArrowAltRight />
                    </li>
                    <li>
                      Volunteer Carousel &nbsp; <FaLongArrowAltRight />
                    </li>
                    <li>
                      Gallery &nbsp; <FaLongArrowAltRight />
                    </li>
                    <li>
                      Gallery Carousel &nbsp; <FaLongArrowAltRight />
                    </li>
                    <li>
                      FAQS <FaLongArrowAltRight />
                    </li>
                    <li>
                      404 &nbsp; <FaLongArrowAltRight />
                    </li>
                  </ul>{" "}
                </li>
                <li className={styling.dropdown}>
                  Donations{" "}
                  <ul className={styling.dropdownContent}>
                    <li>
                      Donation &nbsp; <FaLongArrowAltRight />
                    </li>
                    <li>
                      Donation List &nbsp;
                      <FaLongArrowAltRight />
                    </li>
                    <li>
                      Donation Carousel &nbsp; <FaLongArrowAltRight />
                    </li>
                    <li>
                      Donation Details &nbsp; <FaLongArrowAltRight />
                    </li>
                    <li>
                      Donate Now &nbsp; <FaLongArrowAltRight />
                    </li>
                  </ul>{" "}
                </li>
                <li className={styling.dropdown}>
                  Events
                  <ul className={styling.dropdownContent}>
                    <li>
                      Events &nbsp; <FaLongArrowAltRight />
                    </li>
                    <li>
                      Events Carousel &nbsp;
                      <FaLongArrowAltRight />
                    </li>
                    <li>
                      Event Details &nbsp; <FaLongArrowAltRight />
                    </li>
                  </ul>{" "}
                </li>

                <li className={styling.dropdown}>
                  News
                  <ul className={styling.dropdownContent}>
                    <li>
                      News &nbsp; <FaLongArrowAltRight />
                    </li>
                    <li>
                      News Carousel &nbsp;
                      <FaLongArrowAltRight />
                    </li>
                    <li>
                      News Right Sidebar &nbsp; <FaLongArrowAltRight />
                    </li>
                    <li>
                      News Left Sidebar &nbsp; <FaLongArrowAltRight />
                    </li>
                    <li>
                      News Details &nbsp; <FaLongArrowAltRight />
                    </li>
                    <li>
                      News Grid &nbsp; <FaLongArrowAltRight />
                    </li>
                  </ul>{" "}
                </li>
                <li className={styling.dropdown}>
                  Shop
                  <ul className={styling.dropdownContent}>
                    <li>
                      News &nbsp; <FaLongArrowAltRight />
                    </li>
                    <li>
                      Shop &nbsp;
                      <FaLongArrowAltRight />
                    </li>
                    <li>
                      Product Details &nbsp; <FaLongArrowAltRight />
                    </li>
                    <li>
                      Cart &nbsp; <FaLongArrowAltRight />
                    </li>
                    <li>
                      Checkout &nbsp; <FaLongArrowAltRight />
                    </li>
                    <li>
                      News Grid &nbsp; <FaLongArrowAltRight />
                    </li>
                  </ul>{" "}
                </li>
                <li>Contact</li>
              </ul>
            </div>
            <div className={styling.btn}>
              <button className={styling.navButton}>
                {" "}
                <FaHeart /> &nbsp; DONATE NOW
              </button>{" "}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
