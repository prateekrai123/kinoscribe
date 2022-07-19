import React, { useEffect, useState } from "react";

import "./Product.css";
// import DropFileInput from "../../Components/DropFileInput/DropFileInput";
import { baseUrl } from "../../API/api";
import axios from "axios";
// import userContext from "../../context/UserContext";
const Product = () => {
  const query = new URLSearchParams(window.location.search).get("product");
  const token = localStorage.getItem("token");

  const [file, setFile] = useState(null);
  const [wordCount, setWordCount] = useState(0);
  const [price, setPrice] = useState(0);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmitClick = async () => {
    setIsLoading(true);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("wordCount", wordCount);
    formData.append("serviceId", product._id);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("title", title);

    const header = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    };

    await axios
      .post(`${baseUrl}/order/placeOrder`, formData, header)
      .then((res) => {
        setIsLoading(false);
        console.log(res);
        alert("Order Placed Successfully");
      })
      .catch((err) => {
        setIsLoading(false);
        alert("Order Placed Failed");
      });
  };

  useEffect(() => {
    axios
      .get(`${baseUrl}/service/getServiceByName?name=${query}`)
      .then((res) => {
        // console.log(res);
        setProduct(res.data);
      })
      .catch((err) => {
        alert(err.message);
      });
  });

  return (
    <div className="product-background">
      <div className="product-heading">
        <h1>Subscription</h1>
      </div>
      <div>
        <div className="product-flex-container">
          <div className="product-flex product-flex-left">
            <h2>{product && product.title}</h2>
            <br />
            <p>{product && product.description}</p>
          </div>
          <div className="product-flex product-flex-right">
            <div>
              <div>
                <h3 style={{ marginTop: "10px" }}>Title:</h3>
                <input
                  className="product-input-control"
                  type="text"
                  placeholder="title"
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                ></input>
              </div>
              <div>
                <h3 style={{ marginTop: "10px" }}>Description</h3>
                <input
                  className="product-input-control"
                  type="text"
                  placeholder="description"
                  onChange={(e) => {
                    setDescription(e.target.value);
                  }}
                ></input>
              </div>
              <div>
                <h3 style={{ marginTop: "10px" }}>Price </h3>
                <div>{price}</div>
              </div>
              <div>
                <h3 style={{ marginTop: "10px" }}>Enter your word count:</h3>
                <input
                  className="product-input-control"
                  type="number"
                  placeholder="word count"
                  onChange={(e) => {
                    setWordCount(e.target.value);
                    setPrice(e.target.value * product.price);
                  }}
                ></input>
              </div>
              <br />
              <div>
                <h3>Upload document:</h3>
                <br />
              </div>
              <div>
                {/* <DropFileInput
                  onFileChange={(e) => {
                    setFile(e.file);
                  }}
                /> */}
                <input
                  type="file"
                  onChange={(e) => {
                    setFile(e.target.files[0]);
                    console.log(file);
                  }}
                ></input>
                <br></br>
                <button className="product-button" onClick={onSubmitClick}>
                  Submit
                </button>
                {isLoading && <div>Loading...</div>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
