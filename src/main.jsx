import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider} from "react-router-dom";
import "./index.css";
import Routes from './Routes/Routes';
import Context from './Context/Context';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Context>
    <RouterProvider router={Routes} />
    </Context>
  </React.StrictMode>
);