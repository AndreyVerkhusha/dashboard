import { Navigate, Outlet, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar/Sidebar";
import moment from "moment";

import person from "@/assets/profile_.png";
import css from "./Layout.module.scss";

const Layout = () => {
    const {pathname} = useLocation();

    return (
        <div className={`${css.container} layout`}>
            <Sidebar/>
            {pathname === "/" && <Navigate to="/dashboard"/>}

            <div className={css.dashboard}>
                <div className={css.topBaseGradients}>
                    <div className={css.gradientRed}></div>
                    <div className={css.gradientOrange}></div>
                    <div className={css.gradientBlue}></div>
                </div>
                <div className={css.header}>
                    <span>{moment().format("dddd, Do MMM YYYY")}</span>
                    <div className={css.profile}>
                        <img src={person} alt="person image"/>
                        <div className={css.details}>
                            <span>Andrey Verkhusha</span>
                            <span>study.anrdverh@gmail.com</span>
                        </div>
                    </div>
                </div>
                <div className={css.content}>
                    <Outlet/>
                </div>
            </div>
        </div>
    );
};

export default Layout;