import { Axiostool } from "../Constants/axiosfile";
import Tabelshow from "../components/dashbord/Tabelshow";
import { productsheader } from "../Constants/opation";
import { Data_context } from "../context/Data_context";

const Proudcts = () => {
  const { products } = Data_context();
  console.log(products);
  const deletehandeler = async (id) => {
    try {
      await Axiostool.delete(`/product/${id}`);
      products.filter((item) => item.id !== id);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className=" ">
        <Tabelshow
          data={products}
          headers={productsheader}
          delete={deletehandeler}
        />
      </div>
    </>
  );
};

export default Proudcts;
