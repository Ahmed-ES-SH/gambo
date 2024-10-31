import { useEffect, useState } from "react";
import { Axiostool } from "../Constants/axiosfile";

const Imagesshow = (props) => {
  const [products, setproducts] = useState([]);
  const [many, setmany] = useState(false);
  useEffect(() => {
    Axiostool.get(`/products`).then((data) => setproducts(data.data));
  }, []);

  const images_product = products.map((product) =>
    product.images.map(
      (img, key) =>
        img.product_id == props.id && (
          <img width={"70px"} key={key} src={img.image} alt={img.image} />
        )
    )
  );

  const image = products.find(
    (product) =>
      product.images.length > 0 && product.images[0].product_id === props.id
  );

  const showone = image && (
    <div>
      <div className="flex items-center justify-between  gap-2">
        <img
          width="70px"
          src={image.images[0].image}
          alt={image.images[0].image}
        />
        <i
          onClick={() => setmany((prev) => !prev)}
          className="fa-solid fa-caret-down cursor-pointer text-[22px]"
        />
      </div>
    </div>
  );

  return (
    <div className=" duration-500">
      {many ? (
        <div className="flex flex-col gap-1">
          {images_product}
          <i
            onClick={() => setmany((prev) => !prev)}
            className="fa-solid fa-square-caret-up self-end cursor-pointer text-[22px]"
          />
        </div>
      ) : (
        showone
      )}
    </div>
  );
};

export default Imagesshow;
