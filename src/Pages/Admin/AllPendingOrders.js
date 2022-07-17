import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseUrl } from "../../API/api";
import './AllPendingOrders.css';
import Table from "./Table";

// import SingleOrder from "./SingleOrder";

const AllPendingOrders = () => {
  const [pendingOrders, setPendingOrders] = useState([]);

  useEffect(() => {
    const header = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    axios
      .get(`${baseUrl}/order/allPendingOrders`, header)
      .then((res) => {
        console.log(res);
        setPendingOrders(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  const column = [
    {heading: 'id', value:"_id"},
    {heading: 'Word_Count', value:"wordCount"},
    {heading: 'Price', value:"price"}
  ]

  return (
    <div>
      <div className="heading">
      <h2>All Pending Orders</h2>
      </div>
      <Table data = {pendingOrders} column = {column}/>
      {/* <div>
        {pendingOrders.map((order) => {
          return (
            <div>
              <div
                onClick={() => {
                  console.log(1);
                }}
                style={{ color: "#fff" }}
              >
                {order._id}
              </div>
              <div>{order.price}</div>
              <div>{order.wordCount}</div>
            </div>
          );
        })}
      </div> */}
    </div>
  );
};

export default AllPendingOrders;
