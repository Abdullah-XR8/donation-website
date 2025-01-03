import styling from "./OurGallery.module.css";

const OurGallery = () => {
  return (
    <>
      <div className={styling.main}>
        <div className={styling.heading}>
          <h3>Our photo gallery</h3>
        </div>

        <div className={styling.contentwrapper}>
          <div className={styling.gallery}>
            <div className={styling.galleryImage}>
              <img
                src="/images/gallery-1-1.webp"
                alt="Image 1"
                className={styling.image}
              />

              <div className={styling.overlayText}>Charity Education</div>
            </div>
            <div className={styling.galleryImage}>
              <img
                src="/images/gallery-1-2.webp"
                alt="Image 2"
                className={styling.image}
              />

              <div className={styling.overlayText}>Charity Education</div>
            </div>
            <div className={styling.galleryImage}>
              <img
                src="/images/gallery-1-3.webp"
                alt="Image 3"
                className={styling.image}
              />

              <div className={styling.overlayText}>Charity Education</div>
            </div>
            <div className={styling.galleryImage}>
              <img
                src="/images/gallery-1-4.webp"
                alt="Image 4"
                className={styling.image}
              />

              <div className={styling.overlayText}>Charity Education</div>
            </div>
            <div className={styling.galleryImage}>
              <img
                src="/images/gallery-1-5.webp"
                alt="Image 5"
                className={styling.image}
              />

              <div className={styling.overlayText}>Charity Education</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurGallery;
