import { useEffect } from "react";
import { Axiostool } from "../Constants/axiosfile";
import { CatApi } from "../Constants/Api";
import { useState } from "react";
import Tabelshow from "../components/dashbord/Tabelshow";
import { catsheaders } from "../Constants/opation";
import Loading from "../components/Loading";

const Categores = () => {
  const [Categores, setCategores] = useState([]);
  const [loading, setloading] = useState(false);
  useEffect(() => {
    Axiostool.get(CatApi).then((data) => setCategores(data.data));
  }, []);

  const deletehandeler = async (id) => {
    try {
      await Axiostool.delete(`/category/${id}`);
      setCategores((prev) => prev.filter((item) => item.id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {loading && <Loading />}
      <div className=" ">
        <Tabelshow
          data={Categores}
          headers={catsheaders}
          delete={deletehandeler}
        />
      </div>
    </>
  );
};

export default Categores;
