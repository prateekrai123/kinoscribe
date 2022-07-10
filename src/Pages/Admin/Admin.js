import React, { useState } from "react";
import "./Admin.css";

const Admin = () => {
  const [admin, setAdmin] = useState();
  return (
    <div className="admin">
      <h2>Admin</h2>
      <div>
        <button>Get All Pending Orders</button>
        <br></br>
        <button>Get All Completed Orders</button>
      </div>
    </div>
  );
};

export default Admin;
