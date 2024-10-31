import {
  about,
  categoress,
  icons,
  imagees,
  topcitizen,
  usefllinks,
} from "../Constants/opation";

const Footer = () => {
  return (
    <div className="w-full bg-slate-800 ">
      <div className="top-half border-b border-gray-500 p-5 flex container m-auto justify-between items-center max-sm:flex-col max-sm:items-start max-sm:gap-4">
        <div className="flex max-md:flex-col gap-3">
          <div className="flex items-center gap-2">
            <i className="fa-solid text-red-700  fa-envelope"></i>
            <a className="text-blue-500" href="#">
              info@gambosupermarket.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <i className="fa-regular  text-red-700 fa-calendar-days"></i>
            <a className="text-blue-500" href="#">
              1800-000-000
            </a>
          </div>
        </div>
        <div className="flex gap-4  items-center">
          {icons.map((icon, key) => (
            <div
              className="hover:-translate-y-3 hover:text-white text-lg duration-300 cursor-pointer w-[40px] h-[40px] flex items-center justify-center  rounded-full text-blue-300 bg-slate-700 "
              key={key}
            >
              {icon.icon}
            </div>
          ))}
        </div>
      </div>
      <div className="bottom-half  flex max-sm:w-full max-sm:flex-col  justify-between items-center   container m-auto p-4 pb-6 border-b border-gray-700">
        <div className="links flex max-sm:w-full max-sm:flex-wrap lg:gap-[100px] items-start">
          <div className="cats max-sm:w-fit">
            <h className="text-white text-[26px] p-2">Categories</h>
            {categoress.map((title, key) => (
              <a
                className="text-blue-300 block whitespace-normal w-fit p-2 hover:ml-2 duration-300"
                key={key}
                href="#"
              >
                {title}
              </a>
            ))}
          </div>
          <div className="max-sm:w-fit">
            <h className="text-white text-[26px] whitespace-nowrap p-2">
              Useful Links
            </h>
            {usefllinks.map((title, key) => (
              <p
                className="text-blue-300 whitespace-nowrap w-fit p-2 hover:ml-2 duration-300"
                key={key}
                href="#"
              >
                {title}
              </p>
            ))}
          </div>
          <div className="">
            <h className="text-white text-[26px] p-2">Top Cities</h>
            {topcitizen.map((title, key) => (
              <p
                className="text-blue-300 whitespace-normal w-fit p-2 hover:ml-2 duration-300"
                key={key}
                href="#"
              >
                {title}
              </p>
            ))}
          </div>
        </div>
        <div className=" self-start">
          <h1 className="text-white text-[26px] p-2">Download App</h1>
          <div className="flex gap-2">
            <img className="w-[120px]" src="/public/imges/App/download-1.svg" />
            <img className="w-[120px]" src="/public/imges/App/download-2.svg" />
          </div>

          <div className="pt-6">
            <h1 className="text-white text-[26px]  p-2">Payment Method</h1>
            <div className="flex items-center gap-2 p-2">
              {imagees.map((src, key) => (
                <img width={"40px"} key={key} src={src} alt="" />
              ))}
            </div>
          </div>
          <div>
            <h1 className="text-white text-[26px]  p-2">Newsletter</h1>
            <div className=" relative ">
              <input
                placeholder="Email adress"
                className="w-[250px] text-white p-2 rounded-r-lg  placeholder:p-2 outline focus:outline-orange-400 duration-300 placeholder:text-gray-600 bg-slate-900 outline-none py-2"
                type="text"
              />
              <i className="fa-solid fa-paper-plane text-white rounded-r-lg p-3 bg-orange-600 absolute right-0 "></i>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-part  max-sm:flex-col py-6 flex justify-between items-center container m-auto ">
        <div className="flex items-center gap-2">
          {about.map((title, key) => (
            <p
              className="text-blue-300 text-[11px] whitespace-nowrap w-fit  "
              key={key}
              href="#"
            >
              <p className="hover:pl-2 duration-300">{title}</p>
            </p>
          ))}
        </div>
        <div className="text-blue-300">
          <h1 className="flex items-center text-[11px] pt-2 justify-center">
            <span className="text-2xl mt-2 block">&copy;</span>Copyright 2022
            Gambolthemes . All rights reserved
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
