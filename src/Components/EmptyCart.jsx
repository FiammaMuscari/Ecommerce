import React from "react";
import { useNavigate } from "react-router-dom";
import cart from "../assets/cart.jpg";


const EmptyCart = () => {
  const navigate = useNavigate();
  return (
    <div style={{ height:"32em"}} >
      <div style={{display:"grid", justifyContent:'center'}}>
        <img src={cart} alt="empty-cart-img" />
        <button className="btn btn-primary" onClick={() => navigate("/")}>
          Añade productos
        </button>
      </div>
    </div>
  );
};

export default EmptyCart;
