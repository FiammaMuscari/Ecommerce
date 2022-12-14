import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";
import { IoLogInOutline } from "react-icons/io5";
import { BiUser } from "react-icons/bi";
import { BsCart2 } from "react-icons/bs";
import { useCheckAuth } from "../hooks/useCheckAuth";
import { startLogout } from "../Redux/auth/thunks";


const NavBar = () => {
  const { cart } = useSelector((state) => state.cart);
  const { status } = useCheckAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const onLogout = () => {
    dispatch(startLogout());
    navigate("/login", {
      replace: true,
    });
  };
  
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
        <div className="container ">
          <NavLink className="navbar-brand fw-bold fs-4" to="/">
            Shopify
          </NavLink>
        
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 fs-5">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/"> Inicio </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  Nosotros
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  Productos
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contacto
                </NavLink>
              </li>
            </ul>
            <div className="buttons ">
            <NavLink to="/wishlist" className="btn btn-outline-dark ">
              <AiFillHeart/>
              </NavLink>
              {
                status === 'authenticated'?
                <NavLink to="/login" onClick={onLogout} className="btn btn-outline-dark ms-2">
                <IoLogInOutline/>
                LogOut
              </NavLink>:
              <NavLink to="/login" className="btn btn-outline-dark ms-2">
                <IoLogInOutline/>
                Login
              </NavLink>}
              {
                status === 'authenticated'?
              <NavLink to="/register" className="btn btn-outline-dark ms-2" style={{display:"none"}}>
                <BiUser/>
                Registro
              </NavLink>:
              <NavLink to="/register" className="btn btn-outline-dark ms-2">
              <BiUser/>
              Registro
            </NavLink>}
              <NavLink to="/cart" className="btn btn-outline-dark ms-2">
                <BsCart2/>
                  ({cart?.length})
              </NavLink>
              
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default NavBar;

