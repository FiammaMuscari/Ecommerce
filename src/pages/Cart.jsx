import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from 'sweetalert2'
import {
  removeFromCart,
  removeAll,
  reduceProduct,
  incrementProduct,
} from "../Redux/Cart/CartSlice";
import EmptyCart from "../Components/EmptyCart";
import { toast } from "react-toastify";
import { useCheckAuth } from "../hooks/useCheckAuth";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart);
  const { status } = useCheckAuth();
  const navigate = useNavigate();

  const totalPrice = products.cart.reduce(
    (a, c) => a + c.quantity * c.price,
    0
  );


  const removeProductHandler = (product) => {
    dispatch(removeFromCart(product));
    toast.warning(`${product.title.slice(0, 20)} fue eliminado de tu carrito`, {
      autoClose: 1000,
    });
  };

  const removeAllProduct = () => {
    dispatch(removeAll());
    toast.error("Carrito vacio", {
      autoClose: 1000,
    });
  };

  if (products.cart.length === 0) {
    return <EmptyCart />;
  }

  const formatNumber = (num) =>{
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
  }

  const total = `${formatNumber(Math.floor((totalPrice*150)))}`
  const onBuy =()=>{
  Swal.fire(
    '¡Compra realizada!',
    'Tu compra por $ '+ total + ' fue exitosa',
    'success'
  )
  } 

  return (
    <div className="container py-5 mt-4" style={{gap: '1em',
      display: 'grid'}}>
      <h2 className="py-3 text-center">Carrito de compras</h2>
      {products?.cart?.map((product) => {
        return (
          <div key={product.id} style={{display: "flex", justifyContent: 'space-evenly'}}>
            <div>
              <img src={product.image} alt="product" width="50px" />
            </div>
            <div>
              <h5 style={{ maxWidth: "180px" }}>
                {product.title.slice(0, 20)}
              </h5>
              <h6>$ {formatNumber(Math.floor((product.price * 150)))}</h6>
            </div>
            <div className="cartBtns" style={{alignItems: "center", gap: "1em", display: "flex"}}>
            <div style={{display: "flex", alignItems: "baseline", gap: '1em'}}>
            <button
              className="btn btn-light"
              onClick={() => dispatch(reduceProduct(product))}
            >
              -
            </button>
            <h6>{product.quantity}</h6>
            <button
               className="btn btn-light"
                onClick={() => dispatch(incrementProduct(product))}
            >
                +
            </button>
            </div>
            <button
                className="btn btn-danger"
                onClick={() => {
                  removeProductHandler(product);
                }}
              >
                Borrar
              </button>
            </div>
          </div>
        );
      })}
      <hr />
      <div className="mb-5 d-flex justify-content-between">
        <button className="btn btn-danger"  onClick={removeAllProduct}>
          Eliminar todos
        </button>
        <h5>
          Total: <b>${formatNumber(Math.floor((totalPrice*150)))}</b>
        </h5>
      </div>
      {
                status === 'authenticated'?
      <button className="btn btn-success" onClick={onBuy}>Comprar carrito</button>:
      <button className="btn btn-success" onClick={() => navigate("/login")}>Ingresa para comprar</button>
  }
    </div>
  );
};

export default Cart;
