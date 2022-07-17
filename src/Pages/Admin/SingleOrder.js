import React from "react";
import "./SingleOrder.css";

const SingleOrder = (props) => {
  // console.log(props);
  return (
    <div className="singleOrder-background">
      <div className="singleOrder-heading">
      <h1>SingleOrder</h1>
      </div>
      <div className="singleOrder-flex-container">
          <div className="singleOrder-flex">
          <h2>
        {/* {props.props.title} */}
        Apple
      </h2>
      
      <br/>
      <h4>
        {/* {props.props.serviceId} */}
        id: "g2"
      </h4>
      
      <br/>
        <p>
        {/* {props.props.description} */}
        Lorem ipsum svacca ffswaegfwqeF fqffqf Introducing the new MacBook Air & MacBook Pro 13", supercharged with the Apple M2 chip. Get 5% instant Cashback up to ₹6,000 with qualifying credit cards. Terms apply. Services: Apple Trade In, Shop with Specialists, Free delivery, EMI available.
        </p>
        <br/>
      <h4>Price By User :-
        {/* {props.props.price} */}
        22000
        
        </h4>
        <input className="singleOrder-form-control" type="number" placeholder="Set Price"></input>
      <br/>
      <br/>
      <input className="singleOrder-form-control" type="file" style={{width: "250px"}}></input>
      <br/>
      <br/>
      <button className="singleOrder-button">Submit</button>
      </div>
      </div>
    </div>
  );
};

export default SingleOrder;
