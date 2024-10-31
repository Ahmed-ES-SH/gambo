/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

import Imagesshow from "../Imagesshow";
import { useContext } from "react";
import { Menue } from "../../context/Menue";

const Tabelshow = (props) => {
  const menue = useContext(Menue);
  const openorder = menue.openorder;
  const Dark = Menue.Dark;
  const currentuser = props.currentuser || { name: "" };
  const data = props.data || [];
  const headersshow = props.headers.map((header, key) => (
    <th scope="col" className="px-6 py-3  " key={key}>
      {header.icon}
      {header.name}
    </th>
  ));

  const datashow = data.map((data, key) => (
    <tr className=" border-b  " key={key}>
      {props.headers.map((title, index) => (
        <td className="px-6 py-4  " key={index}>
          {title.key === "image" ? (
            <img width={"70px"} src={data[title.key]} />
          ) : title.key === "images" ? (
            <Imagesshow id={data["id"]} />
          ) : title.key === "id" ? (
            key + 1
          ) : data[title.key] === "2001" ? (
            "user"
          ) : data[title.key] === "1995" ? (
            "admin"
          ) : data[title.key] === "1996" ? (
            "writer"
          ) : data[title.key] === "1999" ? (
            "product manegar"
          ) : data[title.key] ? (
            currentuser && currentuser.name === data[title.key] ? (
              `${data.name} (You)`
            ) : (
              data[title.key]
            )
          ) : (
            data[title.key]
          )}
        </td>
      ))}
      <td className="px-6 py-4  ">
        {currentuser.name !== data.name && (
          <button>
            <i
              onClick={() => props.delete(data.id)}
              className="text-red-600 fas fa-trash p-1 "
            ></i>
          </button>
        )}
        {!openorder && (
          <Link to={`${data.id}`}>
            <i className="text-sky-600 fas fa-edit p-1"></i>
          </Link>
        )}
      </td>
    </tr>
  ));

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg pt-1">
      <table
        style={{
          backgroundColor: !Dark ? "#111" : "#eee",
          color: !Dark ? "#999" : "black",
        }}
        className="w-full text-sm text-left "
      >
        <thead className="text-xs border-b border-gray-200 uppercase ">
          <tr className="">
            {headersshow}
            <th scope="col" className="px-6 py-3  ">
              <i className="fa-solid fa-wand-magic-sparkles p-1 mr-1  text-[14px]"></i>
              action
            </th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan={12} className="text-center h-[60px]">
                Loading...
              </td>
            </tr>
          ) : (
            datashow
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Tabelshow;

{
  /**

;








 */
}
