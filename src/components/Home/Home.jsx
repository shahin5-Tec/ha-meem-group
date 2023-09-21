import { ArrowDownIcon, ArrowLongDownIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";

const images = [
  "/src/assets/slider/bg1.jpg",
  "/src/assets/slider/bg2.jpg",
  "/src/assets/slider/bg3.jpg",
  "/src/assets/slider/bg4.jpg",
  "/src/assets/slider/12.jpg",
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
      <div className="mx-auto lg:px-32 mt-8 bg-gray-200 ">
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
        <div className=" mt-5 grid grid-cols-3 gap-4  text-center">
          <div>
            <h2 className="bg-stone-700 py-3 text-4xl text-white">
              Our Strength
            </h2>
            <div>
              <ul>
                <li className=" bg-gray-200 py-5">
                  550 MILLION USD TURNOVER (woven+denim+sweater)
                </li>
                <li className="bg-gray-100 py-3">7 MILLION PCS/MONTH PRODUCTION</li>
                <li className="bg-gray-200 py-3"> WASHING PLANTS</li>
                <li className="bg-gray-100 py-3">300 PRODUCTION LINES</li>
                <li className="bg-gray-200 py-3">PACKAGING INDUSTRY</li>
                <li className="bg-gray-100 py-3">TRANSPORT FACILITIES</li>
                <li className="bg-gray-200 py-3">
                  HONG KONG & CHINA SOURCING OFFICES
                </li>
                <li className="bg-gray-100 py-3">
                  PRINTING OF GARMENTS & PAPERS
                </li>
                <li className="bg-gray-200 py-3">
                TEA GARDEN
                </li>
                <li className="bg-gray-100 py-3">LABEL / EMBROIDERY FACILITY</li>
                {/* icon-part */}
                <li className="w-12 h-12 mx-auto">
                <a href="/"> <ArrowDownIcon /></a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h2 className="bg-stone-700 py-3 text-4xl text-white">
              Major Products
            </h2>
            <div>
             <ul>
             <li className="bg-gray-200 py-5">
                ALL TYPES OF BOTTOMS AND TOPS (Hi-Fashion with critical washes)
              </li>
              <li className="bg-gray-100 py-3">CRITICAL CARGOS</li>
              <li className="bg-gray-200 py-3">HI-FASHION DENIM JEANS</li>
              <li className="bg-gray-100 py-3">BASIC AND HIFASHION WASHES</li>
              <li className="bg-gray-200 py-3">WRINKLE FREE</li>
              <li className="bg-gray-100 py-3">OVER DYEING OF GARMENTS</li>
              <li className="bg-gray-200 py-3">LASER FINISH / 3D WHISKER</li>
              <li className="bg-gray-100 py-3">MENS SHIRTS</li>
              <li className="bg-gray-200 py-3">DRESS PANTS</li>
              <li className="bg-gray-100 py-3">OUTWEAR / JACKETS FACILITY</li>
              {/* icon-part */}
              <li className="w-12 h-12 mx-auto">
                   <a href="/"> <ArrowDownIcon /></a>
                </li>
             </ul>
            </div>
          </div>
          <div>
            <h2 className="bg-stone-700 py-3 text-4xl text-white">
              Ha-Meem at a glance
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
