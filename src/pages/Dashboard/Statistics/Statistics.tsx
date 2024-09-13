import "./Statistics.scss";
import { BsArrowUpShort } from "react-icons/bs";
import { data } from "@/data";
import StatisticsChart from "@/pages/Dashboard/Statistics/StatisticsChart/StatisticsChart";

const Statistics = () => {
  return (
    <div className="statistics__container theme-container">
      <span className="statistics__title">Overview Statistics</span>
      <div className="statistics__cards grey-container">
        <div>
          <div className="statistics__arrow-icon">
            <BsArrowUpShort />
          </div>
          <div className="statistics__card">
            <span>Top item this month</span>
            <span>Office comps</span>
          </div>
        </div>
        <div className="statistics__card">
          <span>Items</span>
          <span>$ {data.groupNumber(455)}</span>
        </div>
        <div className="statistics__card">
          <span>Profit</span>
          <span>$ {data.groupNumber(370000)}</span>
        </div>

        <div className="statistics__card">
          <span>Daily Average</span>
          <span>$ {data.groupNumber(2000)}</span>
        </div>
      </div>
      <StatisticsChart />
    </div>
  );
};

export default Statistics;
