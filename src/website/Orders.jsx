/* eslint-disable react/prop-types */

import { useContext } from "react";
import FormatCurrency from "../components/website/Format_curency";
import Image_product from "../components/website/Image_product";
import { Cardcontext } from "../context/ProductsContext";
import { Menue } from "../context/Menue";

const Orders = (props) => {
  const { open_close, increasequantity, decreasequantity, removefromcard } =
    Cardcontext();
  const menue = useContext(Menue);
  const Dark = menue.Dark;

  const orders_show = props.orders.map((item, key) => (
    <div key={key}>
      <div className="flex justify-between items-center relative p-2  ">
        <div className="">{<Image_product width={"80px"} id={item.id} />}</div>
        <div>
          <h1>{item.title}</h1>
          <div className="flex w-[150px] mr-10 items-center h-[100px] justify-between">
            <div className="flex">
              <button
                onClick={() => decreasequantity(item.id)}
                className="px-3 h-fit rounded-l-md text-center bg-slate-800 text-white"
              >
                -
              </button>
              <p className="px-3 text-center">{item.quantity}</p>
              <button
                onClick={() => increasequantity(item.id)}
                className="px-3 h-fit rounded-r-md text-center bg-slate-800 text-white"
              >
                +
              </button>
            </div>
            <h1 className="p-3">
              {FormatCurrency(item.price * item.quantity)}
            </h1>
          </div>
        </div>
        <button
          onClick={() => removefromcard(item.id)}
          className=" absolute right-2 top-2 px-3 py-1 hover:bg-red-500 hover:border-white duration-300 rounded-md   border-2 border-gray-500"
        >
          -
        </button>
      </div>
    </div>
  ));
  return (
    <>
      <div
        style={{
          backgroundColor: Dark ? "#111" : "#eee",
          color: Dark ? "#999" : "black",
        }}
        className="parent     h-200vh  "
      >
        <div className="main-head h-[80px] flex items-center justify-between bg-slate-800 text-white">
          <div className="flex p-2 gap-2">
            <h1 className="">My Card</h1>
            <span className="text-orange-400">
              ({props.orders.length}) item
            </span>
          </div>
          <div
            onClick={() => open_close()}
            className="px-4 mr-2 cursor-pointer  text-black text-center text-[25px] rounded-md"
          >
            x
          </div>
        </div>
        <div className="flex p-1 items-center justify-between">
          <h1>Gambo Super Market</h1>
          <h1 className="text-gray-500">
            {FormatCurrency(
              props.orders.reduce((total, cartItem) => {
                const item = props.products.find((i) => i?.id === cartItem.id);
                return total + (item?.price || 0) * cartItem.quantity;
              }, 0)
            )}
          </h1>
        </div>
        <div className="flex p-1 items-center justify-between border-b-2 border-gray-400">
          <h1>Delivery Charges</h1>
          <h1 className="text-gray-500">1$</h1>
        </div>
        {orders_show}
        <div className="  w-full p-[40px] flex items-center justify-between font-bold text-2xl">
          <h1 className=" ">Total</h1>
          <div className="text-orange-500">
            {FormatCurrency(
              props.orders.reduce((total, cartItem) => {
                const item = props.products.find((i) => i?.id === cartItem.id);
                return total + (item?.price || 0) * cartItem.quantity;
              }, 0) + 1
            )}
          </div>
        </div>
        <div className="flex items-center justify-between border-t border-gray-400 shadow-lg p-2 py-4 ">
          <div>
            <h1>have a promo code ?</h1>
          </div>
          <div>
            <button className="p-3 bg-orange-500 rounded-md text-white">
              proceed to checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Orders;
