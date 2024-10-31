// import files to make the slider
import { Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { sliderimages } from "../../Constants/opation";
import { Link } from "react-router-dom";
import { useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// end import the files

const Slider = () => {
  // to have the width
  const imgs = sliderimages;
  const [width, setwidth] = useState(window.innerWidth);

  // because if the width is change
  window.addEventListener("resize", () => {
    setwidth(window.innerWidth);
  });

  return (
    <div>
      <Swiper
        // install Swiper modules
        modules={[Pagination, Scrollbar, A11y]}
        spaceBetween={2}
        slidesPerView={width < 767 ? 1 : width < 991 ? 2 : 3}
        pagination={{ clickable: true }}
        autoplay={true}
      >
        {sliderimages.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative p-2  ">
              <div className=" bg-gradient-to-r from-white to-transparent w-full top-[10%] p-2 h-[120px]  absolute">
                <p className="text-red-400 py-1 text-[14px]">{item.discount}</p>
                <p className="text-[17px] py-1">{item.title}</p>
                <p className="text-gray-400 py-1">{item.category}</p>
              </div>
              <img className="rounded-lg w-full   h-[280px]" src={item.src} />
              <Link className=" absolute text-white bottom-4 white-space-nowrap py-2 px-8 bg-orange-600 right-4 rounded-lg cursor-pointer">
                shop now
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
