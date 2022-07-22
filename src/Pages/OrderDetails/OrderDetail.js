import React, { useEffect, useState } from "react";
import "./OrderDetail.css";
import axios from "axios";
import { baseUrl } from "../../API/api";
import Popup from "reactjs-popup";
// import "reactjs-popup/dist/index.css";

const OrderDetail = () => {
  const id = new URLSearchParams(window.location.search).get("id");

  const [order, setOrder] = useState();
  const [paid, setPaid] = useState(false);

  const header = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };

  const data = {
    id: id,
  };

  axios
    .post(`${baseUrl}/order/orderById`, data, header)
    .then((res) => {
      if (res.data.isError) {
        alert("Error loading order");
      } else {
        setOrder(res.data.order);
        if (order !== undefined) {
          if (order.paymentDetails !== undefined) {
            if (order.paymentDetails.paymentStatus === "succeeded") {
              setPaid(true);
            }
          }
        }
      }
    })
    .catch((err) => {
      console.log(err);
    });

  const onPayButtonClick = () => {
    const data = { orderId: order._id };
    const header = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };

    axios.post(`${baseUrl}/order/pay`, data, header).then((res) => {
      if (res.status === 200) {
        window.location.href = res.data.paymentUrl;
      }
    });
  };

  return (
    <>
      <div className="singleOrder-background">
        <div className="singleOrder-heading">
          <h1>Orders Detail</h1>
        </div>
        <div className="singleOrder-flex-container">
          <div className="singleOrder-flex">
            <h2>
              {order && order.title}
              {/* Apple */}
            </h2>

            <br />
            <h4>
              {order && order.title}
              {/* Title: Title */}
            </h4>
            <h4>
              {order && order.serviceId}
              {/* id: "g2" */}
            </h4>

            <br />
            <p>
              {order && order.description}
              {/* Lorem ipsum svacca ffswaegfwqeF fqffqf Introducing the new MacBook
              Air & MacBook Pro 13", supercharged with the Apple M2 chip. Get 5%
              instant Cashback up to ₹6,000 with qualifying credit cards. Terms
              apply. Services: Apple Trade In, Shop with Specialists, Free
              delivery, EMI available. */}
            </p>

            <h4>
              {order &&
                order.delieveredFile &&
                order.paymentDetails &&
                order.paymentDetails.paymentStatus === "succeeded" && (
                  <a href={`${baseUrl}/profile/${order.delieveredFile}`}>
                    {" "}
                    Download File
                  </a>
                )}
            </h4>

            <br />
            <h4>
              Price :-
              {`  $${order && order.price}`}
              {/* 22000 */}
            </h4>

            <br />
            <br />
            {order && order.isCompleted && !paid && (
              <Popup
                trigger={<button className="singleOrder-button">Pay</button>}
              >
                Dou you agree to our{" "}
                <a href="https://tos.kinoscribe.com">terms of services</a>?
                <button
                  className="singleOrder-button"
                  onClick={onPayButtonClick}
                >
                  Yes
                </button>
              </Popup>
            )}

            {order && order.isCompleted && paid && <h4>Status : Paid</h4>}
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderDetail;
