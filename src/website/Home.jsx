import { useContext } from "react";
import Categoryslider from "../components/website/Categoryslider";
import Slider from "../components/website/Slider";
import Topbar from "../components/website/Topbar";

import Footer from "./Footer";
import Offers from "./Offers";
import Products_show from "./Products_show";
import Products_slider from "./Products_slider";
import { Menue } from "../context/Menue";

const Home_web = () => {
  const menue = useContext(Menue);
  const Dark = menue.Dark;

  return (
    <>
      <div
        style={{
          backgroundColor: Dark ? "#111" : "#eee",
          color: Dark ? "#999" : "black",
        }}
        className=" fixed z-[999999] w-full   "
      >
        <Topbar />
      </div>
      <div
        style={{
          backgroundColor: Dark ? "#111" : "#eee",
          color: Dark ? "#999" : "black",
        }}
        className="pt-[140px]  "
      >
        <Slider />
        <Categoryslider />
        <Products_show />
        <Offers />
        <Products_slider />
        <Footer />
      </div>
    </>
  );
};

export default Home_web;
