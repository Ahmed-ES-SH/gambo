import { useEffect, useState } from "react";
import { Axiostool } from "../Constants/axiosfile";
import { useNavigate } from "react-router-dom";

const User = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [role, setrole] = useState("");
  const [currentuser, setcurrentuser] = useState("");
  const path = window.location.pathname.split("/");
  const id = path[path.length - 1];
  console.log(role);
  useEffect(() => {
    Axiostool.get(`/user/${id}`).then((data) => {
      setcurrentuser(data.data);
      setname(data.data.name), setemail(data.data.email);
    });
  }, []);
  const navegate = useNavigate();

  const handelsubmit = async (e) => {
    e.preventDefault();
    try {
      await Axiostool.post(`/user/edit/${id}`, {
        name: name,
        email: email,
        role: role,
      });
      navegate("/dashbord/users");
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
              name="name"
              type="text"
              value={name}
              placeholder="Enter Your email ...."
              onChange={(e) => setname(e.target.value)}
              required
              className=" valid:outline-green-600 h-fit border-gray-300 border p-3 mt-1 duration-300 w-full outline-red-500 rounded-md  bg-slate-300"
            />
          </div>
          <div className="">
            <label className="text-[20px]">Email:</label>
            <input
              name="email"
              type="email"
              value={email}
              placeholder="Enter Your email ...."
              onChange={(e) => setemail(e.target.value)}
              required
              className=" valid:outline-green-600 h-fit border-gray-300 border p-3 mt-1 duration-300 w-full outline-red-500 rounded-md  bg-slate-300"
            />
          </div>
          <select
            onChange={(e) => setrole(e.target.value)}
            value={role}
            className="w-full rounded-md bg-slate-500 mt-3 p-3 outline-none"
          >
            <option value="2001">user</option>
            <option value="1995">Admin</option>
            <option value="1996">writer</option>
            <option value="1999">product manger</option>
          </select>
          <input
            className="py-3 w-full text-white  rounded-md mt-3 bg-orange-500 duration-300 hover:bg-orange-300 cursor-pointer"
            type="submit"
          />
        </form>
      </div>
    </>
  );
};

export default User;
