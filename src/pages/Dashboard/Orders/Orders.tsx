import css from "./Orders.module.scss";
import logo from "@/assets/logo.png";
import { data } from "@/data";
import Order from "@/pages/Dashboard/Orders/Order/Order";
import Chart from "@/pages/Dashboard/Orders/Chart/Chart";

const Orders = () => {
    return (
        <div className={`${css.container} theme-container`}>
            <div className={css.head}>
                <img src={logo} alt="logo"/>
                <span>Orders today</span>
            </div>

            <div className={`grey-container ${css.stat}`}>
                <span>Amount</span>
                <span>$ {data.groupNumber(4560)}</span>
            </div>

            <div className={css.orders}>
                {data.ordersData().map((order) =>
                    <Order key={order.name} {...order} />
                )}
            </div>
            <div className={css.orderChart}>
                <span>Split by orders</span>
                <Chart/>
            </div>
        </div>
    );
};

export default Orders;