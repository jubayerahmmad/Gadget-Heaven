import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Root = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="w-11/12 mx-auto">
        <Navbar></Navbar>
      </div>
      <div className="flex-grow">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
