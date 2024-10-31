/* eslint-disable react/prop-types */
import Cookie from "cookie-universal";
import { useEffect, useState } from "react";

import { Navigate, Outlet, useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import Error403 from "./Error403";
import axios from "axios";
const RequireAuth = ({ allowedRole }) => {
  const [user, setuser] = useState("");
  const navegate = useNavigate();
  const cookie = Cookie();
  const token = cookie.get("user");

  const Getuser = async () => {
    try {
      await useEffect(() => {
        axios
          .get(`http://127.0.0.1:8000/api/user`, {
            headers: { Authorization: "Bearer " + token },
          })
          .then((data) => setuser(data.data));
      }, []);
    } catch (err) {
      {
        navegate("/login", { replace: true });
      }
    }
  };
  Getuser();

  return (
    <>
      {token ? (
        user === "" ? (
          <Loading />
        ) : allowedRole.includes(user.role) ? (
          <Outlet />
        ) : (
          <Error403 role={user.role} />
        )
      ) : (
        <Navigate to={"/login"} replace={true} />
      )}
    </>
  );
};

export default RequireAuth;
