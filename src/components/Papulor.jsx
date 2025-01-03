import styling from "./Papulor.module.css";

const Papolar = () => {
  return (
    <>
      <div className={styling.main}>
        <div className={styling.ContentWrapper}>
          <div className={styling.TextSection}>
            <span>Help & donate us now</span>
            <h2>
              Find the popular cause <br /> <span>and donate them</span>
            </h2>
          </div>

          <div className={styling.CardsSection}>
            <div className={styling.card}>
              <div className={styling.image}>
                <img
                  src="/images/causes-1-1.webp"
                  alt="Card Image"
                  className={styling.cardImage}
                />{" "}
              </div>
              <h3 className={styling.cardTitle}>
                Let’s education for children get good life
              </h3>
              <p className={styling.cardDescription}>
                There are many of lorem, but majori have suffered alteration in
                some form.
              </p>
              <div className={styling.progressContainer}>
                <span className={styling.progressText}>36%</span>
                <div className={styling.progressBar}>
                  <div className={styling.progressFill}></div>
                </div>
                <div className={styling.progressLabels}>
                  <p>
                    $25,270 <em className={styling.Text}>Raised</em>
                  </p>
                  <p>
                    $30,000 <em className={styling.Text}>Goal</em>
                  </p>
                </div>
              </div>
            </div>
            <div className={styling.card}>
              <div className={styling.image}>
                <img
                  src="/images/causes-1-2.webp"
                  alt="Card Image"
                  className={styling.cardImage}
                />{" "}
              </div>
              <h3 className={styling.cardTitle}>
                It is a long established fact that a reader
              </h3>
              <p className={styling.cardDescription}>
                There are many of lorem, but majori have suffered alteration in
                some form.
              </p>
              <div className={styling.progressContainer}>
                <span className={styling.progressText}>36%</span>
                <div className={styling.progressBar}>
                  <div className={styling.progressFill}></div>
                </div>
                <div className={styling.progressLabels}>
                  <p>
                    $25,270 <em className={styling.Text}>Raised</em>
                  </p>
                  <p>
                    $30,000 <em className={styling.Text}>Goal</em>
                  </p>
                </div>
              </div>
            </div>
            <div className={styling.card}>
              <div className={styling.image}>
                <img
                  src="/images/causes-1-3.webp"
                  alt="Card Image"
                  className={styling.cardImage}
                />{" "}
              </div>
              <h3 className={styling.cardTitle}>
                There are many variations of passages
              </h3>
              <p className={styling.cardDescription}>
                There are many of lorem, but majori have suffered alteration in
                some form.
              </p>

              <div className={styling.progressContainer}>
                <span className={styling.progressText}>36%</span>
                <div className={styling.progressBar}>
                  <div className={styling.progressFill}></div>
                </div>
                <div className={styling.progressLabels}>
                  <p>
                    $25,270 <em className={styling.Text}>Raised</em>{" "}
                  </p>
                  <p>
                    $30,000 <em className={styling.Text}>Goal</em>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Papolar;
