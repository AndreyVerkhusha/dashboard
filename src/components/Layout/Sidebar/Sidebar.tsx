import img from "@/assets/img/logo.png";
import { NavLink } from "react-router-dom";
import { MdSpaceDashboard } from "react-icons/md";
import { AiFillCalendar, AiOutlineTable } from "react-icons/ai";
import { FaTasks } from "react-icons/fa";
import { memo } from "react";
import "./Sidebar.scss";

const Sidebar = memo(() => {
  return (
    <div className="sidebar__container">
      <img className="sidebar__logo" src={img} alt="logo" />
      <div className="sidebar__menu">
        <NavLink to="dashboard" className="sidebar__item" title="Dashboard">
          <MdSpaceDashboard size={30} />
        </NavLink>
        <NavLink to="board" className="sidebar__item" title="Trello Board">
          <FaTasks size={30} />
        </NavLink>
        <NavLink to="calendar" className="sidebar__item" title="Calendar">
          <AiFillCalendar size={30} />
        </NavLink>
        <NavLink to="users" className="sidebar__item" title="Users">
          <AiOutlineTable size={30} />
        </NavLink>
      </div>
    </div>
  );
});

export default Sidebar;
