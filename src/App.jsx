import React from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
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
import BusinessProfile from "./pages/BusinessProfile";
import './styles/App.css';
import PaymentMethod from "./pages/PaymentMethod";
import ShoppingCart from "./pages/ShoppingCart";
import Wishlist from "./pages/Wishlist";
import GameSearch from "./pages/GameSearch";
import GamePageUser from "./pages/GamePageUser";

export const UserRoutes = () => {
  return (
    <div className="app-container">
      <Routes>
        <Route
          path="/"
          element={
            <> 
              <Nav />
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
              <Nav />
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
              <Nav />
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
              <Nav />
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
              <Nav />
              <div className="content">
                <PaymentMethod />
              </div>
              <Footer />
            </>
          }
        />
        <Route
          path="/wishlist"
          element={
            <>
              <Nav />
              <div className="content">
                <Wishlist />
              </div>
              <Footer />
            </>
          }
        />
        <Route
          path="/products"
          element={
            <>
              <Nav />
              <div className="content">
                <GameSearch />
              </div>
              <Footer />
            </>
          }
        />
        <Route
          path="/product"
          element={
            <>
              <Nav />
              <div className="content">
                <GamePageUser />
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