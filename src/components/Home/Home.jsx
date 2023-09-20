import React, { useState } from "react";
// import slider1 from '../../assets/slider/bg1.jpg'
// import slider2 from '../../assets/slider/bg2.jpg'
// import slider3 from '../../assets/slider/bg3.jpg'
// import slider4 from '../../assets/slider/bg4.jpg'
// import slider5 from '../../assets/slider/bg5.jpg'

const images = [
  "/public/slider/bg1.jpg",
  "/public/slider/bg2.jpg",
  "/public/slider/bg3.jpg",
  "/public/slider/bg4.jpg",
  "/public/slider/12.jpg",
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToPreviousSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? images.length - 1 : prevSlide - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === images.length - 1 ? 0 : prevSlide + 1
    );
  };
  return (
    <div>
      <div className="carousel w-full">
        <div className="carousel-item relative w-full">
          <img
            src={images[currentSlide]}
            className="w-full "
            alt={`Slide ${currentSlide + 1}`}
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <button onClick={goToPreviousSlide} className="btn btn-circle">
              ❮
            </button>
            <button onClick={goToNextSlide} className="btn btn-circle">
              ❯
            </button>
          </div>
        </div>
      </div>
      <div className="mx-auto lg:px-32 mt-5  ">
        <h2 className="text-3xl font-semibold">Welcome to Ha-Meem Group</h2>
        <div className="mt-10 font-serif">
          <p>
            Ha-Meem Group, a Bangladeshi clothing manufacturer, is leading
            supplier of readymade garments and denim fabric in the world. We are
            one of the top clothing companies in Bangladesh. The company
            produces some of the most fashionable denim fabrics and garment
            products and owns one of the most comprehensive and resourceful
            manufacturing facilities in Bangladesh.
          </p>
          <p className="mt-5">
            Ha-Meem Group has earned name and fame both at home and abroad as
            one of the top clothing companies in Bangladesh. The continuous
            growth of this group is moving forward hand on hand with the
            industrialization of the home country Bangladesh. Moreover we as a
            Bangladeshi clothing manufacturer have been contributing immensely
            in the financial growth of the nation.
          </p>
          <p className="mt-5">
            Ha‐Meem Group, one of the top clothing companies in Bangladesh
            exporting to USA and Europe for a long time. Because of our
            successful history with the world leading customers and buyers, we
            are the most valued and well reputed Bangladeshi clothing
            manufacturer.
          </p>
          <p className="mt-5">
            Company produces 7 million pcs of woven garments per month with the
            assortment of infant to adult in men and women. Today Ha-Meem Group
            employs around 50,000 workers and the company is equipped with 26
            garments factories, a unique Denim mill, Sweater factory, Embroidery
            and Printing factory, Carton factory, Poly bag industry, Label
            factory, Jute mill, Chemical formulation plant, Tea Gardens,
            Transport company, News Channel and a national daily Newspaper. Its
            overseas office in Hong and China gives fastest support in
            procurement of fabric and accessories. Own C & F office in every
            Bangladeshi port gives privilege of quick clearing and forwarding
            support.
          </p>
          <p className="mt-5">
            Ha-Meem Knit will start within a year. It will have capacity of 10
            tons composite knit which will be increased to 50 tons in phases. It
            will make all types of knit products like tops & bottoms for man,
            women and children.
          </p>
        </div>
        <hr className="mt-5 " />
       
      </div>
    </div>
  );
};

export default Home;
