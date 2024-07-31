import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Shared/Naveber/Navbar";

const Root = () => {
    const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  return (
    <>
      {!isLoginPage && <Navbar />}
      <Outlet />
    </>
  );
};

export default Root;