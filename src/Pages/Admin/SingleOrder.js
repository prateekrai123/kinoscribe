import axios from "axios";
import React, { useEffect, useState } from "react";
import { baseUrl } from "../../API/api";
import "./SingleOrder.css";

const SingleOrder = () => {
  const id = new URLSearchParams(window.location.search).get("id");
  console.log(id);
  const [order, setOrder] = useState();

  const [price, setPrice] = useState();
  const [file, setFile] = useState();

  const header = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };

  console.log(localStorage.getItem("token"));

  const data = {
    id: id,
  };

  useEffect(() => {
    axios
      .post(`${baseUrl}/order/orderById`, data, header)
      .then((res) => {
        setOrder(res.data.order);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // console.log(props);

  const onSubmitClick = async () => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("price", price);
    formData.append("orderId", order._id);

    const header = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };

    await axios
      .post(`${baseUrl}/order/updateOrder`, formData, header)
      .then((res) => {
        console.log(res);
        alert("Order Updated Successfully");
      })
      .catch((err) => {
        alert("Order Updated Failed");
      });
  };

  return (
    <>
    <div className="singleOrder-background">
      <div className="singleOrder-heading">
        <h1>SingleOrder</h1>
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
            <a href={order && `${baseUrl}/profile/${order.file}`}>
              {" "}
              Download File
            </a>
          </h4>

          <br />
          <h4>
            Price By User :-
            {`  $${order && order.price}`}
            {/* 22000 */}
          </h4>
          <input
            className="singleOrder-form-control"
            type="number"
            placeholder="Set Price"
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          ></input>
          <br />
          <br />
          <input
            className="singleOrder-form-control"
            type="file"
            style={{ width: "250px" }}
            onChange={(e) => {
              setFile(e.target.files[0]);
            }}
          ></input>
          <br />
          <br />
          <button className="singleOrder-button" onClick={onSubmitClick}>
            Submit
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default SingleOrder;
