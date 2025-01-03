import styling from "./details.module.css";
import { MdVolunteerActivism } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";
import { FaGifts } from "react-icons/fa";

const Details = () => {
  return (
    <>
      <div className={styling.main}>
        <div className={styling.container}>
          <div className={styling.rightbox}>
            <div className={styling.heading}>
              {" "}
              <MdVolunteerActivism
                style={{ fontSize: "4rem", color: "#00715d" }}
              />{" "}
              <h3>Join us & become a volunteer</h3>
            </div>

            <p>
              Mauris feugiat at orci ac congue. mauris ut lacus quis proin diam.
            </p>

            <ul>
              <li>
                <FaArrowRight
                  style={{
                    color: "white",
                    fontSize: "1.5rem",
                  }}
                />
                <p>Sed et nulla a nunc finibus eleifend</p>
              </li>
              <li>
                <FaArrowRight
                  style={{
                    color: "white",
                    fontSize: "1.5rem",
                  }}
                />
                <p>Mauris nulla nisl, pellentesque vetae.</p>
              </li>
              <li>
                <FaArrowRight
                  style={{
                    color: "white",
                    fontSize: "1.5rem",
                  }}
                />
                <p>Proin quis aliquam nisi.</p>
              </li>
            </ul>

            <button className={styling.button}>View Details</button>
          </div>
          <div className={styling.leftbox}>
            <div className={styling.heading}>
              {" "}
              <FaGifts style={{ fontSize: "4rem", color: "#00715d" }} />{" "}
              <h3>Send a gift for childrens</h3>
            </div>

            <p>
              Mauris feugiat at orci ac congue. mauris ut lacus quis proin diam.
            </p>

            <ul>
              <li>
                <FaArrowRight
                  style={{
                    color: "white",
                    fontSize: "1.5rem",
                  }}
                />
                <p>Sed et nulla a nunc finibus eleifend</p>
              </li>
              <li>
                <FaArrowRight
                  style={{
                    color: "white",
                    fontSize: "1.5rem",
                  }}
                />
                <p>Mauris nulla nisl, pellentesque vetae.</p>
              </li>
              <li>
                <FaArrowRight
                  style={{
                    color: "white",
                    fontSize: "1.5rem",
                  }}
                />
                <p>Proin quis aliquam nisi.</p>
              </li>
            </ul>

            <button className={`${styling.button} ${styling.colorclass}`}>
              View Details
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
