import React, { useState } from "react";
import SingleOrder from "./SingleOrder";

const AllPendingOrders = () => {
  const [pendingOrders, setPendingOrders] = useState([]);
  return (
    <div>
      <h2>All Pending Orders</h2>
      <div>
        {pendingOrders.map((order) => {
          return (
            <div>
              <h3
                onClick={() => {
                  <SingleOrder props={order._id} />;
                }}
              >
                {order.title}
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllPendingOrders;
