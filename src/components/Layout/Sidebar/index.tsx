import css from './index.module.scss';
import img from '@/assets/logo.png';
import { NavLink } from "react-router-dom";
import { MdSpaceDashboard } from "react-icons/md";
import { AiFillCalendar, AiOutlineTable } from "react-icons/ai";
import { FaTasks } from "react-icons/fa";

const Sidebar = () => {
    return (
        <div className={`${css.container} sidebar`}>
            <img
                className={css.logo}
                src={img}
                alt="logo"
            />
            <div className={css.menu}>
                <NavLink to="dashboard"
                         className={css.item}
                         title={"Dashboard"}
                >
                    <MdSpaceDashboard size={30}/>
                </NavLink>
                <NavLink
                    to="board"
                    className={css.item}
                    title="Trello Board"
                >
                    <FaTasks size={30}/>
                </NavLink>
                <NavLink
                    to="calendar"
                    className={css.item}
                    title="Calendar"
                >
                    <AiFillCalendar size={30}/>
                </NavLink>
                <NavLink
                    to="users"
                    className={css.item}
                    title="Users"
                >
                    <AiOutlineTable size={30}/>
                </NavLink>
            </div>
        </div>
    );
};

export default Sidebar;