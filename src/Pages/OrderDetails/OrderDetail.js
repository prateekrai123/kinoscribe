import React from "react";
import "./OrderDetail.css";

const OrderDetail = () => {
  return (
    <>
    <div className="singleOrder-background">
      <div className="singleOrder-heading">
        <h1>Orders Detail</h1>
      </div>
      <div className="singleOrder-flex-container">
        <div className="singleOrder-flex">
          <h2>
            {/* {order && order.title} */}
            Apple
          </h2>

          <br />
          <h4>
            {/* {order && order.title} */}
            Title: Title
          </h4>
          <h4>
            {/* {order && order.serviceId} */}
            id: "g2"
          </h4>

          <br />
          <p>
            {/* {order && order.description} */}
            Lorem ipsum svacca ffswaegfwqeF fqffqf Introducing the new MacBook
            Air & MacBook Pro 13", supercharged with the Apple M2 chip. Get 5%
            instant Cashback up to ₹6,000 with qualifying credit cards. Terms
            apply. Services: Apple Trade In, Shop with Specialists, Free
            delivery, EMI available.
          </p>

          <h4>
            {/* <a href={order && `${baseUrl}/profile/${order.file}`}> */}
              {" "}
              Download File
            {/* </a> */}
          </h4>

          <br />
          <h4>
            Price By User :-
            {/* {`  $${order && order.price}`} */}
            22000
          </h4>
         
          <br />
          <br />
          <button className="singleOrder-button">
            Submit
          </button>
        </div>
      </div>
    </div>
    </>
  )
}

export default OrderDetail;