import styling from "./volenture.module.css";

const Volunture = () => {
  return (
    <>
      <div className={styling.main}>
        <div className={styling.image}></div>

        <div className={styling.bkcolor}>
          <div className={styling.contentwrapper}>
            <p>Become a Volunteers</p>

            <h3>
              Join your hand with us for a <br />
              better life and future{" "}
            </h3>

            <button className={styling.button}>DISCOVER MORE</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Volunture;
