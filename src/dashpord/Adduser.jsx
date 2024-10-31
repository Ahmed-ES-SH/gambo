import { useState } from "react";
import { Axiostool } from "../Constants/axiosfile";
import { useNavigate } from "react-router-dom";

const Adduser = () => {
  const [form, setform] = useState({
    name: "",
    email: "",
    password: "",
    role: "select an option",
  });

  const navegate = useNavigate();

  // Add user
  const handelsubmit = async (e) => {
    e.preventDefault();
    try {
      await Axiostool.post(`/user/add`, form);
      navegate("/dashbord/users");
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

  return (
    <>
      <div className="block">
        <form onSubmit={handelsubmit}>
          <div className="">
            <label className="text-[20px]">Name:</label>
            <input
              name="name"
              type="text"
              value={form.name}
              placeholder="Enter Your email ...."
              onChange={handelchange}
              required
              className={style.input}
            />
          </div>
          <div className="">
            <label className="text-[20px]">Email:</label>
            <input
              name="email"
              type="email"
              value={form.email}
              placeholder="Enter Your email ...."
              onChange={handelchange}
              required
              className={style.input}
            />
          </div>
          <div className="">
            <label className="text-[20px]">password:</label>
            <input
              name="password"
              type="password"
              value={form.password}
              placeholder="Enter Your password ...."
              onChange={handelchange}
              required
              className={style.input}
            />
          </div>
          <select
            name="role"
            onChange={handelchange}
            value={form.role}
            className="w-full rounded-md bg-slate-300 mt-3 p-3 outline-none"
          >
            <option disabled className="text-white">
              select an option
            </option>
            <option value="2001">user</option>
            <option value="1995">Admin</option>
            <option value="1996">writer</option>
            <option value="1999">product manger</option>
          </select>
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

export default Adduser;
