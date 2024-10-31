import { useEffect } from "react";
import { Axiostool } from "../Constants/axiosfile";
import { UsersApi } from "../Constants/Api";
import { useState } from "react";
import Tabelshow from "../components/dashbord/Tabelshow";
import { headerusers } from "../Constants/opation";
import Loading from "../components/Loading";

const Users = () => {
  const [users, setusers] = useState([]);
  const [currentuser, setcurrentuser] = useState("");
  const [deleteuser, setdeleteuser] = useState(false);
  const [loading, setloading] = useState(false);
  useEffect(() => {
    setloading(true);
    Axiostool.get(UsersApi)
      .then((data) => setusers(data.data))
      .then(() => setdeleteuser(true));
    setloading(false);
  }, [deleteuser]);
  useEffect(() => {
    setloading(true);
    Axiostool.get(`/user`).then((data) => setcurrentuser(data.data));
    setloading(false);
  }, []);

  const deletehandeler = async (id) => {
    try {
      await Axiostool.delete(`/user/${id}`);
      setdeleteuser((prev) => !prev);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {loading && <Loading />}
      <div className=" ">
        <Tabelshow
          data={users}
          headers={headerusers}
          delete={deletehandeler}
          currentuser={currentuser}
        />
      </div>
    </>
  );
};

export default Users;
