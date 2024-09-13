import "./Orders.scss";
import logo from "@/assets/img/logo.png";
import { data } from "@/data";
import Order from "@/pages/Dashboard/Orders/Order/Order";
import Chart from "@/pages/Dashboard/Orders/Chart/Chart";

const Orders = () => {
  return (
    <div className="orders__container theme-container">
      <div className="orders__head">
        <img src={logo} alt="logo" />
        <span>Orders today</span>
      </div>

      <div className="orders__stat grey-container">
        <span>Amount</span>
        <span>$ {data.groupNumber(4560)}</span>
      </div>

      <div className="orders__orders">
        {data.ordersData().map((order) => (
          <Order key={order.name} {...order} />
        ))}
      </div>
      <div className="orders__order-chart">
        <span>Split by orders</span>
        <Chart />
      </div>
    </div>
  );
};

export default Orders;
