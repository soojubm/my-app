import React, { createContext, useState } from "react";

type userName = string;
type UserTypes = {
  username: userName;
  auth: boolean;
};

const userData: UserTypes = { username: "", auth: false };

export const UserContext = createContext<any>({
  username: "soo",
  setUsername: () => {},
});

const UserStore = (props: any) => {
  const [username, setUsername] = useState("soo");
  return (
    <UserContext.Provider value={{ username, setUsername }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserStore;

// type UserContextTypes = {
//   user: UserTypes;
//   login: any;
//   logout: any;
// };

// const login = (name: userName) => {
//   setUser((user) => ({
//     name: name,
//     auth: true,
//   }));
// };
// const logout = () => {
//   setUser((user) => ({
//     name: "",
//     auth: false,
//   }));
// };
