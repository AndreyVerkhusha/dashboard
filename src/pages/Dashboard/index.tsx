import css from './index.module.scss';
import { data } from "@/data";
import Card from './Card';
import Statistics from "@/pages/Dashboard/Statistics";
import Orders from "@/pages/Dashboard/Orders";

const Dashboard = () => {
    return (
        <div className={css.container}>
            <div className={css.dashboard}>
                <div className={`${css.dashboardHead} theme-container`}>
                    <div className={css.head}>
                        <span>Dashboard</span>
                        <div className={css.durationButton}>
                            <select>
                                <option value="">1 week</option>
                                <option value="">1 month</option>
                                <option value="">1 year</option>
                            </select>
                        </div>
                    </div>
                    <div className={css.cards}>
                        {data.dashboardData().map((card) =>
                            <Card key={card.title} {...card}/>
                        )}
                    </div>
                </div>
                  <Statistics/>
            </div>
            <Orders/>
        </div>
    );
};

export default Dashboard;