import React from "react";
import { Route, Routes } from "react-router-dom";
import DefaultNav from "./components/DefaultNav";
import AdminNav from "./components/AdminNav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import UserRegister from "./pages/UserRegister";
import GameRegistry from "./pages/GameRegistry";
import RoleSelection from "./pages/RoleSelection";
import BusinessRegister from "./pages/BusinessRegister";
import ForgotPasswordEmail from "./pages/ForgotPasswordEmail";
import NewPassword from "./pages/NewPassword";
import UserNav from "./components/UserNav";
import BusinessNav from "./components/BusinessNav";
import UserProfile from "./pages/UserProfile";
import BusinessProfile from "./pages/BusinessProfile";
import './styles/App.css';
import PaymentMethod from "./pages/PaymentMethod";
import ShoppingCart from "./pages/ShoppingCart";

export const UserRoutes = () => {
  return (
    <div className="app-container">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <BusinessNav />
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
          path="/role-selection"
          element={
            <div className="content">
              <RoleSelection />
            </div>
          }
        />
        <Route
          path="/users/sign-in"
          element={
            <div className="content">
              <UserRegister />
            </div>
          }
        />
        <Route
          path="/businesses/sign-in"
          element={
            <div className="content">
              <BusinessRegister />
            </div>
          }
        />
        <Route
          path="/forgot-password/email"
          element={
            <div className="content">
              <ForgotPasswordEmail />
            </div>
          }
        />
        <Route
          path="/forgot-password/new-password"
          element={
            <div className="content">
              <NewPassword />
            </div>
          }
        />
        <Route
          path="/profile"
          element={
            <>
              <UserNav />
              <div className="content">
                <BusinessProfile />
              </div>
              <Footer />
            </>
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
        <Route
          path="/cart"
          element={
            <>
              <UserNav />
              <div className="content">
                <ShoppingCart />
              </div>
              <Footer />
            </>
          }
        />
        <Route
          path="/pay"
          element={
            <>
              <UserNav />
              <div className="content">
                <PaymentMethod />
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