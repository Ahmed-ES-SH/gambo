import axios from "axios";
import { useContext, useState } from "react";
import { signup } from "../Constants/Api";
import { Link, useNavigate } from "react-router-dom";
import Cookie from "cookie-universal";
import Loading from "../components/Loading";
import { Menue } from "../context/Menue";

const Signup = () => {
  const [form, setform] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [err, seterr] = useState("");
  const [loading, setloading] = useState(false);
  const menue = useContext(Menue);
  const Dark = menue.Dark;

  const cookie = Cookie();

  const navegate = useNavigate();

  const handelsubmit = async (e) => {
    e.preventDefault();
    try {
      setloading(true);
      const res = await axios.post(signup, form);
      const token = res.data.token;
      cookie.set("gambo", token);
      navegate("/");
    } catch (err) {
      setloading(false);
      if (err.response.status === 422) {
        seterr("The Email is Already taken");
      } else {
        seterr("Something went wrong");
      }
    }
  };

  const handelchange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className=" ">
      {
        (document.querySelector("body").style.backgroundColor = Dark
          ? "#111"
          : "#eee")
      }
      {loading && <Loading />}
      <div className="absolute  -translate-x-1/2 -translate-y-1/2  top-[25%] left-[50%]">
        <img src="/public/logo.svg" />
      </div>
      <div
        style={{
          backgroundColor: Dark ? "#222" : "#eee",
          color: Dark ? "#999" : "black",
          height: err ? "400px" : "370px",
        }}
        className="w-[500px] max-sm:w-full  rounded-lg bg-white   absolute  -translate-x-1/2 -translate-y-1/2  top-[60%] left-[50%]"
      >
        <h1 className="w-fit p-3 m-auto text-[20px] ">sign up </h1>
        <form onSubmit={handelsubmit}>
          <div className="flex flex-col items-center p-2  ">
            <input
              name="name"
              type="text"
              value={form.name}
              placeholder="Enter Your username ...."
              onChange={handelchange}
              required
              minLength={5}
              className=" valid:outline-green-600 bg-slate-300 border-gray-300 border  p-3  duration-300 w-full outline-red-500 rounded-md"
            />
            <input
              name="email"
              type="Email"
              value={form.email}
              placeholder="Enter Your email ...."
              onChange={handelchange}
              required
              className=" valid:outline-green-600 bg-slate-300 border-gray-300 border p-3 mt-3 duration-300 w-full outline-red-500 rounded-md"
            />
            <input
              name="password"
              type="password"
              value={form.password}
              placeholder="Enter Your password ...."
              onChange={handelchange}
              required
              className=" valid:outline-green-600 bg-slate-300 border-gray-300 border p-3 mt-3 duration-300 w-full outline-red-500 rounded-md"
            />
            <input
              className=" p-3 w-full text-white  rounded-md mt-3 bg-orange-500 duration-300 hover:bg-orange-300 cursor-pointer"
              type="submit"
              value={"Signup Now"}
            />
            {err && (
              <h1 className="w-full text-left bg-red-500 text-white p-2 mt-2">
                {err}
              </h1>
            )}
            <div className="w-full mt-2  flex justify-center items-center h-[60px] bg-orange-500  rounded-lg p-2">
              <h1 className="text-[18px] text-white">i have an account ?-</h1>
              <Link
                to="/login"
                className="p-2 bg-black text-white rounded-lg ml-2 hover:bg-green-600 duration-300"
              >
                sign in Now
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
