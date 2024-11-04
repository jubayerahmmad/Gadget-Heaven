import { Outlet } from "react-router-dom";
import DBanner from "../components/DBanner";

const Dashboard = () => {
  return (
    <div>
      <DBanner></DBanner>
      <div className="container mx-auto">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
