import React, { useState, createContext, useEffect } from "react";

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });
  const [token, setToken] = useState(() => localStorage.getItem("token"));
  const [refreshToken, setRefreshToken] = useState(() => localStorage.getItem("refreshToken"));
  const [title, setTitle] = useState("El Rincón del Gamer");

  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);

  useEffect(() => {
    localStorage.setItem("refreshToken", refreshToken);
  }, [refreshToken]);

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        token,
        setToken,
        refreshToken,
        setRefreshToken,
        title,
        setTitle,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
