import Navbar from "../Component/Navbar";
import Footer from "../Component/Footer";
import { Toaster } from "react-hot-toast";
import { Outlet, useLocation } from "react-router-dom";

const Root = () => {
  const location = useLocation();

  const isDashboard = location.pathname.startsWith("/dashboard");

  return (
    <>
      {!isDashboard && <Navbar />}
      <Outlet />
      {!isDashboard && <Footer />}
      <Toaster />
    </>
  );
};

export default Root;
