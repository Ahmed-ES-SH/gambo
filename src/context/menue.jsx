import { createContext, useEffect, useState } from "react";

export const Menue = createContext();

const Menuecontext = ({ children }) => {
  const [openmenue, setopenmenue] = useState(false);
  const [opencat, setopencat] = useState(false);
  const [blogopen, setblogopen] = useState(false);
  const [pagesopen, setpagesopen] = useState(false);
  const [openorder, setopenorder] = useState(false);

  const [width, setwidth] = useState(window.innerWidth);
  window.addEventListener("resize", () => {
    setwidth(window.innerWidth);
  });
  const [Dark, setDark] = useState(false);
  window.localStorage.setItem("dark", Dark);
  useEffect(() => {
    const value = window.localStorage.getItem("dark");
    if (value !== null) {
      setDark(value);
    }
  }, []);

  return (
    <Menue.Provider
      value={{
        // for width screen
        width,
        setwidth,
        // for open categories
        opencat,
        setopencat,
        //for open menue mobail and Dashbordmenue
        openmenue,
        setopenmenue,
        //for open blogdrop
        blogopen,
        setblogopen,
        //for open pagesdrop
        pagesopen,
        setpagesopen,
        // for orders section
        openorder,
        setopenorder,
        Dark,
        setDark,
      }}
    >
      {children}
    </Menue.Provider>
  );
};

export default Menuecontext;
