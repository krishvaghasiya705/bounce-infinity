// import React, { useState, useEffect, useCallback } from 'react';
// import './slideimage.scss';
// import scooty1 from "../../assets/image/scooty1.png";
// import scooty2 from "../../assets/image/scooty2.png";
// import scooty3 from "../../assets/image/scooty3.png";

// const images = [
//     scooty1,
//     scooty2,
//     scooty3
// ];

// function Imageslide() {
//     const [currentImageIndex, setCurrentImageIndex] = useState(0);
//     const [isSliding, setIsSliding] = useState(false);

//     const changeImage = useCallback((index) => {
//         if (isSliding) return;

//         setIsSliding(true);

//         setTimeout(() => {
//             setCurrentImageIndex(index);
//             setIsSliding(false);
//         }, 500);
//     }, [isSliding]);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             const nextIndex = (currentImageIndex + 1) % images.length;
//             changeImage(nextIndex);
//         }, 3000); // Change image every 3 seconds

//         return () => clearInterval(interval); // Clear interval on component unmount
//     }, [currentImageIndex, changeImage]);

//     return (
//         <div>
//             <div className={`image-container ${isSliding ? 'slide' : ''}`}>
//                 <img src={images[currentImageIndex]} alt="sliding" />
//             </div>
//             <div className="button-container">
//                 {images.map((_, index) => (
//                     <button key={index} onClick={() => changeImage(index)}>
//                         Image {index + 1}
//                     </button>
//                 ))}
//             </div>

//         </div>
//     );
// }

// export default Imageslide;
