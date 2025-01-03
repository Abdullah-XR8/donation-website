// import { useEffect, useState } from "react";
// import styling from "./imageSlider.module.css";

// // Define the images array within the same file
// const images = [
//   "/images/charitylife.webp",
//   "/images/treelife.webp",
//   "/images/lorem.webp",
//   "/images/thebird.webp",
//   "/images/healthcare.webp",
//   "/images/unity.webp",
//   // Add more image URLs as needed
// ];

// const ImageSlider = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const visibleImagesCount = 5; // Number of images visible at a time

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 3000); // 3 seconds

//     return () => clearInterval(interval);
//   }, []);

//   const getDisplayedImages = () => {
//     const start = currentIndex;
//     const end = start + visibleImagesCount;
//     return images
//       .slice(start, end)
//       .concat(images.slice(0, Math.max(0, end - images.length)));
//   };

//   return (
//     <div className={styling.container}>
//       <div className={styling.imagewrapper}>
//   <div className={styling.imagescontainer}>
//     {getDisplayedImages().map((image, index) => (
//       <img
//         key={index}
//         src={image}
//         alt={`Slide ${index}`}
//         className={styling.image}
//         style={{
//           transform: `translateX(-${(currentIndex % visibleImagesCount) * (100 / visibleImagesCount)}%)`
//         }}
//       />
//     ))}
//   </div>
// </div>
//     </div>
//   );
// };

// export default ImageSlider;
import { useEffect, useState } from "react";
import styling from "./imageSlider.module.css";

const images = [
  "/images/charitylife.webp",
  "/images/treelife.webp",
  "/images/lorem.webp",
  "/images/thebird.webp",
  "/images/healthcare.webp",
  "/images/unity.webp",
  // Add more image URLs as needed
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleImagesCount = 6; // Number of images visible at a time

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // 3 seconds

    return () => clearInterval(interval);
  }, []);

  const getDisplayedImages = () => {
    const displayedImages = [];
    for (let i = 0; i < visibleImagesCount; i++) {
      const imageIndex = (currentIndex + i) % images.length;
      displayedImages.push(images[imageIndex]);
    }
    return displayedImages;
  };

  return (
    <div className={styling.container}>
      <div className={styling.imagewrapper}>
        <div className={styling.imagescontainer}>
          {getDisplayedImages().map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index}`}
              className={styling.image}
              style={{
                transform: `translateX(-${currentIndex * (12 + 2)}vw)`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
