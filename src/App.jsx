import { Route, Routes } from "react-router-dom";
import Home from "./website/Home";
import Dashbord from "./dashpord/Dashbord";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import Users from "./dashpord/Users";
import User from "./dashpord/User";
import Adduser from "./dashpord/Adduser";
import Categores from "./dashpord/Categores";
import Addcategory from "./dashpord/Addcategory";
import Category from "./dashpord/Category";
import Proudcts from "./dashpord/Proudcts";
import Product from "./dashpord/product";
import Addproduct from "./dashpord/Addproduct";
import RequireAuth from "./dashpord/RequireAuth";
import Page404 from "./dashpord/Page404";
import Item from "./website/Item";
import SliderControl from "./dashpord/SliderControl";
import Slider_test from "./dashpord/Slider_test";

const App = () => {
  return (
    <>
      <Routes>
        {/**start Auth pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/**End Auth pages */}
        {/**%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% */}
        <Route path="/*" element={<Page404 />} />
        {/**start website pages */}

        <Route path="/" element={<Home />} />

        <Route path="/:id" element={<Item />} />
        {/**End website pages */}
        {/**%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% */}
        {/**start dashbord pages */}
        <Route element={<RequireAuth allowedRole={["1996", "1999", "1995"]} />}>
          <Route path="/dashbord" element={<Dashbord />}>
            {/**%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% */}
            {/**start users pages */}
            <Route element={<RequireAuth allowedRole={["1995"]} />}>
              <Route path="users" element={<Users />} />
              <Route path="users/:id" element={<User />} />
              <Route path="user/add" element={<Adduser />} />
            </Route>
            {/**%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% */}
            {/**End users pages */}
            <Route element={<RequireAuth allowedRole={["1999", "1995"]} />}>
              <Route path="categores" element={<Categores />} />
              <Route path="addcategory" element={<Addcategory />} />
              <Route path="categores/:id" element={<Category />} />
              {/**%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% */}
              {/**start products pages */}
              <Route path="products" element={<Proudcts />} />
              <Route path="products/:id" element={<Product />} />
              <Route path="addproduct" element={<Addproduct />} />
              <Route path="slidercontrol" element={<SliderControl />} />
              <Route path="Slidertest" element={<Slider_test />} />
            </Route>
          </Route>
        </Route>
        {/**End dashbord pages */}
      </Routes>
    </>
  );
};

export default App;
