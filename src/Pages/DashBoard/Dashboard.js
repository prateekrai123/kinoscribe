import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseUrl } from "../../API/api";
import DashboardTable from "./DashboardTable";

const Dashboard = (props) => {
  const [user, setUser] = useState({});
  const header = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };

  const [incompleteOrder, setIncompleteOrder] = useState();
  const [completeOrder, setCompleteOrder] = useState();
  const column = [
    { heading: "Title", value: "title" },
    { heading: "Price", value: "price" },
  ];

  useEffect(() => {
    axios
      .get(`${baseUrl}/user/user`, header)
      .then((res) => {
        if (!res.data.isError) {
          setUser(res.data);
        } else {
          alert("Error while getting users");
        }
      })
      .catch((err) => {
        alert("Error while getting users");
      });

    axios
      .get(`${baseUrl}/user/getPendingOrders`, header)
      .then((res) => {
        if (!res.data.isError) {
          setIncompleteOrder(res.data);
        } else {
          alert("Error while getting orders");
        }
      })
      .catch((err) => {
        alert("Error while getting orders");
      });

    axios
      .get(`${baseUrl}/user/getCompletedOrders`, header)
      .then((res) => {
        if (!res.data.isError) {
          setCompleteOrder(res.data);
        } else {
          alert("Error while getting orders");
        }
      })
      .catch((err) => {
        alert("Error while getting orders");
      });
  }, []);

  return (
    <>
      <h1
        style={{
          color: "#FEDD58",
          textAlign: "center",
          marginTop: "3rem",
          textDecoration: "underline",
          fontSize: "50px",
        }}
      >
        DashBoard
      </h1>
      <div className="heading">
        <h2>
          <span style={{ color: "#FFF" }}>Hey, </span>
          {user && user.name}
        </h2>
      </div>
      <div className="heading">
        <h2>Completed Orders</h2>
      </div>
      <div>
        {completeOrder && (
          <DashboardTable data={completeOrder} column={column} />
        )}
      </div>
      <div className="heading">
        <h2>Incomplete Orders</h2>
      </div>
      <div>
        {incompleteOrder && (
          <DashboardTable data={incompleteOrder} column={column} />
        )}
      </div>
    </>
  );
};

export default Dashboard;
