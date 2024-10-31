import { useContext } from "react";
import { Data_context } from "../../context/Data_context";
import { Menue } from "../../context/Menue";

const Image_product = (props) => {
  const { products } = Data_context();
  const menue = useContext(Menue);
  const Dark = menue.Dark;
  const product = products.find(
    (product) =>
      product?.images.length > 0 && product.images[0].product_id === props.id
  );

  const showone = product && (
    <div>
      <div
        style={{
          width: props.width,
        }}
        className="flex items-center justify-between gap-2  m-auto"
      >
        <img
          width={props.width}
          src={product.images[0].image}
          alt={"wait..."}
          className="rounded-lg"
        />
      </div>
    </div>
  );

  return <div className=" duration-500">{showone}</div>;
};

export default Image_product;
