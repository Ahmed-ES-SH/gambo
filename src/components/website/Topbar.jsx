import { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cookie from "cookie-universal";

import { Dropdown } from "./dropdown";
import { Opationblog, Opationpages, mainopatio } from "../../Constants/opation";
import Catergorespage from "./Catergorespage";
import MobailSaidbar from "./MobailSaidbar";
import { Axiostool } from "../../Constants/axiosfile";
import { Cardcontext } from "../../context/ProductsContext";
import { Menue } from "../../context/Menue";

const Topbar = () => {
  const userdetail = async () => {
    try {
      await Axiostool.get("/user").then((data) => setuser(data.data));
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    userdetail();
  }, []);

  const [search, setsearch] = useState("");
  const [user, setuser] = useState("");
  const [openmain, setopenmain] = useState(false);

  const menue = useContext(Menue);
  const setblogopen = menue.setblogopen;
  const blogopen = menue.blogopen;
  const setpagesopen = menue.setpagesopen;
  const pagesopen = menue.pagesopen;
  const opencat = menue.opencat;
  const setopencat = menue.setopencat;
  const openmenue = menue.openmenue;
  const setopenmenue = menue.setopenmenue;
  const Dark = menue.Dark;
  const { open_close } = Cardcontext();

  const width = menue.width;
  const cookie = Cookie();
  const navegat = useNavigate();
  const handellogout = async () => {
    try {
      Axiostool.get("/logout");
      cookie.remove("gambo");
      navegat("/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      {opencat && <Catergorespage />}
      <div
        style={{
          left: openmenue ? "0" : "-100%",
          width: openmenue ? `${width}px` : "0px",
        }}
        className=" absolute  z-[99999] duration-300"
      >
        {openmenue && <MobailSaidbar />}
      </div>

      <div className="first-half flex justify-between items-center p-2">
        <div className="left-el flex items-center">
          <img className="w-[150px]" src="/public/logo.svg" alt=""></img>
          <div className=" relative max-sm:hidden max-lg:hidden">
            <input
              type="search"
              name="search"
              style={{
                backgroundColor: Dark ? "#333" : "#eee",
                color: Dark ? "#999" : "black",
              }}
              className="  outline-none  p-1 h-[40px]  w-[300px] max-sm:w-[120px] rounded-lg ml-2 placeholder:text-black "
              placeholder="search for products..."
              onChange={(e) => setsearch(e.target.value)}
            />
            <i className="fa-solid fa-magnifying-glass absolute right-1 text-gray-400 top-[30%]"></i>
          </div>
        </div>

        {/** 

///////////// right elements /////////////////////////


 */}

        <div className="right-el  flex items-center">
          <div className=" max-sm:hidden max-lg:hidden flex items-center p-3 cursor-pointer hover:text-red-400 duration-200">
            <i className="fa-solid fa-phone p-2"></i>
            <p>1800-000-000</p>
          </div>
          <Link
            className="max-sm:hidden max-lg:hidden flex items-center p-3 cursor-pointer hover:text-red-400 duration-200"
            to=""
          >
            <i className="fa-solid fa-gift p-2"></i>
            offers
          </Link>
          <Link
            className="max-sm:hidden max-lg:hidden flex items-center p-3 cursor-pointer hover:text-red-400 duration-200"
            to=""
          >
            <i className="fa-regular fa-circle-question p-2"></i>
            Help
          </Link>
          <Link
            className=" w-[40px] h-[40px] p-3 rounded-full mr-2 cursor-pointer hover:text-red-400 duration-200 bg-red-300 flex items-center justify-center"
            to=""
          >
            <i className="fa-regular fa-heart p-2 "></i>
          </Link>
          <div
            onClick={() => {
              setopenmain((prev) => !prev);
            }}
            style={{
              backgroundColor: Dark ? "#333" : "#eee",
              color: Dark ? "#999" : "black",
            }}
            className=" cursor-pointer max-sm:w-[60px] w-[150px] h-[40px] rounded-lg p-1 flex items-center justify-between  "
          >
            <Link className="flex items-center">
              <img
                className="w-[30px]  rounded-full "
                src="/public/img-5.jpg"
                alt=""
              />
            </Link>
            <p className="whitespace-nowrap max-sm:hidden">{user.name}</p>
            <i className="fa-solid fa-caret-down "></i>
          </div>
        </div>
      </div>
      {openmain && (
        <div className=" absolute w-[200px] right-1 top-16 text-left z-[999999999]">
          {
            <Dropdown
              log={true}
              handellogout={handellogout}
              opation={mainopatio}
            />
          }
        </div>
      )}

      {/** secend half from the top bar secation 

//////////////////////////////////
/////////////////////////////////
//////secend half/////////////
*/}

      <div className="secend-half     flex justify-between items-center">
        <div className="nav-bar   flex items-center">
          <div
            onClick={() => {
              setopencat((prev) => !prev);
            }}
            className="select max-sm:hidden max-lg:hidden hover:bg-orange-500 cursor-pointer py-4 duration-300 flex items-center pr-10 border-r-2 "
          >
            <i className="fa-solid fa-table p-2 text-gray-400"></i>
            select category
          </div>

          {/** 

start bares for the mobail

*/}

          <div
            onClick={() => setopenmenue((prev) => !prev)}
            className=" lg:hidden  text-[26px]  py-[5px] px-[15px] ml-[10px] bg-gray-200 rounded-md cursor-pointer  "
          >
            <i className="fa-solid fa-bars"></i>
          </div>

          {/** 

End bares for the mobail

*/}

          <ul className="flex max-lg:hidden max-sm:hidden">
            <li className="p-3 hover:text-orange-400 duration-200 ">
              <Link>Home</Link>
            </li>
            <li className="p-3  hover:text-orange-400 duration-200 ">
              <Link>New Products</Link>
            </li>
            <li className="p-3 hover:text-orange-400 duration-200 ">
              <Link>Featured Products</Link>
            </li>
            <li
              onClick={() => {
                setblogopen((prev) => !prev), setpagesopen(false);
              }}
              className="p-3  "
            >
              <div className=" relative">
                <Link>
                  Blog
                  <i className="fa-solid fa-caret-down ml-2 "></i>
                  <div className=" absolute top-11 -left-1 z-40">
                    {blogopen && <Dropdown opation={Opationblog} />}
                  </div>
                </Link>
              </div>
            </li>
            <li
              onClick={() => {
                setpagesopen((prev) => !prev), setblogopen(false);
              }}
              className="p-3  duration-200 "
            >
              <div className=" relative">
                <Link>
                  Pages
                  <i className="fa-solid fa-caret-down ml-2 "></i>
                  <div className=" absolute top-11 -left-1 z-40">
                    {pagesopen && <Dropdown opation={Opationpages} />}
                  </div>
                </Link>
              </div>
            </li>
            <li className="p-3  hover:text-orange-400 duration-200">
              <Link>Contact Us</Link>
            </li>
          </ul>
        </div>
        <div
          onClick={() => open_close()}
          className="cart w-[160px]  bg-orange-600 text-center text-white cursor-pointer p-[20px] hover:bg-orange-500"
        >
          <i className="fa-solid fa-cart-shopping p-1"></i>
          cart <i className="fa-solid fa-caret-down ml-2 "></i>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
