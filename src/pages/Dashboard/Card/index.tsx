import css from "@/pages/Dashboard/index.module.scss";
import { data } from "@/data";
import { FC } from "react";
import { DashboardCard } from "@/types";

const Index: FC<DashboardCard> = ({title, amount, change}) => {
    return (
        <div
            className={css.card}
            key={title}
        >
            <div className={css.cardHead}>
                <span>{title}</span>
                <span>+{change}</span>
            </div>

            <div className={css.cardAmount}>
                <span>$</span>
                <span>{data.groupNumber(amount)}</span>
            </div>
        </div>
    );
};

export default Index;