import { createContext } from "react";

var userContext = createContext({
  token: "",
  isAdmin: false,
  login: (user) => {},
  logout: () => {},
});

export const UserProvider = (props) => {
  const loginHandler = ({ token, isAdmin }) => {
    localStorage.setItem("token", token);
    localStorage.setItem("isAdmin", isAdmin);
    userContext = {
      token: token,
      isAdmin: isAdmin,
    };
  };

  const logoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("isAdmin");
    userContext = {
      token: "",
      isAdmin: false,
    };
  };

  userContext = {
    token: localStorage.getItem("token"),
    isAdmin: localStorage.getItem("isAdmin") === "true",
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <userContext.Provider value={userContext}>
      {props.children}
    </userContext.Provider>
  );
};

export default userContext;
