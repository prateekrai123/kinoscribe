import React, { useEffect, useState } from "react";

import "./Product.css";
import DropFileInput from "../../Components/DropFileInput/DropFileInput";
import { baseUrl } from "../../API/api";
import axios from "axios";
import userContext from "../../context/UserContext";
const Product = () => {
  const query = new URLSearchParams(window.location.search).get("product");
  const token = localStorage.getItem("token");

  const [file, setFile] = useState(null);
  const [wordCount, setWordCount] = useState(0);
  const [price, setPrice] = useState(0);
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmitClick = async () => {
    setIsLoading(true);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("wordCount", wordCount);
    formData.append("serviceId", product._id);
    formData.append("price", price);

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
                <h3>Enter your word count:</h3>
                <input
                  className="product-input-control"
                  type="number"
                  placeholder="word count"
                  onChange={(e) => {
                    setWordCount(e.target.value);
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
