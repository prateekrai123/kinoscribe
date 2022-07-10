import React from "react";
import "./SingleOrder.css";

const SingleOrder = (props) => {
  console.log(props);
  return (
    <div>
      <h2>{props.props.title}</h2>
      <h4>{props.props.serviceId}</h4>
      <div>{props.props.description}</div>
      Price By User :-<h4>{props.props.price}</h4>
      <input placeholder="Set Price"></input>
      <br></br>
      <input type="file"></input>
      <button>Submit</button>
    </div>
  );
};

export default SingleOrder;
