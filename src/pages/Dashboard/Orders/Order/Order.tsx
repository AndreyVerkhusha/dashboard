import { FC } from "react";
import { Order as OrderType } from "@/types/types";

const Order: FC<OrderType> = ({ type, change, items, name }) => {
  return (
    <div className="orders__order">
      <div>
        <span>{name}</span>
        <span>$ {change}</span>
      </div>
      <div>
        <span>{type}</span>
        <span>Items: {items}</span>
      </div>
    </div>
  );
};

export default Order;
