const Offers = () => {
  return (
    <div>
      <div className="main-title p-3 ">
        <h1 className="p-1 rounded-md text-white  bg-orange-500 w-fit">
          Offers
        </h1>
        <h1 className="text-[22px] text-blue-900">Best Values</h1>
      </div>
      <div className=" w-[1100px] max-lg:w-full  m-auto relative flex flex-col items-center justify-center">
        <div className="images_offers w-full m-auto grid grid-cols-3 max-lg:grid-cols-1 gap-2">
          <img
            className="rounded-lg max-lg:w-[100%] p-2 cursor-pointer "
            src="/public/imges/offer-1.jpg"
            alt=""
          />
          <img
            className="rounded-lg max-lg:w-[100%] p-2 cursor-pointer "
            src="/public/imges/offer-2.jpg"
            alt=""
          />
          <img
            className="rounded-lg max-lg:w-[100%] p-2 cursor-pointer "
            src="public/imges/offer-3.jpg"
            alt=""
          />
          <div className="w-[1100px]  max-lg:hidden">
            <img
              className=" py-2 w-full rounded-xl cursor-pointer "
              src="public/imges/offer-4.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
