import { useContext, useState } from "react";
import { login } from "../Constants/Api";
import { Link, useNavigate } from "react-router-dom";
import Cookie from "cookie-universal";
import { Axiostool } from "../Constants/axiosfile";
import Loading from "../components/Loading";
import { Menue } from "../context/Menue";
const Login = () => {
  const [form, setform] = useState({
    email: "",
    password: "",
  });
  const [err, seterr] = useState("");
  const [loading, setloading] = useState(false);

  const menue = useContext(Menue);

  const Dark = menue.Dark;

  const navegate = useNavigate();
  const cookie = Cookie();

  const handelsubmit = async (e) => {
    e.preventDefault();
    try {
      setloading(true);
      const res = await Axiostool.post(login, form);
      const token = res.data.token;
      cookie.set("gambo", token);
      const role = res.data.user.role;
      const go =
        role === "2001" ? "/" : role === "1995" ? "/dashbord" : "/dashbord";
      navegate(`${go}`);
      console.log(role);
    } catch (err) {
      console.log(err);
      setloading(false);
      if (err.response.status === 401) {
        seterr("The Email or password is wrong");
      } else {
        seterr("Something went wrong");
      }
    }
  };

  const handelchange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-full h-full ">
      {
        (document.querySelector("body").style.backgroundColor = Dark
          ? "#111"
          : "#eee")
      }
      {loading && <Loading />}
      <div className="absolute  -translate-x-1/2 -translate-y-1/2  top-[27%] left-[50%]">
        <img src="/public/logo.svg" />
      </div>
      <div
        style={{
          backgroundColor: Dark ? "#222" : "#eee",
          color: Dark ? "#999" : "black",
          height: err ? "400px" : "350px",
        }}
        className="w-[500px] max-sm:w-full rounded-lg    absolute  -translate-x-1/2 -translate-y-1/2  top-[60%] left-[50%]"
      >
        <h1 className="w-fit p-3 m-auto text-[20px] ">sign in </h1>
        <form onSubmit={handelsubmit}>
          <div className="flex flex-col items-center p-2  ">
            <input
              name="email"
              type="Email"
              value={form.email}
              placeholder="Enter Your email ...."
              onChange={handelchange}
              required
              style={{
                backgroundColor: Dark ? "#222" : "#eee",
                color: Dark ? "#999" : "black",
              }}
              className=" valid:outline-green-600   p-3 mt-3 duration-300 w-full outline-red-500 rounded-md  "
            />
            <input
              name="password"
              type="password"
              value={form.password}
              placeholder="Enter Your password ...."
              onChange={handelchange}
              required
              style={{
                backgroundColor: Dark ? "#222" : "#eee",
                color: Dark ? "#999" : "black",
              }}
              className=" valid:outline-green-600   p-3 mt-3 duration-300 w-full outline-red-500 rounded-md"
            />
            <input
              className=" py-3 w-full text-white  rounded-md mt-3 bg-orange-500 duration-300 hover:bg-orange-300 cursor-pointer"
              type="submit"
              value={"Signin Now"}
            />
            {err && (
              <h1 className="w-full text-left bg-red-500 text-white p-2 mt-2">
                {err}
              </h1>
            )}
            <div className="w-full mt-2 flex justify-center items-center h-[60px] bg-orange-500  rounded-b-lg p-2">
              <h1 className="text-[18px] text-white">i have an account ?-</h1>
              <Link
                to="/signup"
                className="p-2 bg-black text-white rounded-lg ml-2 hover:bg-green-600 duration-300"
              >
                sign up Now
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
