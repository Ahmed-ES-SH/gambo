import { useContext } from "react";
import { Menue } from "../../context/Menue";

const Topbar = () => {
  const menue = useContext(Menue);
  const setopenmenue = menue.setopenmenue;
  return (
    <div className="w-full h-[60px] p-3 shadow-md  z-[999]">
      <div className="flex items-center">
        <h1 className=" font-bold text-[20px]">G-market</h1>
        <i
          onClick={() => setopenmenue((prev) => !prev)}
          className="fa-solid fa-bars p-3 text-[22px] font-bold z-50 cursor-pointer"
        ></i>
      </div>
    </div>
  );
};

export default Topbar;
