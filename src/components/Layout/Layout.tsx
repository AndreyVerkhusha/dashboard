import { Navigate, Outlet, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
import moment from "moment";

import person from "@/assets/img/profile_.png";
import "./Layout.scss";

const Layout = () => {
  const { pathname } = useLocation();

  return (
    <div className="layout__container">
      <Sidebar />
      {pathname === "/" && <Navigate to="/dashboard" />}

      <div className="layout__dashboard">
        <div className="layout__base-gradients">
          <div className="red"></div>
          <div className="orange"></div>
          <div className="blue"></div>
        </div>
        <div className="layout__header">
          <span>{moment().format("dddd, Do MMM YYYY")}</span>
          <div className="layout__profile">
            <img src={person} alt="person image" />
            <div className="layout__details">
              <span>Andrey Verkhusha</span>
              <span>study.anrdverh@gmail.com</span>
            </div>
          </div>
        </div>
        <div className="layout__content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
