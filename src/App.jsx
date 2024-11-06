import React from "react";
import { Route, Routes } from "react-router-dom";
import UserNav from "./components/UserNav";
import AdminNav from "./components/AdminNav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import GameRegistry from "./pages/GameRegistry";

export const UserRoutes = () => {
  return (
    <div className="app-container">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <UserNav />
              <div className="content">
                <Home />
              </div>
              <Footer />
            </>
          }
        />
        <Route
          path="/login"
          element={
            <div className="content">
              <Login />
            </div>
          }
        />
        <Route
          path="/register"
          element={
            <div className="content">
              <Register />
            </div>
          }
        />
        <Route
          path="/game-registry"
          element={
            <>
              <UserNav />
              <div className="content">
                <GameRegistry />
              </div>
              <Footer />
            </>
          }
        />
      </Routes>
    </div>
  );
};

export const AdminRoutes = () => {
  return (
    <div className="app-container">
      <AdminNav />
      <div className="content">
        <Routes></Routes>
      </div>
      <Footer />
    </div>
  );
};