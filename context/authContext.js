// import router from "next/router";
// import { useState, useEffect, createContext, useContext } from "react";

// const AuthContext = createContext();

// const AuthContextProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

// useEffect(() => {
//   const userFromLocal = localStorage.getItem("user");
//   if (!userFromLocal) {
//     return;
//   } else {
//     setUser(JSON.parse(userFromLocal));
//   }
// }, []);

//   const login = () => {
//     const initial = {
//       firstname: "Tyler",
//       lastname: "Tierney",
//       username: "ttierney",
//       email: "tytierney@yahoo.com",
//       id: "123456",
//     };
//     localStorage.setItem("user", JSON.stringify(initial));
//     setUser(() => initial);
//     router.push("/");
//   };

//   const logout = () => {
//     setUser(() => null);
//     localStorage.clear();
//   };

//   const context = {
//     user,
//     setUser,
//     login,
//     logout,
//   };

//   return (
//     <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
//   );
// };

// export default AuthContextProvider;

// export const useUser = () => useContext(AuthContext);

import router from "next/router";
import { useContext, createContext, useReducer, useEffect } from "react";

const placeholder_user = {
  firstname: "Tyler",
  lastname: "Tierney",
  username: "ttierney",
  email: "tytierney@yahoo.com",
  id: "123456",
};

const initial = null;

export const AuthContext = createContext(initial);

const AuthProvider = ({ children }) => {
  useEffect(() => {
    const userFromLocal = localStorage.getItem("user");
    if (!userFromLocal) {
      return;
    } else {
      login();
    }
  }, []);

  const reducer = (state, action) => {
    switch (action.type) {
      case "login":
        return placeholder_user;
      case "logout":
        return null;
      default:
        return state;
    }
  };

  const [user, dispatch] = useReducer(reducer, initial);

  const login = (name) => {
    dispatch({ type: "login", payload: name });
    localStorage.setItem("user", JSON.stringify(placeholder_user));
    router.push("/");
  };

  const logout = (name) => {
    dispatch({ type: "logout", payload: name });
    localStorage.clear();
    router.push("/");
  };

  const ctx = { user, login, logout };

  console.log(ctx);

  return <AuthContext.Provider value={ctx}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

export const useUser = () => useContext(AuthContext);
