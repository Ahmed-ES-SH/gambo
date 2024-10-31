import { useState, createContext, useContext, useEffect } from "react";

const products_context = createContext({});
const inatalastate = window.localStorage.getItem("cartitems")
  ? JSON.parse(window.localStorage.getItem("cartitems"))
  : [];

const ProductsContext = ({ children }) => {
  const [cartitems, setcartitems] = useState(inatalastate);

  useEffect(() => {
    localStorage.setItem("cartitems", JSON.stringify(cartitems));
  }, [cartitems]);

  const [isopen, setisopen] = useState(false);

  const quantity = cartitems.reduce(
    (quantity, item) => quantity + item.quantity,
    0
  );
  /// functions to use

  const open_close = () => {
    setisopen((prev) => !prev);
  };

  const getitemquanity = (id) => {
    return cartitems.find((item) => item.id === id)?.quantity || 0;
  };

  const removefromcard = (id) => {
    setcartitems((items) => items.filter((item) => item.id !== id));
  };

  const increasequantity = (id) => {
    setcartitems((items) => {
      const item = items.find((item) => item.id === id);
      if (item == null) {
        return [...items];
      } else {
        return cartitems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item?.quantity + 1 || 0 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const decreasequantity = (id) => {
    setcartitems((items) => {
      if (items.find((item) => item.id === id)?.quantity === 1) {
        return items.filter((item) => item.id !== id);
      } else {
        return cartitems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  return (
    <products_context.Provider
      value={{
        cartitems,
        quantity,
        getitemquanity,
        decreasequantity,
        increasequantity,
        removefromcard,
        open_close,
        setcartitems,
        isopen,
      }}
    >
      {children}
    </products_context.Provider>
  );
};

export default ProductsContext;

export const Cardcontext = () => {
  return useContext(products_context);
};
