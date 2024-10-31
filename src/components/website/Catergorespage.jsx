import { useContext } from "react";
import { categorys } from "../../Constants/opation";
import { Menue } from "../../context/Menue";

const Catergorespage = () => {
  const menue = useContext(Menue);

  const setopencat = menue.setopencat;
  return (
    <>
      <div className="">
        <div className="w-full  h-[150vh] bg-gradient-to-r from-red-400 to-orange-500 z-50  opacity-90 absolute top-0"></div>
        <div className="w-[500px]  flex flex-wrap rounded-lg items-center justify-center h-[500px] bg-white absolute top-[250%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-[9999] ">
          <button
            onClick={() => {
              setopencat((prev) => !prev);
            }}
            className="text-[32px] absolute  -top-14 text-white z-[999] ab right-0"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
          <h1 className=" w-full p-2 rounded-t-md text-white text-[18px] absolute top-0 bg-[#0d1429]">
            select category
          </h1>
          {categorys.map((cat, key) => (
            <div key={key} className="pt-14">
              <div className="hover:bg-gray-300 duration-200 cursor-pointer w-[150px] flex flex-col items-center justify-center   h-[90px]  ">
                <img width={"50px"} src={cat.icon} />
                <h1 className=" whitespace-nowrap">{cat.title}</h1>
              </div>
            </div>
          ))}
          <div className="select w-fit m-auto hover:text-orange-500  cursor-pointer py-4 duration-300 flex items-center pr-10  ">
            <i className="fa-solid fa-table p-2 text-gray-400"></i>
            more category
          </div>
        </div>
      </div>
    </>
  );
};

export default Catergorespage;
