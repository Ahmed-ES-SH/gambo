import { useEffect, useState } from "react";
import { Axiostool } from "../Constants/axiosfile";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

const Category = () => {
  const [title, settitle] = useState("");

  const [image, setimage] = useState("");
  const openfile = useRef(null);
  useEffect(() => {
    Axiostool.get(`/category/${id}`).then((data) => {
      setimage(data.data.image), settitle(data.data.title);
    });
  }, []);
  const navegate = useNavigate();
  const id = window.location.pathname.slice(-1);

  const handelsubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append("title", title);
    form.append("image", image);
    try {
      await Axiostool.post(`/category/edit/${id}`, form);
      navegate("/dashbord/categores");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="block">
        <form onSubmit={handelsubmit}>
          <div className="">
            <label className="text-[20px]">Name:</label>
            <input
              name="title"
              type="text"
              value={title}
              placeholder="Enter Your title ...."
              onChange={(e) => settitle(e.target.value)}
              required
              className=" valid:outline-green-600 h-fit border-gray-300 border p-3 mt-1 duration-300 w-full outline-red-500 rounded-md  bg-slate-300"
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
            value={"Edit"}
          />
        </form>
      </div>
    </>
  );
};

export default Category;
