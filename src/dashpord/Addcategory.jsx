import { useState } from "react";
import { Axiostool } from "../Constants/axiosfile";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import { useRef } from "react";

const Addcategory = () => {
  const navegate = useNavigate();

  const [title, settitle] = useState("");
  const [image, setimage] = useState("");
  const [loading, setloading] = useState(false);

  const openfile = useRef(null);

  // Add user
  const handelsubmit = async (e) => {
    e.preventDefault();
    try {
      const form = new FormData();
      form.append("title", title);
      form.append("image", image);
      setloading(true);
      await Axiostool.post(`/category/add`, form);
      navegate("/dashbord/categores");
    } catch (err) {
      setloading(false);
      console.log(err);
    }
  };

  const style = {
    input:
      " valid:outline-green-600 h-fit border-gray-300 border p-3 mt-1 duration-300 w-full outline-red-500 rounded-md  bg-slate-300",
  };

  return (
    <>
      <div className="block">
        {loading && <Loading />}
        <form onSubmit={handelsubmit}>
          <div className="">
            <label className="text-[20px]">Title:</label>
            <input
              type="text"
              placeholder="Enter Your title ...."
              onChange={(e) => settitle(e.target.value)}
              required
              className={style.input}
            />
          </div>
          <input
            hidden
            ref={openfile}
            onChange={(e) => setimage(e.target.files.item(0))}
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

export default Addcategory;
