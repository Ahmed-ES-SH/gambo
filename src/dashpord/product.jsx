import { useEffect, useState } from "react";
import { Axiostool } from "../Constants/axiosfile";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { CatApi } from "../Constants/Api";

const Product = () => {
  // product stats
  const [product, setproduct] = useState({
    category: "select an option",
    title: "",
    price: "",
    status: "",
  });
  const [images, setimages] = useState([]);
  const [cats, setcats] = useState([]);
  const [tryy, settryy] = useState([]);
  const [xxx, setxxx] = useState([]);
  const openfile = useRef(null);

  const path = window.location.pathname.split("/");
  const id = path[path.length - 1];

  // to product details
  useEffect(() => {
    Axiostool.get(`/product/${id}`).then((data) => setproduct(data.data[0]));
  }, []);

  const navegate = useNavigate();

  // categorys get and show

  useEffect(() => {
    Axiostool.get(CatApi).then((data) => setcats(data.data));
  }, []);

  const catsshow = cats.map((cat, key) => (
    <option value={cat.id} className="text-black " key={key}>
      {cat.title}
    </option>
  ));

  const handelchange = (e) => {
    setproduct({ ...product, [e.target.name]: e.target.value });
  };

  const handelsubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append("category", product.category);
    form.append("title", product.title);
    form.append("description", product.description);
    form.append("price", product.price);
    form.append("discount", product.discount);
    form.append("About", product.About);
    for (let i = 0; i <= images.length; i++) {
      form.append("images[]", images[i]);
    }
    try {
      await Axiostool.post(`/product/edit/${id}`, form);
      navegate("/dashbord/products");
    } catch (err) {
      console.log(err);
    }
  };

  const style = {
    input:
      " valid:outline-green-600 h-fit border-gray-300 border p-3 mt-1 duration-300 w-full outline-yellow-500 rounded-md  bg-slate-300",
  };

  return (
    <>
      <div className="block">
        <form onSubmit={handelsubmit}>
          <label className="text-[20px]">category:</label>
          <select
            name="category"
            onChange={handelchange}
            placeholder="select catergory ... "
            value={product.category || ""}
            className="w-full cursor-pointer rounded-md bg-yellow-300 mt-1 p-3 outline-none"
          >
            <option disabled className="text-white">
              select an option
            </option>
            {catsshow}
          </select>
          <div className="">
            <label className="text-[20px]">title:</label>
            <input
              name="title"
              type="text"
              value={product.title || ""}
              placeholder="Enter Your title ...."
              onChange={handelchange}
              required
              className={style.input}
              id="title"
            />
          </div>
          <div className="">
            <label className="text-[20px]">description:</label>
            <input
              name="description"
              type="text"
              value={product.description || ""}
              placeholder="Enter Your description ...."
              onChange={handelchange}
              required
              className={style.input}
              id="description"
            />
          </div>

          <div className="">
            <label className="text-[20px]">price:</label>
            <input
              name="price"
              type="text"
              value={product.price || ""}
              placeholder="Enter Your price ...."
              onChange={handelchange}
              required
              className={style.input}
              id="price"
            />
          </div>
          <div className="">
            <label className="text-[20px]">discount:</label>
            <input
              name="discount"
              type="text"
              value={product.discount || ""}
              placeholder="Enter Your discount ...."
              onChange={handelchange}
              required
              className={style.input}
              id="discount"
            />
          </div>
          <div className="">
            <label className="text-[20px]">About:</label>
            <input
              name="About"
              type="text"
              value={product.About || ""}
              placeholder="Enter Your About ...."
              onChange={handelchange}
              required
              className={style.input}
              id="About"
            />
          </div>
          <input
            hidden
            multiple
            ref={openfile}
            onChange={(e) => setimages([...e.target.files])}
            type="file"
          />
          <label>Chosse Your Photo:</label>
          <div
            onClick={() => openfile.current.click()}
            className="h-[350px] cursor-pointer flex items-center justify-center border-2 border-dashed border-gray-400 mt-2"
          >
            <img className="w-[300px]" src="/public/imges/upload.png" />
          </div>

          <input
            className="py-3 w-full text-white  rounded-md mt-3 bg-orange-500 duration-300 hover:bg-orange-300 cursor-pointer"
            type="submit"
            value={"Add"}
          />
        </form>
      </div>
    </>
  );
};

export default Product;
