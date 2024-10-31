import { useContext, useRef } from "react";
import { Data_context } from "../context/Data_context";
import { Menue } from "../context/Menue";
import Product_item from "../components/website/Product_item";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Products_slider = () => {
  const { products } = Data_context();

  const menue = useContext(Menue);
  const width = menue.width;
  const Dark = menue.Dark;

  const sliderRef = useRef(null);

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const prevSlide = () => {
    sliderRef.current.slickPrev();
  };

  function SamplePrevArrow() {
    return <div style={{ display: "none" }} />;
  }

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: width > 1000 ? 4 : width < 992 ? 2 : 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    nextArrow: <SamplePrevArrow />,
    prevArrow: <SamplePrevArrow />,
    margin: 6,
  };

  const slier_show = (
    <Slider ref={sliderRef} {...settings}>
      {products.map((item, key) => (
        <div
          key={key}
          style={{
            backgroundColor: Dark ? "#111" : "#eee",
            color: Dark ? "#999" : "black",
          }}
          className="shadow-xl h-[420px] p-2  w-fit max-sm:h-[330px]   duration-300 cursor-pointer relative hover:-translate-y-4  mx-3 items-start flex flex-col rounded-md   "
        >
          <Product_item {...item} />
        </div>
      ))}
    </Slider>
  );
  return (
    <>
      <div className="main-title p-3 w-[1200px] max-md:w-full m-auto">
        <h1 className="p-1 rounded-md text-white  bg-orange-500 w-fit">
          For you
        </h1>
        <h1 className="text-[22px] text-blue-900">most orders </h1>
      </div>
      <div className="w-[1200px] max-lg:w-full  shadow-lg rounded-md m-auto relative ">
        {slier_show}
        <button className="z-9999 p-3 max-md:hidden" onClick={nextSlide}>
          <i
            style={{
              backgroundColor: Dark ? "#111" : "#eee",
              color: Dark ? "#999" : "black",
              border: "1px solid #333",
            }}
            className="fa-solid fa-angle-right absolute top-[44%] -right-5 py-1 px-2 bg-white border border-gray-300"
          ></i>
        </button>

        {/* زر الرجوع */}
        <button className="z-9999 p-3 max-md:hidden" onClick={prevSlide}>
          <i
            style={{
              backgroundColor: Dark ? "#111" : "#eee",
              color: Dark ? "#999" : "black",
              border: "1px solid #333",
            }}
            className="fa-solid fa-angle-left absolute top-[44%] -left-5 py-1 px-2 bg-white border border-gray-300 "
          ></i>
        </button>
      </div>
    </>
  );
};

export default Products_slider;
