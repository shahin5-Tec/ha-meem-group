import React, { useState } from "react";
// import slider1 from '../../assets/slider/bg1.jpg'
// import slider2 from '../../assets/slider/bg2.jpg'
// import slider3 from '../../assets/slider/bg3.jpg'
// import slider4 from '../../assets/slider/bg4.jpg'
// import slider5 from '../../assets/slider/bg5.jpg'


const images = [
    '/public/slider/bg1.jpg',
    '/public/slider/bg2.jpg',
    '/public/slider/bg3.jpg',
    '/public/slider/bg4.jpg',
    '/public/slider/12.jpg'

    
  ];
  

const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

  const goToPreviousSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
  };
  return (
   
     <div>
        <div className="carousel w-full">
      <div className="carousel-item relative w-full">
        <img src={images[currentSlide]} className="w-full " alt={`Slide ${currentSlide + 1}`} />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <button onClick={goToPreviousSlide} className="btn btn-circle">❮</button>
          <button onClick={goToNextSlide} className="btn btn-circle">❯</button>
        </div>
      </div>
    </div>
     </div>
    
  );
};

export default Home;
