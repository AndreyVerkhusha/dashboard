import "./Dashboard.scss";
import { data } from "@/data";
import Card from "./DashboardCard/DashboardCard";
import Statistics from "@/pages/Dashboard/Statistics/Statistics";
import Orders from "@/pages/Dashboard/Orders/Orders";
import { useState } from "react";
import { motion } from "framer-motion";

const Dashboard = () => {
  const [activeSelect, setActiveSelect] = useState<string>("week");

  return (
    <motion.div
      className="dashboard__container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="dashboard__content">
        <div className="dashboard__content-head theme-container">
          <div className="dashboard__head">
            <span>Dashboard</span>
            <div className="dashboard__duration-button">
              <select
                value={activeSelect}
                onChange={(e) => setActiveSelect(e.target.value)}
              >
                <option value="week">1 week</option>
                <option value="month">1 month</option>
                <option value="year">1 year</option>
              </select>
            </div>
          </div>
          <div className="dashboard__cards">
            {data.dashboardData().map((card) => (
              <Card key={card.title} {...card} />
            ))}
          </div>
        </div>
        <Statistics />
      </div>
      <Orders />
    </motion.div>
  );
};

export default Dashboard;
