/* eslint-disable react/prop-types */

import Image_product from "./Image_product";
import { Cardcontext } from "../../context/ProductsContext";
import { Link } from "react-router-dom";

import { useContext } from "react";
import { Menue } from "../../context/Menue";

const Product_item = ({ title, id, price, category }) => {
  const { getitemquanity, decreasequantity, setcartitems, increasequantity } =
    Cardcontext();
  const menue = useContext(Menue);
  const width = menue.width;
  const Dark = menue.Dark;
  const quantity = getitemquanity(id);

  return (
    <div>
      <Link
        to={`/${id}`}
        onClick={() => window.location.pathname(`/${id}`)}
        className=""
      >
        <h1 className="p-3 text-[20px] self-end">{title}</h1>
        <div className="h-[150px]  items-center m-auto ">
          <Image_product width={width > 1100 ? "170px" : "170px"} id={id} />
        </div>
        <div className="flex justify-between pt-14 w-full ">
          <h2 className="py-1 bg-slate-800 text-white px-4 rounded-md">
            {price}
          </h2>
          <h1 className="text-[20px] self-start">:السعر</h1>
        </div>
        <span className=" max-sm:hidden p-3 mt-3">
          {category === 7 ? "Vegtabel&&friuts" : category}
        </span>
      </Link>
      {quantity === 0 ? (
        <div className=" absolute bottom-3 right-3">
          <i
            onClick={() => {
              increasequantity(id),
                setcartitems((prev) => [
                  ...prev,
                  { quantity: 1, title, price, category, id },
                ]);
            }}
            className="fa-solid fa-cart-plus p-3 text-gray-400  text-[20px] z-[9999]"
          ></i>
        </div>
      ) : (
        <div className="flex p-2 absolute justify-between items-baseline w-full  bottom-3 left-0">
          <div className="flex w-full">
            <button
              onClick={() => decreasequantity(id)}
              className="p-1 w-[40%] h-fit rounded-l-md text-center bg-slate-800 text-white"
            >
              -
            </button>
            <p className="px-3 w-[20%] text-center">{quantity}</p>
            <button
              onClick={() => increasequantity(id)}
              className="p-1 w-[40%] h-fit rounded-r-md text-center bg-slate-800 text-white"
            >
              +
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default Product_item;
