import { useContext } from "react";
import { Menue } from "../../context/Menue";

export function Dropdown(props) {
  const menue = useContext(Menue);
  const setDark = menue.setDark;
  const Dark = menue.Dark;
  return (
    <>
      <ul
        style={{
          backgroundColor: Dark ? "#111" : "#eee",
          color: Dark ? "white" : "black",
        }}
        className=" p-2 rounded-lg"
      >
        {props.log && (
          <div
            onClick={() => setDark((prev) => !prev)}
            className="whitespace-nowrap w-full justify-between cursor-pointer flex items-center p-2 rounded-md duration-200 hover:bg-orange-400"
          >
            <div className="flex  items-center">
              <i className="fa-solid fa-moon text-[14px] p-2"></i>
              <p>Dark Mode</p>
            </div>
            {Dark === true ? (
              <i className="fa-solid fa-toggle-on self- text-[25px] "></i>
            ) : (
              <i className="fa-solid fa-toggle-off self- text-[25px] "></i>
            )}
          </div>
        )}
        {props.opation.map((item, key) => (
          <div key={key}>
            <li className=" whitespace-nowrap p-2 rounded-md duration-200 hover:bg-orange-400">
              {item.icon}
              {item.name}
            </li>
          </div>
        ))}
        {props.log && (
          <li
            onClick={props.handellogout}
            className="whitespace-nowrap cursor-pointer flex p-2 rounded-md duration-200 hover:bg-orange-400"
          >
            <i className="fa-solid fa-lock p-2 text-[14px]"></i>
            <p>log out</p>
          </li>
        )}
      </ul>
    </>
  );
}
