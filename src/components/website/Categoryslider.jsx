// import files to make the slider
import { Swiper, SwiperSlide } from "swiper/react";
import { categorys } from "../../Constants/opation";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import "swiper/css";
import { Menue } from "../../context/Menue";

// end import the files

const Categoryslider = () => {
  // to have the width
  const [width, setwidth] = useState(window.innerWidth);
  const menue = useContext(Menue);

  const Dark = menue.Dark;
  // because if the width is change
  window.addEventListener("resize", () => {
    setwidth(window.innerWidth);
  });

  return (
    <div className="w-[1100px]  max-sm:w-[300px] max-lg:w-[600px] m-auto py-16 ">
      <h1 className="p-1 rounded-md text-white  bg-orange-500 w-fit">
        shop by
      </h1>
      <h1 className="text-[22px] text-blue-900">categorys </h1>
      <Swiper
        // install Swiper modules
        spaceBetween={8}
        slidesPerView={width < 767 ? 2 : width < 991 ? 3 : 6}
      >
        <div className="">
          {categorys.map((item, index) => (
            <SwiperSlide className="pt-2" key={index}>
              <div
                style={{
                  backgroundColor: Dark ? "#222" : "#eee",
                  color: Dark ? "#999" : "black",
                }}
                className=" p-1 cursor-pointer   h-[160px]  flex flex-col items-center justify-center    rounded-md"
              >
                <img
                  className="block"
                  width={"50px"}
                  src={item.icon}
                  alt={item.title}
                />
                <h1 className=" whitespace-nowrap block">{item.title}</h1>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default Categoryslider;
