import { useState, useEffect, createContext, useContext } from "react";

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userFromLocal = localStorage.getItem("user");
    if (!userFromLocal) {
      return;
    } else {
      setUser(JSON.parse(userFromLocal));
    }
  }, []);

  const login = () => {
    const initial = {
      firstname: "Tyler",
      lastname: "Tierney",
      username: "ttierney",
      email: "tytierney@yahoo.com",
      id: "123456",
    };
    localStorage.setItem("user", JSON.stringify(initial));
    setUser(() => initial);
  };

  const logout = () => {
    setUser(() => null);
    localStorage.clear();
  };

  const context = {
    user,
    setUser,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;

export const useUser = () => useContext(AuthContext);
