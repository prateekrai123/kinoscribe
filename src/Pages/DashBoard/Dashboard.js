import React,{useState} from 'react'
import DashboardTable from "./DashboardTable"

const dummy_data = [
    {"id" : "1",
    "title" : "Apple",
    "price": "200"},
    {"id" : "2",
    "title" : "Apples",
    "price": "2000"}
]
const dummy_data1 = [
    {"id" : "1",
    "title" : "Apple",
    "price": "2000"},
    {"id" : "2",
    "title" : "Aapples",
    "price": "2000"}
]
const Dashboard = (props) => {
    const [incompleteOrder, setIncompleteOrder] = useState(dummy_data1);
    const [completeOrder, setCompleteOrder] = useState(dummy_data);
    const column = [
        { heading: "id", value: "id",},
        { heading: "Title", value: "title" },
        { heading: "Price", value: "price" },
       
      ];
  return (
    <>
    <h1 style={{color:"#FEDD58", textAlign: "center", marginTop:"3rem",textDecoration :"underline", fontSize : "50px"}}>DashBoard</h1>
    <div className="heading">
      <h2>Complete Orders</h2>
    </div>
    <div>
      <DashboardTable data={completeOrder} column={column} />
    </div>
    <div className="heading">
      <h2>Incomplete Orders</h2>
    </div>
    <div>
      <DashboardTable data={incompleteOrder} column={column} />
    </div>
  </>
  );
};

export default Dashboard;