import styling from "./OxpinsCharity.module.css";
import { FaPeopleGroup } from "react-icons/fa6";
import { BiSolidDonateHeart } from "react-icons/bi";

const OxpinCharity = () => {
  return (
    <>
      <div className={styling.main}>
        <div className={styling.container}>
          <div className={styling.leftSide}>
            {" "}
            <div className={styling.image}>
              {" "}
              <img src="/images/Image20241217234005.png" alt="mainimg" />
              <img src="/images/Image20241217234010.png" alt="Border-img" />
            </div>
          </div>
          <div className={styling.rightside}>
            <span>Welcome to oxpins charity</span>

            <h2>Helping each other can make world better</h2>

            <p>
              We help companies develop powerful corporate social
              responsibility, grantmaking, and employee engagement strategies.
              Our impact is about more than moving money to where it’s needed
              most it’s also about helping nonprofits access information and
              ideas that will help them listen, learn, and grow.
            </p>

            <p className={styling.fundText}>
              {" "}
              Helped fund <span>24,537</span> Projects in <span>24</span>{" "}
              Countries, Benefiting over
              <span>8.2</span> Million people.
            </p>

            <div className={styling.box}>
              <li>
                <FaPeopleGroup className={styling.iconStyle} />{" "}
                <span className={styling.para}>
                  {" "}
                  <p>
                    <a href="#">Join Our Team</a>{" "}
                  </p>
                  <p className={styling.Paragraph}>
                    Lorem ipsum dolor sit amet not quis mis notted.
                  </p>{" "}
                </span>
              </li>
              <li>
                <BiSolidDonateHeart className={styling.iconStyle} />{" "}
                <span className={styling.para}>
                  {" "}
                  <p>
                    {" "}
                    <a href="#">Join Our Team</a>{" "}
                  </p>
                  <p className={styling.Paragraph}>
                    Lorem ipsum dolor sit amet not quis mis notted.
                  </p>{" "}
                </span>
              </li>
            </div>

            <button className={styling.button}>DISCOVER MORE</button>

            {/* <button
              type="button"
              className={`btn btn-warning ${styling.button}`}
            >
              Warning\\\
            </button> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default OxpinCharity;
