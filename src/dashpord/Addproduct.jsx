import { useEffect, useRef, useState } from "react";
import { Axiostool } from "../Constants/axiosfile";
import { useNavigate } from "react-router-dom";
import { CatApi } from "../Constants/Api";

const Addproduct = () => {
  const [form, setform] = useState({
    category: "select an option",
    title: "",
    description: "",
    price: "",
    discount: "",
    About: "",
  });
  const dummyform = {
    category: null,
    title: "dummy",
    description: "dummy",
    price: 22,
    discount: 2,
    About: "dummy",
  };

  const [cats, setcats] = useState([]);
  const [images, setimages] = useState([]);
  const [stop, setstop] = useState(false);
  const [id, setid] = useState("");
  const [uploading, setuploading] = useState(0);

  const navegate = useNavigate();
  const openfile = useRef(null);
  const progress = useRef([]);

  // categorys get and show

  useEffect(() => {
    Axiostool.get(CatApi).then((data) => setcats(data.data));
  }, []);

  const catsshow = cats.map((cat, key) => (
    <option value={cat.id} className="text-black " key={key}>
      {cat.title}
    </option>
  ));

  // %%%%%%%%%%%%%%%%  Funcation %%%%%%%%%%%
  // Add product
  const handelEdit = async (e) => {
    e.preventDefault();

    try {
      await Axiostool.post(`/product/edit/${id}`, form);
      navegate("/dashbord/products");
    } catch (err) {
      console.log(err);
    }
  };

  const j = useRef(-1);

  const handelimageschange = async (e) => {
    setimages((prev) => [...prev, ...e.target.files]);
    const imagesaAsfiles = e.target.files;
    for (let i = 0; i < imagesaAsfiles.length; i++) {
      j.current++;
      const data = new FormData();
      data.append("image", imagesaAsfiles[i]);
      data.append("product_id", id);
      try {
        const res = await Axiostool.post(`/product-img/add`, data, {
          onUploadProgress: (progressevent) => {
            const { loaded, total } = progressevent;
            const parcent = Math.floor((loaded * 100) / total);
            if (parcent % 10 === 0) {
              progress.current[j.current].style.width = `${parcent}%`;
              progress.current[j.current].setAttribute(
                "parcent",
                `${parcent}%`
              );
            }
          },
        });
      } catch (err) {
        console.log(err);
      }
    }
  };

  const dummysubmit = async () => {
    try {
      const res = await Axiostool.post(`product/add`, dummyform);
      setid(res.data.id);
    } catch (err) {
      console.log(err);
    }
  };

  const handelchange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
    setstop(true);
    if (stop !== true) {
      dummysubmit();
    }
  };
  console.log(images);

  // images get and show
  const imagesshow = images.map((img, key) => (
    <div key={key} className="mt-4 mb-1 bg-slate-300">
      <div className="flex justify-between items-center">
        <div className="flex">
          <img width={"130px"} src={URL.createObjectURL(img)} alt="img" />
          <p className=" self-end p-1">
            {(img.size / 1024).toFixed(2) > 1000
              ? (img.size / (1024 * 1024)).toFixed(2) + "MB"
              : (img.size / 1024).toFixed(2) + "KB"}
          </p>
        </div>

        <i
          onClick={() =>
            setimages((prev) => prev.filter((item) => item !== img))
          }
          className="p-3 fas fa-trash cursor-pointer rounded-lg bg-red-600 mr-2"
        ></i>
      </div>
      <div className="progress w-full duration-300 rounded-lg bg-slate-400 h-[12px] mt-4 relative">
        <span
          ref={(e) => (progress.current[key] = e)}
          className=" absolute duration-300  h-[12px] rounded-lg bg-sky-500"
        ></span>
      </div>
    </div>
  ));
  //%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
  const style = {
    input:
      " valid:outline-green-600 h-fit border-gray-300 border p-3 mt-1 duration-300 w-full outline-yellow-500 rounded-md  bg-slate-300",
  };

  return (
    <>
      <div className="block">
        <form onSubmit={handelEdit}>
          <label className="text-[20px]">category:</label>
          <select
            name="category"
            onChange={handelchange}
            placeholder="select catergory ... "
            value={form.category}
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
              value={form.title}
              placeholder="Enter Your title ...."
              onChange={handelchange}
              required
              disabled={!stop}
              style={{ backgroundColor: !stop ? "slategray" : "white" }}
              className={style.input}
            />
          </div>
          <div className="">
            <label className="text-[20px]">description:</label>
            <input
              name="description"
              type="text"
              value={form.description}
              placeholder="Enter Your description ...."
              onChange={handelchange}
              required
              disabled={!stop}
              style={{ backgroundColor: !stop ? "slategray" : "white" }}
              className={style.input}
            />
          </div>

          <div className="">
            <label className="text-[20px]">price:</label>
            <input
              name="price"
              type="text"
              value={form.price}
              placeholder="Enter Your price ...."
              onChange={handelchange}
              required
              disabled={!stop}
              style={{ backgroundColor: !stop ? "slategray" : "white" }}
              className={style.input}
            />
          </div>
          <div className="">
            <label className="text-[20px]">discount:</label>
            <input
              name="discount"
              type="text"
              value={form.discount}
              placeholder="Enter Your discount ...."
              onChange={handelchange}
              required
              disabled={!stop}
              style={{ backgroundColor: !stop ? "slategray" : "white" }}
              className={style.input}
            />
          </div>
          <div className="">
            <label className="text-[20px]">About:</label>
            <input
              name="About"
              type="text"
              value={form.About}
              placeholder="Enter Your About ...."
              onChange={handelchange}
              required
              disabled={!stop}
              style={{ backgroundColor: !stop ? "slategray" : "white" }}
              className={style.input}
            />
          </div>
          {images.length >= 1 ? (
            <>
              <div>{imagesshow}</div>
              <div
                className=" cursor-pointer p-3 rounded-md bg-sky-500 w-fit ml-auto"
                onClick={() => openfile.current.click()}
              >
                add more
              </div>
              <input
                hidden
                multiple
                ref={openfile}
                onChange={handelimageschange}
                type="file"
                disabled={!stop}
              />
            </>
          ) : (
            <>
              <input
                hidden
                multiple
                ref={openfile}
                onChange={handelimageschange}
                type="file"
                disabled={!stop}
              />
              <label>Chosse Your Photo:</label>
              <div
                style={{
                  filter: !stop && "grayscale(1)",
                  cursor: !stop ? "default" : "pointer",
                }}
                onClick={() => openfile.current.click()}
                className="h-[350px] cursor-pointer flex items-center duration-300 justify-center border-2 border-dashed border-gray-400 mt-2"
              >
                <img className="w-[300px]" src="/public/imges/upload.png" />
              </div>
            </>
          )}

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

export default Addproduct;
