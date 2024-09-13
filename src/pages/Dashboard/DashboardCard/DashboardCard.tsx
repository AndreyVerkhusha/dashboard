import { data } from "@/data";
import { FC, memo } from "react";
import { DashboardCard as DashboardCardType } from "@/types/types";

const DashboardCard: FC<DashboardCardType> = memo(
  ({ title, amount, change }) => {
    return (
      <div className="dashboard__card" key={title}>
        <div className="dashboard__card-head">
          <span>{title}</span>
          <span>+{change}</span>
        </div>

        <div className="dashboard__card-amount">
          <span>$</span>
          <span>{data.groupNumber(amount)}</span>
        </div>
      </div>
    );
  }
);

export default DashboardCard;
