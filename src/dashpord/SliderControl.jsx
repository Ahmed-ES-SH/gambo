import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import { useRef } from "react";
import { sliderimages } from "../Constants/opation";

const SliderControl = () => {
  const inatalastate = window.localStorage.getItem("slider")
    ? JSON.parse(window.localStorage.getItem("slider"))
    : [];
  const navegate = useNavigate();

  const [Add, setAdd] = useState(false);
  const [deltee, setdeltee] = useState(false);
  const [show, setshow] = useState(true);
  const [del_id, setdel_id] = useState("");
  const [form, setform] = useState({
    id: "",
    title: "",
    category: "",
    discount: "",
  });
  const [src, setsrc] = useState("");
  const [loading, setloading] = useState(false);
  const [slider, setslider] = useState(inatalastate);
  const openfile = useRef(null);

  useEffect(() => {
    window.localStorage.setItem("slider", JSON.stringify(slider));
  }, [slider]);
  console.log(typeof form.id);
  // functions
  const handeladd = async (e) => {
    e.preventDefault();
    try {
      setloading(false);
      const image = new FormData();
      image.append("image", src);
      setslider([...slider, { ...form, image }]);
      console.log(slider);
    } catch (err) {
      setloading(false);
      console.log(err);
    }
  };
  console.log(slider);
  const handeldelte = async (e) => {
    e.preventDefault();
    try {
      setslider((prev) => prev.filter((img) => img.id != del_id));
    } catch (err) {
      console.log(err);
    }
  };

  const handelchange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  const style = {
    input:
      " valid:outline-green-600 h-fit border-gray-300 border p-3 mt-1 duration-300 w-full outline-red-500 rounded-md  bg-slate-300",
  };
  console.log(del_id);
  return (
    <>
      {show && (
        <div className="w-[500px] h-[150px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  rounded-lg p-2 bg-[#222]  flex items-center justify-around">
          <div
            onClick={() => {
              setAdd(true), setshow(false);
            }}
            className="py-3 cursor-pointer px-12 rounded-md ml-2 text-center text-white bg-green-400 "
          >
            Add
          </div>
          <div
            onClick={() => {
              setdeltee(true), setshow(false);
            }}
            className="py-3 cursor-pointer px-12 rounded-md text-center text-white bg-red-500"
          >
            Delte
          </div>
        </div>
      )}
      {Add && (
        <div className="block">
          {loading && <Loading />}
          <form onSubmit={handeladd}>
            <div className="">
              <label className="text-[20px]">Id:</label>
              <input
                type="number"
                name="id"
                max={slider.length + 2}
                placeholder="Enter Your id ...."
                onChange={handelchange}
                required
                className={style.input}
              />
            </div>
            <div className="">
              <label className="text-[20px]">title:</label>
              <input
                type="text"
                name="title"
                placeholder="Enter Your title ...."
                onChange={handelchange}
                required
                className={style.input}
              />
            </div>
            <div className="">
              <label className="text-[20px]">category:</label>
              <input
                type="text"
                name="category"
                placeholder="Enter Your category ...."
                onChange={handelchange}
                required
                className={style.input}
              />
            </div>
            <div className="">
              <label className="text-[20px]">discount:</label>
              <input
                type="text"
                name="discount"
                placeholder="Enter Your discount ...."
                onChange={handelchange}
                required
                className={style.input}
              />
            </div>
            <input
              hidden
              ref={openfile}
              onChange={(e) => setsrc(e.target.files.item(0))}
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
      )}
      {deltee && (
        <form onSubmit={handeldelte}>
          <div className="p-3">
            <label className="text-[20px]">Id:</label>
            <input
              style={{ padding: "20px" }}
              type="number"
              min={1}
              placeholder="Enter Your id ...."
              onChange={(e) => setdel_id(e.target.value)}
              required
              className={style.input}
            />
            <input
              className="py-3 w-full text-white  rounded-md mt-3 bg-transparent border duration-300 hover:bg-red-500 cursor-pointer"
              type="submit"
              value={"Delete"}
            />
          </div>
        </form>
      )}
    </>
  );
};

export default SliderControl;
