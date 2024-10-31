import { useContext } from "react";
import { Menue } from "../context/Menue";
import Orders from "./Orders";
import Product_item from "../components/website/Product_item";
import { Cardcontext } from "../context/ProductsContext";
import { Data_context } from "../context/Data_context";

const Products_show = () => {
  // All the stats
  const { products } = Data_context();

  const menue = useContext(Menue);

  const Dark = menue.Dark;

  const width = menue.width;
  const { isopen, open_close, cartitems } = Cardcontext();

  // make products => show

  return (
    <div>
      <div className="main-title p-3">
        <h1 className="p-1 rounded-md text-white  bg-orange-500 w-fit">
          For you
        </h1>
        <h1 className="text-[22px] text-blue-900">Top Featured Products </h1>
      </div>
      <div
        onClick={() => open_close}
        style={{
          right: isopen ? "0" : "-100%",
        }}
        className=" absolute top-[1px] z-[99999] duration-300"
      >
        <div
          style={{
            width: isopen ? (width > 500 ? "500px" : `${width - 1}px`) : "0px",
          }}
          className="pt-[140px]"
        >
          {isopen && <Orders orders={cartitems} products={products} />}
        </div>
      </div>
      <div className="flex  duration-300 p-8 justify-center items-center ">
        <div className="parent-products  grid grid-cols-5 max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-3  gap-5 ">
          {products.map((item) => (
            <div key={item.id}>
              <div
                style={{
                  backgroundColor: Dark ? "#222" : "#eee",
                  color: Dark ? "#999" : "black",
                }}
                className="shadow-xl h-[420px] max-sm:h-[330px] p-4 duration-300 cursor-pointer relative hover:-translate-y-4 bg-white items-start flex flex-col rounded-md   w-[220px] max-sm:w-[300px]"
              >
                <Product_item {...item} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products_show;
