import { useEffect, useState } from "react";
import { Axiostool } from "../Constants/axiosfile";
import Image_product from "../components/website/Image_product";
import { Cardcontext } from "../context/ProductsContext";
import Weight from "../components/Weight";

const Mini_slider = () => {
  const { decreasequantity, increasequantity } = Cardcontext();
  const [products, setproducts] = useState([]);

  const [random, setrandom] = useState([]);
  useEffect(() => {
    Axiostool.get(`/products`).then((data) => setproducts(data.data));
  }, []);

  const random_1 = Math.floor(Math.random() * products.length);
  const random_2 = Math.floor(Math.random() * products.length);
  const random_3 = Math.floor(Math.random() * products.length);
  useEffect(() => {
    setrandom([products[random_1], products[random_2], products[random_3]]);
  }, [random_1]);

  const random_show = random.map((product, key) => (
    <div key={key}>
      <div className="flex justify-between items-center relative p-2  ">
        <div className="">
          <Image_product width={"80px"} id={product?.id} />
        </div>
        <div>
          <h1>{product?.title}</h1>
          <Weight />
          <div className="flex w-[150px] mr-10 items-center h-[100px] justify-between">
            <div className="flex">
              <h1 className="px-2 text-orange-500">${product?.price}</h1>
              <del className="px-2 text-gray-400 ">${product?.discount}</del>
            </div>
          </div>
        </div>
      </div>
    </div>
  ));
  return (
    <div className="w-[380px]  max-md:w-full  h-[400px] overflow-y-auto ">
      {random_show}
    </div>
  );
};

export default Mini_slider;
