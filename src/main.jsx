import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import "./css/loading.css";
import "./css/dashbord/error403.css";
import "./css/dashbord/Page404.css";
import Menuecontext from "./context/Menue.jsx";
import ProductsContext from "./context/ProductsContext.jsx";
import Data_provider from "./context/Data_context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Data_provider>
      <ProductsContext>
        <Menuecontext>
          <Router>
            <App />
          </Router>
        </Menuecontext>
      </ProductsContext>
    </Data_provider>
  </React.StrictMode>
);
