import React from "react";
import "./Admin.css";
import { Admin, Resource } from 'react-admin'
import restProvider from 'ra-data-simple-rest'
import PostList from './PostList'
import PostCreate from './PostCreate'
import PostEdit from './PostEdit'
import UserList from './UserList'
import UserCreate from './UserCreate'
import UserEdit from './UserEdit'
import SingleOrder from "./SingleOrder";
import AllPendingOrders from "./AllPendingOrders";

const Adminpanel = () => {
  // const [admin, setAdmin] = useState();
  return (
    // <div className="">
    //   <div className="">
      <Admin dataProvider={restProvider()}>
      {/* <Resource
        name='posts'
        list={PostList}
        create={PostCreate}
        edit={PostEdit}
      />
      <Resource
        name='users'
        list={UserList}
        create={UserCreate}
        edit={UserEdit}
      /> */}
      <SingleOrder/>
      <AllPendingOrders/>
    </Admin>
      
    // </div>
    // </div>
  );
};

export default Adminpanel;
